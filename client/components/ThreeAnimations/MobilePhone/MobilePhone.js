import React, { PureComponent } from 'react'
import glamorous, { withTheme } from 'glamorous'
import { requestAnimationFrame, cancelAnimationFrame } from 'client/utils/domUtils'
import * as THREE from 'three'
import { EffectComposer, FilmPass, RenderPass } from 'postprocessing'
import { spaceDome } from 'client/consts/images'

const rAnimFrame = requestAnimationFrame()
const cAnimFrame = cancelAnimationFrame()

const Wrapper = glamorous.div(() => ({
  position: 'relative',
  width: '100%',
  overflow: 'hidden'
}))

const Canvas = glamorous.canvas(() => ({
  position: 'relative',
  width: '100%',
  height: '100vh'
}))

@withTheme
export default class MobilePhone extends PureComponent {
  constructor (props) {
    super(props)

    this.canvasRef = null
    this.animationFrameId = null

    this.composer = null
    this.circle = null
    this.skele = null
    this.camera = null
    this.scene = null
    this.renderer = null
    this.uniforms = null
    this.clock = null
  }

  componentDidMount () {
    this.init()
    this.createSkeletonCirlce()
    this.createLights()
    this.createSkyDome()
    this.bindEvents()
    this.animate()
  }

  componentWillUnmount () {
    if (this.animationFrameId) {
      cAnimFrame(this.animationFrameId)
    }

    this.unBindEvents()
  }

  setRef = (ref) => (this.canvasRef = ref)

  init = () => {
    const { theme: { headerHeightPlain } } = this.props

    const width = window.innerWidth
    const height = (window.innerHeight - headerHeightPlain)

    this.clock = new THREE.Clock()

    this.camera = new THREE.PerspectiveCamera(75, width / height, 1, 10000)
    this.camera.position.z = 300

    this.scene = new THREE.Scene()

    this.composer = new EffectComposer(new THREE.WebGLRenderer({ antialias: true, canvas: this.canvasRef, alpha: true }))
    this.composer.addPass(new RenderPass(this.scene, this.camera))

    // const bloomOpts = {
    //   resolutionScale: 1,
    //   kernelSize: 5,
    //   intensity: 1.3,
    //   distinction: 1,
    //   screenMode: true
    // }

    // const bloomPass = new BloomPass(bloomOpts)
    // bloomPass.renderToScreen = true
    // this.composer.addPass(bloomPass)

    const filmOpts = {
      sepia: true,
      greyscale: false,
      vignette: false,
      eskil: false,
      screenMode: true,
      noise: true,
      scanlines: true,
      noiseIntensity: 0.2,
      scanlineIntensity: 0.2,
      greyscaleIntensity: 1.0,
      sepiaIntensity: 1.0,
      vignetteOffset: 1.0,
      vignetteDarkness: 1.0
    }

    const filmPass = new FilmPass(filmOpts)
    filmPass.renderToScreen = true
    this.composer.addPass(filmPass)

    this.composer.setSize(width, height)
  }

  createSkeletonCirlce = () => {
    this.circle = new THREE.Object3D()
    this.skele = new THREE.Object3D()

    const geom = new THREE.IcosahedronGeometry(7, 1)
    const geom2 = new THREE.IcosahedronGeometry(15, 1)

    const mat = new THREE.MeshPhongMaterial({
      color: 0xf58d1e,
      shading: THREE.FlatShading
    })

    const mat2 = new THREE.MeshPhongMaterial({
      color: 0xf58d1e,
      wireframe: true,
      side: THREE.DoubleSide
    })

    const planet = new THREE.Mesh(geom, mat)
    planet.scale.x = planet.scale.y = planet.scale.z = 16
    this.circle.add(planet)

    const planet2 = new THREE.Mesh(geom2, mat2)
    planet2.scale.x = planet2.scale.y = planet2.scale.z = 10
    this.skele.add(planet2)

    this.scene.add(this.circle)
    this.scene.add(this.skele)
  }

  createLights = () => {
    const lights = []

    lights[0] = new THREE.DirectionalLight(0xFFFFFF, 1)
    lights[0].position.set(1, 0, 0)
    lights[1] = new THREE.DirectionalLight(0xFFFFFF, 1)
    lights[1].position.set(0.75, 1, 0.5)
    lights[2] = new THREE.DirectionalLight(0xFFFFFF, 1)
    lights[2].position.set(-0.75, -1, 0.5)

    this.scene.add(lights[0])
    this.scene.add(lights[1])
    this.scene.add(lights[2])
  }

  createSkyDome = () => {
    const geometry = new THREE.SphereGeometry(3000, 60, 40)
    const uniforms = {
      texture: { type: 't', value: THREE.ImageUtils.loadTexture(spaceDome) }
    }

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        varying vec2 vUV;

        void main() {  
          vUV = uv;
          vec4 pos = vec4(position, 1.0);
          gl_Position = projectionMatrix * modelViewMatrix * pos;
        }
      `,
      fragmentShader: `
        uniform sampler2D texture;  
        varying vec2 vUV;
        
        void main() {  
          vec4 sample = texture2D(texture, vUV);
          gl_FragColor = vec4(sample.xyz, sample.w);
        }
      `
    })

    const skyBox = new THREE.Mesh(geometry, material)
    skyBox.scale.set(-1, 1, 1)
    skyBox.eulerOrder = 'XZY'
    skyBox.renderDepth = 1000.0
    this.scene.add(skyBox)
  }

  bindEvents = () => {
    window.addEventListener('resize', this.handleResize, false)
  }

  unBindEvents = () => {
    window.removeEventListener('resize', this.handleResize, false)
  }

  handleResize = () => {
    const { theme: { headerHeightPlain } } = this.props
    const width = window.innerWidth
    const height = (window.innerHeight - headerHeightPlain)

    this.camera.aspect = (width / height)
    this.camera.updateProjectionMatrix()

    this.composer.setSize(width, height)
  }

  rotateCircleSkele = () => {
    this.circle.rotation.x -= 0.0020
    this.circle.rotation.y -= 0.0030
    this.skele.rotation.x -= 0.0010
    this.skele.rotation.y += 0.0020
  }

  animate = () => {
    this.animationFrameId = rAnimFrame(this.animate)

    this.rotateCircleSkele()

    this.composer.render(this.clock.getDelta())
  }

  render () {
    return (
      <Wrapper>
        <Canvas innerRef={this.setRef} />
      </Wrapper>
    )
  }
}
