import splites from './splite'

export default class Player {
  constructor(x, y, splite = splites.takeuti) {
    this.pos = createVector(x, y)
    this.vel = createVector(0, 0)

    this.width = splite[0].width
    this.height = splite[0].height

    this.splite = splite
    this.index = 0

    this.isFly = false
    this.controler = {}
  }
  update() {
    if (this.controler[UP_ARROW]) {
      this.moveUp()
    }
    if (this.controler[DOWN_ARROW]) {
      this.moveDown()
    }
    if (this.controler[RIGHT_ARROW]) {
      this.moveRight()
    }
    if (this.controler[LEFT_ARROW]) {
      this.moveLeft()
    }

    this.pos.add(this.vel)
    this.vel.y += 0.9

    this.vel.x *= this.isFly ? 0.98 : 0.9

    if (height <= this.pos.y + this.height) {
      this.pos.y = height - this.height

      this.isFly = false
    }
    else {
      this.isFly = true
    }

    if (frameCount % 30 === 0) {
      this.index = this.index ? 0 : 1
    }
  }

  moveUp() {
    this.vel.y += this.isFly ? -0.5 : -this.vel.y + -12
  }
  moveDown() {
      this.vel.y += 0.5
  }
  moveRight() {
      this.vel.x += this.isFly ? 0.1 : 1
  }
  moveLeft() {
      this.vel.x -= this.isFly ? 0.1 : 1
  }

  display() {
    image(this.splite[this.index], this.pos.x, this.pos.y)
  }
}