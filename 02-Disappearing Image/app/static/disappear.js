var svg = document.getElementById("image");
var svg_width = svg.width.baseVal.value;
var svg_height = svg.height.baseVal.value;

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

function replace_slot (grid, square_number) {
  let n = grid.length;
  let choosen_slot_number = Math.floor(Math.random()*n);
  console.log(choosen_slot_number);
  let choosen_slot = grid[choosen_slot_number];
  let new_square = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
  new_square.style.width = svg_width/square_number;
  new_square.style.height = svg_height/square_number;
  new_square.style.x = choosen_slot[0];
  new_square.style.y = choosen_slot[1];
  new_square.style.fill="white";
  svg.appendChild(new_square);
  grid.pop(choosen_slot_number);
}

function run (square_number) {
  let grid = create_grid(svg_width, svg_height, square_number);
  let square_amount = square_number ** 2;
  for (let i = 0; i<20; i++) {
    replace_slot(grid, square_number);
    console.log(i);
    console.log(grid);
    // setTimeout(replace_slot(grid, square_number), 1000);
  }
  console.log(grid);
}

run(10);
