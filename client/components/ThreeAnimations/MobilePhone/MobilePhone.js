import React, { PureComponent } from 'react'
import glamorous, { withTheme } from 'glamorous'
import { requestAnimationFrame, cancelAnimationFrame } from 'client/utils/domUtils'
import * as THREE from 'three'

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

    this.circle = null
    this.skele = null
    this.camera = null
    this.scene = null
    this.renderer = null
    this.uniforms = null
  }

  componentDidMount () {
    this.init()
    this.createSkeletonCirlce()
    this.createLights()
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

    this.camera = new THREE.PerspectiveCamera(75, width / height, 1, 10000)
    this.camera.position.z = 300

    this.scene = new THREE.Scene()

    this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas: this.canvasRef, alpha: true })
    this.renderer.setSize(width, height)
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

    this.renderer.setSize(width, height)
  }

  rotateCircleSkele = () => {
    this.circle.rotation.x -= 0.0020
    this.circle.rotation.y -= 0.0030
    this.skele.rotation.x -= 0.0010
    this.skele.rotation.y += 0.0020
  }

  animate = () => {
    this.renderer.setClearColor(0x000000, 0)

    this.animationFrameId = rAnimFrame(this.animate)

    this.rotateCircleSkele()

    this.renderer.render(this.scene, this.camera)
  }

  render () {
    return (
      <Wrapper>
        <Canvas innerRef={this.setRef} />
      </Wrapper>
    )
  }
}
