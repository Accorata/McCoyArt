function setup () {
	createCanvas (1200, 627);
	let img = createGraphics(width, height);
  let radius = 75;
  let centerX = random(radius, width-radius);
  let centerY = random(radius, height/2-radius);
  for (let x = 0; x<width; x++) {
    for (let y = 0; y<height; y++) {
      if (dist(x, y, centerX, centerY) > radius) {
        img.point(x, y);
      }
    }
  }
	image(img, 0, 0);
  //save(img, "circle_mask.png");
}
