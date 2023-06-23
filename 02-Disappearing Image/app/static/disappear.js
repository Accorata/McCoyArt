console.log("tada");

// console.log(svg);

function create_grid (x, y, square_number) {
  let x_step = x/square_number;
  let y_step = y/square_number;
  console.log(y_step);
  let grid = [];
  for (let i = 0; i<square_number; i++) {
    for (let j = 0; j<square_number; j++) {
      grid.push([i*x_step, j*y_step]);
    }
  }
  return grid;
}

let svg = document.getElementById("image");

var square_number = 10;
var svg_width = svg.width.baseVal.value;
var svg_height = svg.height.baseVal.value;

let grid = create_grid(svg_width, svg_height, square_number);

function replace_slot (grid) {
  let n = grid.length;
  let choosen_slot_number = Math.floor(Math.random()*n);
  let choosen_slot = grid[choosen_slot_number];
  let new_square = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
  new_square.style.width = svg_width/square_number;
  new_square.style.height = svg_height/square_number;
  new_square.style.x = choosen_slot[0];
  new_square.style.y = choosen_slot[1];
  svg.appendChild(new_square);
  grid.pop(choosen_slot_number)
  return "done";
}

replace_slot(grid);
console.log(grid);
// console.log(grid[3]);
