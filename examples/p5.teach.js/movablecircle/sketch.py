from p5 import *


def setup():
  coordinateMode(BOTTOM_LEFT)
  createCanvas(400, 400)
  global p1, p2, p3
  p1 = createMovableCircle(50, 50, 15)
  p2 = createMovableCircle(25, 0, 15)
  p2.lock('y', 0)
  p3 = createMovableCircle(0, 75, 15)
  p3.lock('x', 0)


def draw():
  background('black')
  translate(200, 200)
  rotate(45)
  drawTickAxes()

  stroke('white')
  line(p2.x, p2.y, p2.x, p3.y)
  line(p3.x, p3.y, p2.x, p3.y)

  p1.draw()
  p2.draw()
  p3.draw()
