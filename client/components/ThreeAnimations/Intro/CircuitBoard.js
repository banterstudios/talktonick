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
      quantity: 100,
      size: 8,
      color: 0xFF0000,
      spread: 5,
      ...props
    }

    this.hasStarted = false
    this.particles = []
    // this.startTime = null
    // this.endTime = null
    // this.particleMaterial = null
    // this.particleGeometry = null
    // this.paths = []

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
      spread,
      quantity
    } = this.props

    const material = new THREE.PointCloudMaterial({
      size,
      color,
      transparent: true,
      opacity: 0.5
    })

    for (let k = 0; k < quantity; k++) {
      const geometry = new THREE.Geometry()

      const x = (Math.random() * (1000 - -1000) + -1000)
      const y = (Math.random() * (1000 - -1000) + -1000)
      const z = 0

      for (let i = 0; i < amount; i++) {
        const vertex = new THREE.Vector3()

        vertex.x = x
        vertex.y = y + (i * (size + spread))
        vertex.z = z
        vertex.hasStarted = false
        vertex.startTime = 0
        vertex.delay = ((amount - i) * 200)
        vertex.pos = 0
        vertex.path = createPath(x, y + (i * (size + spread)))
        geometry.vertices.push(vertex)
      }

      this.particles.push(
        new THREE.PointCloud(geometry, material)
      )
    }
  }

  attachScene = (scene) => {
    this.particles.forEach((particle) => {
      scene.add(particle)
    })
  }

  render = () => {
    this.particles.forEach(({ geometry }) => {
      geometry.vertices.forEach((vertex) => {
        if (!vertex.hasStarted) {
          vertex.hasStarted = true
          vertex.startTime = Date.now()
        }

        if ((vertex.startTime + vertex.delay) <= Date.now()) {
          vertex.pos += 0.01
          const point = vertex.path.getPointAt(vertex.pos)
          if (point) {
            vertex.x = point.x
            vertex.y = point.y
          }
        }
      })

      geometry.verticesNeedUpdate = true
    })
  }
}
