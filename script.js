const container = document.getElementById("container");
const gridDiv = container.getElementsByTagName("div");
const clearGridBtn = document.getElementById("clearGridBtn");
const eraserBtn = document.getElementById("eraserBtn");
const buttons = document.getElementsByTagName("button");
// Create initial 16x16 Grid
makeGrid(16);

// Update New Grid When Clear Grid Button is Clicked
clearGridBtn.addEventListener("click", function () {
  removeAllChildNodes(container);
  let gridNum = prompt(
    "Select Your Grid Size (Less Than Or Equal To 64 Only): ",
    "16"
  );
  if (gridNum === null || gridNum === 0) {
    makeGrid(16);
  } else if (gridNum <= 64) {
    makeGrid(gridNum);
  } else {
    makeGrid(16);
  }
});

eraserBtn.addEventListener("click", function () {
  // Set Current Button
  eraserBtn.style.backgroundColor = "#eee";
  eraserBtn.style.color = "#111";

  // Reset "Black Mode" Button To Original State
  blackBtn.style.backgroundColor = "#111";
  blackBtn.style.color = "#ccc";
  Array.from(gridDiv, (div) => {
    div.addEventListener("mouseover", function () {
      if (div.classList.contains("hovered-black")) {
        div.classList.remove("hovered-black");
      }
    });
  });
});

blackBtn.addEventListener("click", function () {
  // Set Current Button
  blackBtn.style.backgroundColor = "#eee";
  blackBtn.style.color = "#111";

  // Reset "Black Mode" Button To Original State
  eraserBtn.style.backgroundColor = "#111";
  eraserBtn.style.color = "#ccc";
  Array.from(gridDiv, (div) => {
    div.addEventListener("mouseover", function () {
      div.className = "hovered-black";
    });
  });
});

function makeGrid(gridNum) {
  let gridBox = gridNum * gridNum;
  for (let i = 0; i < gridBox; i++) {
    const div = document.createElement("div");
    container.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;
    container.appendChild(div);
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function removeHovered() {
  gridDiv.classList.remove("hovered-black");
}
