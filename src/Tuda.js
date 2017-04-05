import Player from './Player'
import splites from './splite'

export default class Tuda extends Player {
  constructor(x, y) {
    super(x, y, splites.tuda)

    this.playerFromUpdateData = new Player(x, y, splites.tuda)
  }

  update() {
    super.update()
    this.playerFromUpdateData.update()

    // 修正の調整量
    const adjustmentAmount = 1

    // 通信ラグのズレを調整する
    this.pos.x += constrain((this.playerFromUpdateData.pos.x - this.pos.x) / 2, -adjustmentAmount, adjustmentAmount)
    this.pos.y += constrain((this.playerFromUpdateData.pos.y - this.pos.y) / 2, -adjustmentAmount, adjustmentAmount)

    this.vel.add(this.playerFromUpdateData.vel)
    this.vel.mult(0.5)
  }

  setUpdateData(data) {
    this.playerFromUpdateData.pos.x = data.pos.x
    this.playerFromUpdateData.pos.y = data.pos.y

    this.playerFromUpdateData.vel.x = data.vel.x
    this.playerFromUpdateData.vel.y = data.vel.y

    this.playerFromUpdateData.controler = data.key

    this.controler = data.key
  }
}
