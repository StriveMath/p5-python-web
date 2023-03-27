from p5 import *


def setup():
  coordinateMode(BOTTOM_LEFT)
  createCanvas(334 * 1.5, 334)
  loadFont('assets/PermanentMarker-Regular.ttf', 'font')
  loadImage('assets/ada.jpg', 'ada')
  loadSound('assets/pop.mp3', 'pop')


def draw():
  image(assets['ada'], 0, 0)
  image(assets['ada'],
        assets['ada'].width, height / 2,
        assets['ada'].width / 2, assets['ada'].height / 2
        )
  image(assets['ada'],
        assets['ada'].width, assets['ada'].height / 4,
        assets['ada'].width / 4, assets['ada'].height / 4,
        assets['ada'].height / 2, assets['ada'].height / 2,
        assets['ada'].width / 2, assets['ada'].height / 2
        )
  drawBubble()


def mousePressed():
  assets['pop'].play()


def drawBubble():
  push()
  noStroke()
  ellipse(100, 275, 100, 50)
  triangle(75, 275, 125, 275, 150, 240)
  textFont(assets['font'])
  textAlign(CENTER, CENTER)
  fill('black')
  noStroke()
  text('Click to play!', 100, 275)
  pop()
