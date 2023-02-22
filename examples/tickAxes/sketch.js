function setup() {
    coordinateMode(BOTTOM_LEFT)
    createCanvas(400, 400);
}

function draw() {
    background("black");
    drawTickAxes()
    fill('hotpink')
    circle(200, 200, 50)
}