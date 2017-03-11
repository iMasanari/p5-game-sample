export default class Player {
  constructor(splites) {
    this.pos = createVector(0, 0)
    this.vel = createVector(0, 0)

    this.width = splites[0].width
    this.height = splites[0].height

    this.splites = splites
    this.index = 1

    this.isFly = false
  }
  update() {
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
  display() {
    image(this.splites[this.index], this.pos.x, this.pos.y)
  }
}