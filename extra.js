document.getElementById("title").addEventListener("click", message);

let show = false;
function message() {
  if (show) {
    document.getElementById("main").classList.add("hide");
    document.getElementById("main").classList.remove("show");
    show = false;
    console.log("show is true");
  } else if (!show) {
    document.getElementById("main").classList.add("show");
    document.getElementById("main").classList.remove("hide");
    show = true;
  }
  console.log(show);
}

document.getElementById("in").addEventListener("click", zoomIn);
document.getElementById("out").addEventListener("click", zoomOut);
document.getElementById("reset").addEventListener("click", zoomReset);

function zoomIn() {
  xFactor /= 2;
  yFactor /= 2;
  if (xFactor != 1) {
    document.getElementById("reset").classList.add("show");
    document.getElementById("reset").classList.remove("hide");
  }
  restart();
}
function zoomOut() {
  xFactor *= 2;
  yFactor *= 2;
  if (xFactor != 1) {
    document.getElementById("reset").classList.add("show");
    document.getElementById("reset").classList.remove("hide");
  }
  restart();
}

function zoomReset() {
  document.getElementById("reset").classList.add("hide");
  document.getElementById("reset").classList.remove("show");
  xFactor = 1;
  yFactor = 1;
  translateX = 0;
  translateY = 0;
  restart();
}
