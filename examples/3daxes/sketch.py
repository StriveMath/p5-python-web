from p5 import *


def setup():
  coordinateMode(BOTTOM_LEFT)
  createCanvas(400, 400, WEBGL)


def draw():
  background('black')
  orbitControl()
  draw3DAxes(100)
