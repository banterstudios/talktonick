import * as THREE from 'three'

const getPath = (rNum, x, y) => {
  let x1
  let y1
  let y2
  let x2

  switch (rNum) {
    case 0:
      x1 = (x + 40)
      y1 = (y + 40)
      y2 = (y1 + 40)

      return new THREE.Path([
        new THREE.Vector2(x, y),
        new THREE.Vector2(x, y1),
        new THREE.Vector2(x1, y1),
        new THREE.Vector2(x1, y2)
      ])

    case 1:
      x1 = (x - 40)
      y1 = (y - 40)
      y2 = (y1 - 40)

      return new THREE.Path([
        new THREE.Vector2(x, y),
        new THREE.Vector2(x, y1),
        new THREE.Vector2(x1, y1),
        new THREE.Vector2(x1, y2)
      ])

    case 2:
      x1 = (x + 40)
      y1 = (y - 40)
      x2 = (x1 + 40)

      return new THREE.Path([
        new THREE.Vector2(x, y),
        new THREE.Vector2(x1, y),
        new THREE.Vector2(x1, y1),
        new THREE.Vector2(x2, y1)
      ])

    case 3:
      x1 = (x - 40)
      y1 = (y + 40)
      x2 = (x1 - 40)

      return new THREE.Path([
        new THREE.Vector2(x, y),
        new THREE.Vector2(x1, y),
        new THREE.Vector2(x1, y1),
        new THREE.Vector2(x2, y1)
      ])
  }
}

const getRandomNum = (amount = 4) => (Math.random() * (amount) >> 0)

export default class Particles {
  constructor (props) {
    this.props = {
      size: 4,
      amount: 10,
      color: 0xf58d1e,
      spread: 5,
      zIndex: 0,
      speed: 0.01,
      canRender: true,
      ...props
    }

    this.particle = null
    this.flippedOpacity = false
  }

  init = () => {
    const {
      size,
      color,
      spread,
      zIndex,
      amount
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
      const index = getRandomNum()

      const sX = (index === 0 || index === 1) ? x : (x + (i * (size + spread)))
      const sY = (index === 0 || index === 1) ? y + (i * (size + spread)) : y
      const sZ = z

      vertex.sX = sX
      vertex.sY = sY
      vertex.sZ = sZ

      vertex.x = (index === 0 || index === 1) ? x : (x + (i * (size + spread)))
      vertex.y = (index === 0 || index === 1) ? y + (i * (size + spread)) : y
      vertex.z = z
      vertex.hasStarted = false
      vertex.startTime = 0
      vertex.delay = (index === 0 || index === 3) ? ((amount - i) * 200) : ((i) * 200)
      vertex.pos = 0
      vertex.path = getPath(index, sX, sY + (i * (size + spread)))
      geometry.vertices.push(vertex)
    }

    this.particle = new THREE.PointCloud(geometry, material)
  }

  reset = () => {
    this.particle.geometry.vertices.forEach((particle) => {
      const { sX, sY, sZ } = particle

      particle.x = sX
      particle.y = sY
      particle.z = sZ
      particle.hasStarted = false
      particle.startTime = 0
      particle.pos = 0
    })

    this.particle.material.opacity = 0
  }

  setRender = (canRender) => (this.canRender = canRender)

  getParticle = () => this.particle

  render = (scene) => {
    const { speed, canRender } = this.props

    if (!canRender) {
      return false
    }

    const { geometry, material } = this.particle

    if (!this.flippedOpacity) {
      material.opacity += 0.01
      if (material.opacity >= 1) {
        this.flippedOpacity = true
      }
    } else if (this.flippedOpacity) {
      material.opacity -= 0.01

      if (material.opacity <= 0) {
        this.flippedOpacity = false
      }
    }

    let allDone = 0

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
        } else {
          allDone++
        }
      }
    })

    if (allDone === geometry.vertices.length) {
      this.reset()
    }

    geometry.verticesNeedUpdate = true
  }
}
