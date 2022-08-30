function setup () {
	createCanvas(1200, 627);
  //background(50);
	let img = createGraphics(width, height);
  let center = new PVector(random(100,1100), random(100, 327));
  for (let x = 0; x<width; x++) {
    for (let y = 0; y<height; y++) {
      if (dist(x, y, center.x, center.y) > 100) {
        img.point(x, y);
      }
      //println("y");
    }
  }
	image(img, 0, 0);
  save(img, "circle_mask.png");
}
