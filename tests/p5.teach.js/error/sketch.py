from p5 import *


def setup():
  coordinateMode()
  createCanvas(400, 400)


def draw():
  background('black')
  drawTickAxes()
  fill('hotpink')
  circle(200, 200, 50)
