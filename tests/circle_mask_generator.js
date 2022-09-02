function setup () {
	let img = createCanvas(1200, 627);
  let center = new PVector(random(100,1100), random(100, 527));
  	for (let x = 0; x<width; x++) {
      for (let y = 0; y<height; y++) {
        if (dist(x, y, center.x, center.y) > 100) {
          img.point(x, y);
        }
      }
  	}
		image(img, 0, 0);
  	save(img, "circle_mask.png");
	}
}
