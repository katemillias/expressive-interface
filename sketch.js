let brushshape = "circle"
let brushcolor = "black"

function setup() {

    // create a 640x480 pixel canvas and attach it to your HTML
    createCanvas(640, 480).parent('p5')

print("this is the setup")

  background(188, 194, 190) ////remember what you learned in landscape

}

function draw() {


if(mouseIsPressed) {

  if(brushcolor == "red 2.0") {

let r = random(0,255)
print (r)
  strokeWeight(random(0,10))
  stroke ( random(0,255),random(0,255),random(0,255) ) ///red

}

if (brushcolor == "blue"){
  strokeWeight(2)
  stroke(0,0,255)
  fill(0,0,255)///blue

}

if (brushcolor == "purple"){
  strokeWeight(2)
  stroke(70,10,112)
  fill(70,10,112)//purp
}

if (brushcolor == "black"){
  strokeWeight(2)
  stroke(5,0,8)
  fill(5,0,8) //black
}

if (brushcolor == "light blue"){
  strokeWeight(2)
  stroke(187,233,250)
  fill(187,233,250)///blue
}

if (brushcolor == "light purple"){
  strokeWeight(2)
  stroke(230,189,255)
  fill(30,189,255) //light purp
}

if (brushcolor == "orange"){
  strokeWeight(2)
  stroke(250,101,2)
  fill(250,101,2)//orange
}

if (brushcolor == "black 2.0"){
  strokeWeight(1)
  stroke(0, 0, 50, 50) /// black 2.0
    line(0, 0, mouseX, mouseY)
    line(width, 0, mouseX, mouseY)
    line(0, height, mouseX, mouseY)
    line(width, height, mouseX, mouseY)
}

if (brushcolor == "black 3.0"){
  strokeWeight(2)
  fill(255)
    rectMode(CORNERS) // https://p5js.org/reference/#/p5/rectMode
    rect(mouseX, mouseY, pmouseX, pmouseY)
    rectMode(CORNER)
}

if (brushcolor == "black 4.0") {
    noStroke()
    fill(random(255), random(255), 0, 100)
    circle(mouseX + random(-20, 20), mouseY + random(-20, 20), random(2, 30))
}

if (brushcolor == "black 5.0") {
    line(mouseX - 20, mouseY - 20, mouseX + 20, mouseY + 20)
}

if (brushcolor == "black 6.0") {
    strokeWeight(2)
    stroke(0, 0, 0, 80)
    line(mouseX, mouseY, mouseX + random(-50, 50), mouseY + random(-50, 50))
}

if (brushcolor == "yellow"){
  strokeWeight(2)
  stroke(240, 233, 43)
  fill(240, 233, 43) //yellow
}

if (brushcolor == "green"){
  strokeWeight(2)
  stroke(26, 148, 7)
  fill(26, 148, 7) //green
}

if (brushcolor == "gray"){
  strokeWeight(2)
  stroke(128, 130, 127)
  fill(128, 130, 127) //gray
}

if (brushcolor == "gold"){
  strokeWeight(2)
  stroke(235, 176, 16)
  fill(235, 176, 16) //gold
}

if (brushshape == "circle"){
  circle(mouseX, mouseY, 20) ///circle
}

if (brushcolor == "eraser"){
  strokeWeight(2)
  stroke(188, 194, 190) ///eraser
  fill(188, 194, 190)
  line(mouseX, mouseY, pmouseX, pmouseY)
}

}

fill(0,0,255) //blue
rect(10,10,30,30)

fill(255,0,0) //red
circle(600,26,40)

fill(70,10,112) //purp
circle(29,444,40)

fill(5,0,8) //black
rect(587,431,40,30)

fill(187,233,250) // light blue
rect(10,60,30,30)

fill(230,189,255) // light purp
circle(78,438,40)

fill(250,101,2) //orange
circle(599,81,40)

fill(11, 4, 18) //black 2.0
rect(587,380,40,30)

fill(0, 8, 8) //black 3.0
rect(587,337,40,30)

fill(10,10,10) //black 4.0
rect(587,295,40,30)

fill(0,8,0) //black 5.0
rect(587,258,40,30)

fill(8,0,4) //black 6.0
rect(587,215,40,30)

fill(240, 233, 43) //yellow
circle(601,126, 40)

fill(26, 148, 7) //green
circle(601,170, 40)

fill(128, 130, 127) //gray
circle(545,442, 40)

fill(235, 176, 16) //gold
circle(484,442, 40)


circle(429,435, 40) //circle

fill(252, 5, 5) //red
circle()

fill(188, 194, 190) //eraser
circle(386,435, 40)

}

function mouseClicked() {

    print(int(mouseX), int(mouseY))

if (mouseX > 10 && mouseX < 40 && mouseY > 10 && mouseY < 40) {
  print("blue button") ///blue square
  brushcolor = "blue"
}

if (mouseX > 560 && mouseX < 640 && mouseY > 6 && mouseY < 46) {
  print("red button") ///red circle
brushcolor = "red"
}

if (mouseX > 11 && mouseX < 69 && mouseY > 404 && mouseY < 484) {
print("purple button") ///purp circle
brushcolor = "purple"
}

if (mouseX > 587 && mouseX < 627 && mouseY > 431 && mouseY < 461){
  print("black button") //black square
  brushcolor = "black"
}

if (mouseX > 10 && mouseX < 40 && mouseY > 60 && mouseY < 90) {
  print("light blue button") ///blue square
  brushcolor = "light blue"
}

if (mouseX > 38 && mouseX < 188 && mouseY > 398 && mouseY < 478) {
print("purple button") ///light purp circle
brushcolor = "light purple"
}

if (mouseX > 579 && mouseX < 619 && mouseY > 61 && mouseY < 101) {
  print("orange button") ///orange circle
brushcolor = "orange"
}

if (mouseX > 587 && mouseX < 627 && mouseY > 350 && mouseY < 410){
  print("black 2.0") //black square 2.0
  brushcolor = "black 2.0"
}

if (mouseX > 587 && mouseX < 627 && mouseY > 307 && mouseY < 367){
  print("black 3.0") //black square 3.0
  brushcolor = "black 3.0"
}

if (mouseX > 587 && mouseX < 627 && mouseY > 265 && mouseY < 325){
  print("black 4.0") //black square 4.0
  brushcolor = "black 4.0"
}

if (mouseX > 587 && mouseX < 627 && mouseY > 228 && mouseY < 288){
  print("black 5.0") //black square 5.0
  brushcolor = "black 5.0"
}

if (mouseX > 587 && mouseX < 627 && mouseY > 185 && mouseY < 245){
  print("black 6.0") //black square 6.0
  brushcolor = "black 6.0"
}

if (mouseX > 581 && mouseX < 621 && mouseY > 106 && mouseY < 146) {
  print("yellow button") ///yellow circle
brushcolor = "yellow"
}

if (mouseX > 581 && mouseX < 621 && mouseY > 150 && mouseY < 190) {
  print("green button") ///green circle
brushcolor = "green"
}

if (mouseX > 525 && mouseX < 565 && mouseY > 422 && mouseY < 462) {
  print("gray button") ///gray circle
brushcolor = "gray"
}

if (mouseX > 464 && mouseX < 504 && mouseY > 422 && mouseY < 462) {
  print("gold button") ///gold circle
brushcolor = "gold"
}

if (mouseX > 409 && mouseX < 449 && mouseY > 415 && mouseY < 455) {
  print("circle") ///circle
brushshape = "circle"
}

if (mouseX > 386 && mouseX < 435 && mouseY > 406 && mouseY < 455) {
  print("eraser") ///eraser
brushcolor = "eraser"
}

}


function keyPressed() {

    print(key)

    if (key=="b") {
stroke(0,0,255)
    }

if (key=="r"){
  stroke(255,0,0)
}
}
