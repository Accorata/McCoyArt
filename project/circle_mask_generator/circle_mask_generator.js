function setup () {
	createCanvas (1200, 627);
	let img = createGraphics(width, height);
  let radius = 75;
  let centerX = random(radius, width-radius);
  let centerY = random(radius, height/2-radius);
  img.fill(0);
  img.ellipse(centerX, centerY, radius, radius);
	image(img, 0, 0);
  //save(img, "circle_mask.png");
}
