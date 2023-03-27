from p5 import *


def setup():
  createCanvas(400, 400)
  coordinateMode()


def draw():
  background('black')
  drawTickAxes()
  fill('hotpink')
  circle(200, 200, 50)
