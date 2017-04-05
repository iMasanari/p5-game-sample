import Player from './Player'
import socket from './socket'

export default class Takeuti extends Player {
  update() {
    this.move()
    super.update()

    // 1秒に約3回（60フレーム/20）、サーバーに送信
    if (frameCount % 20 === 0) {
      this.emitPosition()
    }
  }

  move() {
    // bubleのバグ？のため、後からthis.controlerに追加
    const controler = {
      [UP_ARROW]: keyIsDown(UP_ARROW),
      [DOWN_ARROW]: keyIsDown(DOWN_ARROW),
      [RIGHT_ARROW]: keyIsDown(RIGHT_ARROW),
      [LEFT_ARROW]: keyIsDown(LEFT_ARROW),
    }
    this.controler = controler
  }
  emitPosition() {
    const data = {
      pos: { x: this.pos.x, y: this.pos.y },
      vel: { x: this.vel.x, y: this.vel.y },
      key: {
        [UP_ARROW]: keyIsDown(UP_ARROW) || undefined,
        [DOWN_ARROW]: keyIsDown(DOWN_ARROW) || undefined,
        [RIGHT_ARROW]: keyIsDown(RIGHT_ARROW) || undefined,
        [LEFT_ARROW]: keyIsDown(LEFT_ARROW) || undefined,
      },
    }

    socket.emit('update', data);
  }
}
