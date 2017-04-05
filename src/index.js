import Takeuti from './Takeuti'
import Tuda from './Tuda'
import { initSplite } from './splite'
import socket from './socket'

/** @type {Takeuti} */
let takeuti

/** @type {Tuda} */
let tuda

export function preload() {
  // 画像を先に読み込む
  initSplite()
}

export function setup() {
  createCanvas(540, 540)

  takeuti = new Takeuti(0, 0)
  tuda = new Tuda(0, 0)
}

export function draw() {
  background(255)

  tuda.update()
  takeuti.update()

  tuda.display()
  takeuti.display()
}

// サーバーからの通信を受け取る
socket.on('update', (data) => {
  if (tuda) {
    tuda.setUpdateData(data)
  }
})

/* キー入力時に位置情報を送信 */
// export function keyPressed() {
//   if (takeuti) {
//     takeuti.emitPosition()
//   }
// }

// export function keyReleased() {
//   if (takeuti) {
//     takeuti.emitPosition()
//   }
// }
