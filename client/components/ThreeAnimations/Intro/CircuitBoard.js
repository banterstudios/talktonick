import * as THREE from 'three'

const createPath = (x, y) => {
  const x1 = (x + 40)
  const y1 = (y + 40)
  const y2 = (y1 + 40)

  return new THREE.Path([
    new THREE.Vector2(x, y),
    new THREE.Vector2(x, y1),
    new THREE.Vector2(x1, y1),
    new THREE.Vector2(x1, y2)
  ])
}

export default class CircuitBoard {
  constructor (props) {
    this.props = {
      amount: 5,
      size: 8,
      color: 0xFF0000,
      spread: 5,
      ...props
    }

    this.hasStarted = false
    this.startTime = null
    this.endTime = null
    this.particleMaterial = null
    this.particleGeometry = null
    this.particle = null
    this.paths = []
  }

  init = (scene) => {
    this.createParticles()
    this.attachScene(scene)
  }

  createParticles = () => {
    const {
      amount,
      size,
      color,
      spread
    } = this.props

    this.particleGeometry = new THREE.Geometry()
    this.particleMaterial = new THREE.PointCloudMaterial({
      size,
      color,
      transparent: true,
      opacity: 0.5
    })

    for (let i = 0; i < amount; i++) {
      const vertex = new THREE.Vector3()

      vertex.x = 0
      vertex.y = (i * (size + spread))
      vertex.z = 0
      vertex.delay = ((amount - i) * 200)
      vertex.pos = 0
      this.particleGeometry.vertices.push(vertex)
      this.paths.push(createPath(0, (i * (size + spread))))
    }

    this.particle = new THREE.PointCloud(this.particleGeometry, this.particleMaterial)
  }

  attachScene = (scene) => {
    scene.add(this.particle)
  }

  render = () => {
    if (!this.hasStarted) {
      this.hasStarted = true
      this.startTime = Date.now()
    }

    this.particleGeometry.vertices.forEach((vertex, i) => {
      if ((this.startTime + vertex.delay) <= Date.now()) {
        vertex.pos += 0.01
        const point = this.paths[i].getPointAt(vertex.pos)
        if (point) {
          vertex.x = point.x
          vertex.y = point.y
        }
      }
    })

    this.particleGeometry.verticesNeedUpdate = true
  }
}
