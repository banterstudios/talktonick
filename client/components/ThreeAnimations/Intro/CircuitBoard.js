import * as THREE from 'three'
import Particles from './Particles'

export default class CircuitBoard {
  constructor (props) {
    this.props = {
      quantity: 10,
      zIndex: 0,
      ...props
    }

    this.renderItems = true
    this.particles = []
  }

  init = (scene) => {
    this.createParticles()
    this.attachScene(scene)
  }

  createParticles = () => {
    const { quantity, zIndex } = this.props

    for (let i = 0; i < quantity; i++) {
      const particle = new Particles({ zIndex })
      particle.init()

      this.particles.push(particle)
    }
  }

  attachScene = (scene) => {
    this.particles.forEach((particle) => {
      scene.add(particle.getParticle())
    })
  }

  render = (scene) => {
    if (!this.renderItems) {
      return false
    }

    this.particles.forEach((particle) => particle.render())
  }
}
