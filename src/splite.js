const splites = {}

export default splites

export function initSplite() {
  loadImage('image/takeuti.png', function (img) {
    splites.takeuti = [
      img.get(0, 0, 60, 100),
      img.get(64, 0, 60, 100),
      img.get(128, 0, 60, 100),
    ]
  })
  loadImage('image/tuda.png', function (img) {
    splites.tuda = [
      img.get(0, 0, 60, 100),
      img.get(60, 0, 60, 100),
      img.get(120, 0, 60, 100),
    ]
  })
}
