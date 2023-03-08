from p5 import *


def setup():
  coordinateMode(BOTTOM_LEFT)
  createCanvas(400, 400)

  background('black')
  fill('white')
  textAlign(CENTER, CENTER)
  text('Select a milestone 1–3 by pressing that key', 200, 100)

  createManager(3)
