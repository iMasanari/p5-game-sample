import Takeuti from './Takeuti'

let player
let splites = {}

export function preload() {
  loadImage('image/takeuti.png', function(img) {
    splites.takeuti = [
      img.get(0, 0, 60, 100),
      img.get(64, 0, 60, 100),
      img.get(128, 0, 60, 100),
    ]
  })
  loadImage('image/tuda.png', function(img) {
    splites.tuda = [
      img.get(0, 0, 60, 100),
      img.get(64, 0, 60, 100),
      img.get(128, 0, 60, 100),
    ]
  })
}

export function setup() {
  createCanvas(540, 540)

  player = new Takeuti(splites.takeuti)
}

export function draw() {
  background(255)
  
  player.update()
  player.display()
}
