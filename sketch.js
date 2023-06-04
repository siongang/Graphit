// import { create, all } from "mathjs";

// const math = create(all, {});

let arr = new Array(400);
let temp = "";
let equation = "";
let size = window.innerHeight;
let translateX = 0;
let translateY = 0;
let eq = ""; // equation

function setup() {
  clear();
  var canvas = createCanvas(size, size);
  canvas.parent("canvas"); // moves canvas to html div "canvas"

  // zIn = createButton("+");
  // zIn.position(1005, 10);
  // zIn.mousePressed(zoomIn);

  // zOut = createButton("-");
  // zOut.position(1005, 40);
  // zOut.mousePressed(zoomOut);

  // zIn.parent("button");
  // zOut.parent("button");
  restart();
}

function restart() {
  clear();
  console.log(translateX);
  background(250);
  //x-axis
  line(0, size / 2 + translateY, size, size / 2 + translateY); // (0,250) - (500, 250)
  //y-axis
  line(size / 2 + translateX, 0, size / 2 + translateX, size);
  graph();
}

// input a new equation
function generate() {
  temp = document.getElementById("input").value;
}

function keyPressed() {
  // if (keyCode === 83) translateY += 5;
  // if (keyCode === 87) translateY -= 5;
  // if (keyCode === 68) translateX += 5;
  // if (keyCode === 65) translateX -= 5;

  generate();
  // restart();
  // sets equation to the input
  if (keyCode === ENTER) {
    equation = temp;
    console.log(temp);
    restart();
  }
}

let xFactor = 1;
let yFactor = 1;

function graph() {
  let y;
  let tX;
  let tY;
  let tempX;
  strokeWeight(1.5);

  // x is init at -size/2 as the graph is shifted where x = 0 is not the center but the most leftside x val.
  // y vals are reflected over x axis and then shifted
  // example case
  // y = x
  // x = -500
  // y = -500 -> y = 500 -> y = 1000

  for (x = (-size / 2) * 20; x <= (size / 2) * 20; x = x + 1) {
    eq = equation;
    eq = eq.replace("x", x * xFactor);

    y = -eval(eq);
    y = y * yFactor;
    y = y + size / 2 + translateY;

    tempX = x + size / 2;

    // draw graph
    if (x == -size / 2) {
      tX = tempX;
      tY = y;
    } else {
      line(tX + translateX, tY, tempX + translateX, y);
      tX = tempX;
      tY = y;
    }
  }
}

// the coords of the initial mouse click
let clickX = 0;
let clickY = 0;

// the coords of the dragging mouse
let tempX;
let tempY;

function mousePressed() {
  clickX = mouseX;
  clickY = mouseY;
}

function mouseDragged() {
  tempX = mouseX;
  tempY = mouseY;

  translateX += tempX - clickX;
  translateY += tempY - clickY;
  clickX = tempX;
  clickY = tempY;
  console.log("dragging" + " " + translateX);

  document.getElementById("reset").classList.add("show");
  document.getElementById("reset").classList.remove("hide");

  generate();
  restart();
}
