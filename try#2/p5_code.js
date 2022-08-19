let sky_img, sea_img, land_img, sun_img;
let remove_top_mask;

function preload() {
  sky_img = loadImage("images/sky.jpeg");
  sea_img = loadImage("images/sea.jpeg");
  land_img = loadImage("images/landscape.jpeg");
  sun_img = loadImage("images/sunset.jpeg");
  remove_top_mask = loadImage("masks/remove_top.png");
}

function setup () {
  createCanvas (1200,627);
  image(sky_img, 0, 0);
  //background(0);

  sea_img.mask(remove_top_mask);
  image(sea_img, 0, 0);
  //image(remove_top_mask);
}
