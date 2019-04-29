var img2;
var img3;
var img4;
var img5;
var img6;


function preload() {
  img2 = loadImage("10.jpg");
  img3 = loadImage("9.jpg");
  img4 = loadImage("8.jpg");
  img5 = loadImage("3.jpg");
  img6 = loadImage("4.png");

}


function setup() {
  createCanvas(1500, 1400);
  noStroke();
  fill (0);
}
function draw() {

background (0,0,50,100);


  if ((mouseX <= 750) && (mouseY <= 750)) {
    image(img2,0, 0, 750, 750);   // Upper-left
  }

  else if ((mouseX <= 750) && (mouseY > 750)) {
    image(img3,0, 750, 750, 750);  // Lower-left
  }
  else if ((mouseX > 750) && (mouseY <= 750)) {
    image(img4,750, 0, 750, 750);  // Upper-right
  }
  else {
    image(img5,750, 750, 750, 750); // Lower-right
  }


  image(img6, mouseX, mouseY);


}
