from p5 import *

def setup():
  global hourglass
  Canvas(400, 400)
  world.gravity.y = 10

  centerX = width * 0.5
  centerY = height * 0.5
  hourglass = Sprite(centerX, centerY, [200, 60, 200, 60, 212, -120, 200, -120, 200, 60, 212, -120], 'kinematic')
  hourglass.color = 'white' # set to another color to see the hourglass shape
  hourglass.angularDamping = 1000

  for i in range(200):
    x = centerX + ((i % 12) - 6) * 6
    y = centerY + (64 + (i / 12) * 6) * (1 if i % 2 else -1)

    Sprite(x, y, 6).friction = 0.02

def draw():
  clear()

  if (mouse.presses()):
    hourglass.rotate(180, 2)