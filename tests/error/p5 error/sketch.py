from p5 import *


def setup():
  createCanvas(400, 400)
  background("black")

def draw():
  line()
  circle()
  point()
  rect()
  square()
  triangle()
  circle()
  ellipse()
  arc()
  quad()
  beginShape()

  rectMode()
  ellipseMode()
  frameRate(60, 1)
  
  #text()
  textSize(True)
  textAlign(True)

  random(True)
  #randomGaussian()
  dist()

  colorMode()
  # fill()
  # stroke()
  strokeWeight()
  # background()