let sky_img;

function preload() {
  sky_img = loadImage("images/sky.jpeg");
}

function setup () {
  createCanvas (1200,627);
  background(0);
  image(sky_img, 0, 0);
}
