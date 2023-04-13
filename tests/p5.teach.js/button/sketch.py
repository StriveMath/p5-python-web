from p5 import *

def setup():
  createCanvas(windowWidth,windowHeight)
  coordinateMode(BOTTOM_LEFT)
  global button, cl
  button = createButton('click me')
  button.size(100)
  button.position(width/2, height-100)
  button.mousePressed(colorChange)
  cl = 'black'
  
def draw():
  background(cl)
  drawTickAxes()
  crosshair()


def colorChange(evt):
  global cl
  cl = (random(0,255),random(0,255),random(0,255))

  

