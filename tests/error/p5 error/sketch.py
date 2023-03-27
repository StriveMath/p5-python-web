from p5 import *


def setup():
  createCanvas(400, 400)


def draw():
  background('black')
  fill('hotpink')
  circle(200, 200)
  rect(frameCount, 0, 10, 10)
