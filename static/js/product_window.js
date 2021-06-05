/***
 * Product widnow logic
 */

let proWindow = document.querySelector(".container .window");
let input = document.querySelector(".controler input");

// Control On Visablty Of The Screen

function diplayControl(element, dis) {
  element.style.display = dis;
}

function showWindow(ovD = "block") {
  input.value = 1;
  console.log(proWindow);
  diplayControl(proWindow, "flex");
  diplayControl(bigLay, ovD);
}

// Set Event Listener On Every ( view ) Button

let viewBtns = document.querySelectorAll(".production .ratting .view ");
viewBtns.forEach((btn) => {
  btn.onclick = function () {
    showWindow();
  };
});

// Close the Window Button

let closeBtn = document.querySelector(".window .close");
closeBtn.onclick = () => {
  diplayControl(bigLay, "none");
  diplayControl(proWindow, "none");
};

// Qty Counter

let plus = document.querySelector(".controler #plus");
let minuse = document.querySelector(".controler #minuse");

let currVal = input.value;

plus.onclick = () => {
  input.value = ++currVal;
};

minuse.onclick = () => {
  input.value = --currVal;
};

// Add Prduct To The User Cart

let addBtn = document.querySelector(".content .add-to-cart");

function createNewRow() {
  // Creating Elements

  let pordContainer = document.createElement("div"),
    conts = document.createElement("div"),
    trashIcon = document.createElement("i"),
    settingsIcon = document.createElement("i"),
    p = document.createElement("p"),
    img = document.createElement("img");

  // Set Probertys

  pordContainer.classList.add("one-prod");
  trashIcon.classList += "ti-trash rem";
  settingsIcon.classList.add("ti-settings");
  settingsIcon.addEventListener("click", function () {
    hideMe("block");
    aTC = document.querySelector(".window .add-to-cart");
    aTC.innerText = "save";
    aTC.style.width = "80%";
    aTC.onclick = () => {
      hideMe();
      diplayControl(proWindow, "none");
    };
    showWindow();
  });
  p.classList.add("name");
  p.innerText = "dummy text";
  img.src = "img/product/images.jpeg";

  // Appending All

  conts.appendChild(trashIcon);
  conts.appendChild(settingsIcon);
  pordContainer.appendChild(conts);
  pordContainer.appendChild(p);
  pordContainer.appendChild(img);

  return pordContainer;
}

let sideBar = document.querySelector(".side-bar .products");

addBtn.onclick = () => {
  let c = ++cartCount.innerHTML;
  if (c > 0) {
    empty.style.display = "none";
  }
  diplayControl(bigLay, "none");
  diplayControl(proWindow, "none");
  sideBar.appendChild(createNewRow());
};
