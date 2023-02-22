from p5 import *


def setup():
  coordinateMode(BOTTOM_LEFT)
  createCanvas(400, 400)


def draw():
  background('black')
  drawTickAxes()
  fill('hotpink')
  circle(bounce(400, 0, 5), 300, 50)
  circle(wave(400, 0, 5), 100, 50)
