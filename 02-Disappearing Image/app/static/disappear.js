console.log("tada");

// console.log(svg);

function create_grid (x, y, square_number) {
  let x_step = x/square_number;
  let y_step = y/square_number;
  let grid = [];
  for (let i = 0; i<square_number; i++) {
    for (let j = 0; j<square_number; j++) {
      grid.push([i*x_step, j*y_step]);
    }
  }
  return grid;
}

let svg = document.getElementById("image");
let grid = create_grid(svg.width, svg.height, 10);
// console.log(grid);
// console.log(grid[3]);
