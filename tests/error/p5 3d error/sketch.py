from p5 import *

def setup():
  createCanvas(400, 400, WEBGL)
  background("black")

def draw():

  plane(True)
  box(True)
  sphere(True)
  cone(True)
  cylinder(True)
  ellipsoid(True)
  torus(True)

  orbitControl(True)
  translate()
  rotateZ()
  rotateX()
  rotateY()
  scale()