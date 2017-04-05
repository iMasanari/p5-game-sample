import splites from './splite'

export default class Player {
  constructor(x, y, splite = splites.takeuti) {
    this.pos = createVector(x, y)
    this.vel = createVector(0, 0)
    this.speed = 1

    this.width = splite[0].width
    this.height = splite[0].height

    this.splite = splite
    this.index = 0

    this.controler = {}
  }
  update() {
    if (this.controler[UP_ARROW]) {
      this.vel.y -= this.speed
    }
    if (this.controler[DOWN_ARROW]) {
      this.vel.y += this.speed
    }
    if (this.controler[RIGHT_ARROW]) {
      this.vel.x += this.speed
    }
    if (this.controler[LEFT_ARROW]) {
      this.vel.x -= this.speed
    }

    this.pos.add(this.vel)
    this.vel.mult(0.9)

    if (frameCount % 30 === 0) {
      this.index = this.index ? 0 : 1
    }
  }

  display() {
    image(this.splite[this.index], this.pos.x, this.pos.y)
  }
}