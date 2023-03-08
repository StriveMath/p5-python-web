from p5 import *


def setup():
  coordinateMode(BOTTOM_LEFT)
  createCanvas(400, 400)


def draw():
  background('black')
  values = [2, 4, 8, 4, 2]

  push()
  translate(24, 24)
  fill('violet')
  stroke('white')
  drawBarGraph(values)
  pop()

  push()
  labels = ['a', 'b', 'c', 'd', 'e']
  w = 150
  h = 100
  s = 10
  fill('cyan')
  stroke('white')
  translate(200, 200)
  drawBarGraph(values, labels, w, h, s)
  pop()
