from p5 import *


def setup():
  coordinateMode(BOTTOM_LEFT)
  createCanvas(400, 400)


def draw():
  background('black')

  translate(200, 200)
  # rotate(45)
  translate(cos(frameCount) * 100, sin(frameCount * 2) * 100)
  rotate(frameCount)

  drawTickAxes()
  x = mouse().x
  y = mouse().y
  circle(x, y, 50)
