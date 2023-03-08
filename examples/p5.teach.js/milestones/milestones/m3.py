from p5 import *


def setup():
  coordinateMode(BOTTOM_LEFT)
  createCanvas(400, 400)
  background('black')
  drawTickAxes()


def draw():
  fill('hotpink')
  stroke('hotpink')
  x = millis() / 10
  y = 2 * x + 50
  circle(x, y, 10)
