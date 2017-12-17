import React, { Component } from 'react'
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
export default class MobilePhone extends Component {
  constructor (props) {
    super(props)

    this.canvasRef = null
    this.animationFrameId = null

    this.camera = null
    this.scene = null
    this.renderer = null
    this.geometry = null
    this.material = null
    this.mesh = null
  }

  componentDidMount () {
    this.init()
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
    const { theme: { headerHeightPlain }} = this.props

    const width = window.innerWidth
    const height = (window.innerHeight - headerHeightPlain)

    this.camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10)
    this.camera.position.z = 1

    this.scene = new THREE.Scene()

    this.geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
    this.material = new THREE.MeshNormalMaterial()

    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.scene.add(this.mesh)

    this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas: this.canvasRef, alpha: true })
    this.renderer.setSize(width, height)
  }

  bindEvents = () => {
    window.addEventListener('resize', this.handleResize, false)
  }

  unBindEvents = () => {
    window.removeEventListener('resize', this.handleResize, false)
  }

  handleResize = () => {
    const { theme: { headerHeightPlain }} = this.props
    console.log(headerHeightPlain)
    const width = window.innerWidth
    const height = (window.innerHeight - headerHeightPlain)

    this.camera.aspect = (width / height)
    this.camera.updateProjectionMatrix()

    this.renderer.setSize(width, height)
  }

  animate = () => {
    this.renderer.setClearColor(0x000000, 0)

    this.animationFrameId = rAnimFrame(this.animate)

    this.mesh.rotation.x += 0.01
    this.mesh.rotation.y += 0.02

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
