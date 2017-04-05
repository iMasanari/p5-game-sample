import Player from './Player'
import splites from './splite'

export default class Tuda extends Player {
  constructor(x, y) {
    super(x, y, splites.tuda)

    this.player = new Player(x, y, splites.tuda)
    this.flyFlag = false
  }

  update() {
    super.update()
    this.player.update()

    // 通信ラグのズレを軽減する
    this.pos.x += constrain((this.player.pos.x - this.pos.x) / 2, -2, 2)
    this.pos.y += constrain((this.player.pos.y - this.pos.y) / 2, -2, 2)

    this.vel.add(this.player.vel)
    this.vel.mult(0.5)

    if (this.flyFlag) {
      this.flyFlag = false
      this.controler[UP_ARROW] = false
    }
  }

  setUpdateData(data) {
    this.player.pos.x = data.pos.x
    this.player.pos.y = data.pos.y

    this.player.vel.x = data.vel.x
    this.player.vel.y = data.vel.y

    this.player.controler = data.key

    this.controler = data.key

    if (data.isFly && data.isFly !== this.isFly) {
      this.player.controler[UP_ARROW] = true

      this.flyFlag = true
    }
  }

  display() {
    // ずらして表示させる
    image(this.splite[this.index], this.pos.x, this.pos.y - height / 2)
  }
}
