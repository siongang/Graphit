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
