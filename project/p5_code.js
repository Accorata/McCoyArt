let sky_img, sea_img, land_img, sun_img;
let remove_top_mask, land_mask;

function preload() {
  sky_img = loadImage("images/sky.jpeg");
  sea_img = loadImage("images/sea.jpeg");
  land_img = loadImage("images/landscape.jpeg");
  sun_img = loadImage("images/sunset.jpeg");
  remove_top_mask = loadImage("masks/remove_top.png");
  let mask_number = int(random() * 10);
  land_mask = loadImage("masks/generated/random_mask_" + mask_number + ".png");
}

function setup() {
  createCanvas(1200, 627);

  let circle_mask = createGraphics(width, height);
  let radius = 75;
  let centerX = random(radius, width - radius);
  let centerY = random(radius, height / 2 - radius);

  fill(0);
  circle_mask.ellipse(centerX, centerY, radius, radius);

  image(sky_img, 0, 0);

  sea_img.mask(remove_top_mask);
  image(sea_img, 0, 0);

  land_img.mask(land_mask);
  image(land_img, 0, 0);

  let masked;
  (masked = sun_img.get()).mask(circle_mask);
  //sun_img.mask(circle_mask);
  image(sun_image, 0, 0);
}
