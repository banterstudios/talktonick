import * as THREE from 'three'

const getRandomPath = (x, y) => {
  const rNum = (Math.random() * (4) >> 0)

  let x1
  let y1
  let y2

  switch (rNum) {
    case 0:
    case 3:
      x1 = (x + 40)
      y1 = (y + 40)
      y2 = (y1 + 40)

      return {
        x1,
        y1,
        y2
      }

    case 1:
    case 2:
      x1 = (x - 40)
      y1 = (y - 40)
      y2 = (y1 - 40)

      return {
        x1,
        y1,
        y2
      }

    // case 2:
    //   return {

    //   }

    // case 3:
    //   return {

    //   }
  }
}

const createPath = (x, y) => {
  // const x1 = (x + 40)
  // const y1 = (y + 40)
  // const y2 = (y1 + 40)
  const { x1, y1, y2 } = getRandomPath(x, y)

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
      amount: 10,
      size: 4,
      color: 0xFF0000,
      spread: 5,
      speed: 0.01,
      zIndex: 0,
      spawnRate: 1000,
      ...props
    }

    this.renderItems = true
    this.spawnTimer = 0
    this.particles = []
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
      zIndex
    } = this.props

    const material = new THREE.PointCloudMaterial({
      size,
      color,
      transparent: true,
      opacity: 0
    })

    const geometry = new THREE.Geometry()

    const x = (Math.random() * (500 - -500) + -500)
    const y = (Math.random() * (500 - -500) + -500)
    const z = zIndex

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

  attachScene = (scene) => {
    this.particles.forEach((particle) => {
      scene.add(particle)
    })
  }

  render = (scene) => {
    if (!this.renderItems) {
      return false
    }

    const { speed, spawnRate } = this.props

    this.particles.forEach(({ geometry, material }) => {
      if (material.opacity <= 1) {
        material.opacity += 0.01
      }

      geometry.vertices.forEach((vertex) => {
        if (!vertex.hasStarted) {
          vertex.hasStarted = true
          vertex.startTime = Date.now()
        }

        if ((vertex.startTime + vertex.delay) <= Date.now()) {
          vertex.pos += speed
          const point = vertex.path.getPointAt(vertex.pos)
          if (point) {
            vertex.x = point.x
            vertex.y = point.y
          }
        }
      })

      geometry.verticesNeedUpdate = true
    })

    if (this.spawnTimer <= Date.now()) {
      this.createParticles()
      scene.add(this.particles[this.particles.length - 1])
      this.spawnTimer = (Date.now() + spawnRate)
    }
  }
}
