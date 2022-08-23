function setup () {
	createCanvas(1200, 627);
  for (let i = 0; i<20; i++) {
  	img = createGraphics(1200, 627);
  	for (let x = 0; x<width; x++) {
    	img.line(x, height, x, height - noise(x*0.003) * height);
  	}
		image(img, 0, 0);
  	save(img, "random_mask_"+i+".png");
	}
}
