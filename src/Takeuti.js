import Player from './Player'

export default class Takeuti extends Player {
  update() {
    const speed = this.isFly ? 0.1 : 1

    if (keyIsDown(UP_ARROW)) {
      this.vel.y += this.isFly ? -0.5: -this.vel.y + -12
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.vel.y += 0.5
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.vel.x += speed
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.vel.x += -speed
    }

    super.update()
  }
}