import Player from './Player'
import splites from './splite'

export default class Tuda extends Player {
  constructor(x, y) {
    super(x, y, splites.tuda)

    this.player = new Player(x, y, splites.tuda)
  }

  update() {
    super.update()
    this.player.update()

    // 修正用の最高スピード
    const speed = this.speed * 1.5

    // 通信ラグのズレを軽減する
    this.pos.x += constrain((this.player.pos.x - this.pos.x) / 2, -speed, speed)
    this.pos.y += constrain((this.player.pos.y - this.pos.y) / 2, -speed, speed)

    this.vel.add(this.player.vel)
    this.vel.mult(0.5)
  }

  setUpdateData(data) {
    this.player.pos.x = data.pos.x
    this.player.pos.y = data.pos.y

    this.player.vel.x = data.vel.x
    this.player.vel.y = data.vel.y

    this.player.controler = data.key

    this.controler = data.key
  }
}
