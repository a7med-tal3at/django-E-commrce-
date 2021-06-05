/***
 * Markting section logic
 */

// Create the objects

let categorys = [
  {
    category: "men",
    img: "img/gallery/f-men.png",
    width: "270px",
    x: "135px",
  },

  {
    category: "women",
    img: "img/gallery/f-women.png",
    width: "425px",
    x: "5px",
  },

  {
    category: "kids",
    img: "img/gallery/f-kids.png",
  },
];

// Create setIntreval with reminder method
function getCurrentObj(curr) {
  return (curr + 1) % 3;
}

function changeAll(n) {
  let hero = document.querySelector(".markting .visual-content img");
  let text = document.querySelector(".markting .text-content .content h2");

  text.innerHTML = categorys[n].category;
  hero.src = categorys[n].img;
  let active = document.querySelectorAll(".categ .overlay h2");
  active.forEach((item) => item.classList.remove("active"));
  active[n].classList.add("active");
}
let v = -1;
setInterval(() => {
  changeAll(getCurrentObj(v));
  v++;
}, 3000);

/***
 * Product widnow logic
 */

let proWindow = document.querySelector(".product .container .window");
// let bigLay = document.querySelector(".product .big-lay");
let input = document.querySelector(".controler input");

// Control On Visablty Of The Screen

function diplayControl(element, dis) {
  element.style.display = dis;
}

function showWindow(ovD = "block") {
  input.value = 1;
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

/**
 * Black friday logic
 */

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element
  document.querySelector(".c-days").innerText = days;
  document.querySelector(".c-hours").innerText = hours;
  document.querySelector(".c-minutes").innerText = minutes;
  document.querySelector(".c-seconds").innerText = seconds;

  // If the count down is over, write some text
  // if (distance < 0) {
  //   clearInterval(x);
  //   document.getElementById("demo").innerHTML = "EXPIRED";
  // }
}, 1000);
