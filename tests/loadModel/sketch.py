from p5 import *


def setup():
  global teapot
  createCanvas(400, 400, WEBGL)
  teapot = loadModel('assets/teapot.obj', True)


def draw():
  background('black')
  coordinateMode(TOP_LEFT)
  model(teapot)
