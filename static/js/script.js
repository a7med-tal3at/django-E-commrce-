/**
 * Javascript File
 *       script.js
 *
 *  Coded by: a7med
 * injoy ^-^
 */

// animation of search logic
let ser = document.querySelector("header .container .icons .ser.active");
let serSubmit = document.querySelector("header .container .icons form .ser");
let inpSer = document.querySelector(".container .icons .ser-input");
let form = document.querySelector("header .container .icons form");
form.style.display = "none";

function handelAnimate(target) {
  if (!(target.getAttribute("animated") == "true")) {
    // Condethion with rules of boolean algebra

    target.style.animation = "circle ease-in-out .5s forwards";
    inpSer.style.animation = "g-of-input .5s ease-in-out .5s forwards";
    target.setAttribute("animated", true);
  } else {
    target.style.animation = "not-circle .5s ease-in-out forwards";
    inpSer.style.animation = "not-g-of-input .5s ease-in-out forwards";
    target.setAttribute("animated", false);
  }
}

ser.onclick = function () {
  this.style.display = "none";
  form.style.display = "flex";
  handelAnimate(serSubmit);
};

// Make a Navbar Sticky

window.addEventListener("scroll", function () {
  let headerV = document.querySelector("header");
  headerV.classList.toggle("sticky", window.scrollY > 0);
  // document.querySelector("header .links").style.display = "none";
});

/***
 * Cart hide and show logic
 */

let cart = document.querySelector("header .container .icons .cart");
let close = document.querySelector(".side-bar .center-i .ti-close");
let target = document.querySelector(".side-bar");
let bigLay = document.querySelector(".big-lay ");
// Hide
function hideMe(bl = "none") {
  target.style.right = "-500px";
  setTimeout(() => {
    bigLay.style.display = bl;
    target.style.display = "none";
  }, 800);
  document.body.style.overflowY = "scroll";
}

close.onclick = function () {
  hideMe();
};

// show
cart.onclick = function () {
  target.style.display = "block";
  setTimeout(() => {
    bigLay.style.display = "block";
    target.style.right = 0;
  }, 100);
  document.body.style.overflow = "hidden";
  document.querySelectorAll(".rem").forEach((item) => {
    item.onclick = function () {
      document
        .querySelector(".products")
        .removeChild(this.parentNode.parentNode);
      --cartCount.innerHTML;
      hideShowEmpty();
    };
  });
};

// Check If The Cart Empty
let cartCount = document.querySelector("header .container .icons .prod-conter");
let empty = document.querySelector(".side-bar .empty");
function hideShowEmpty() {
  if (cartCount.innerHTML == 0) {
    empty.style.display = "flex";
  } else {
    empty.style.display = "none";
  }
}

/***
 * View Content Logic
 */

// Set Data

let topSec = [
  {
    categorys: "sports",
    secImg: "../../static/img/gallery/sports.jpeg",
    label: "sports wear",
  },

  {
    categorys: "men",
    secImg: "../../static/img/gallery/team-1.jpeg",
    label: "parnds",
  },

  {
    categorys: "women",
    secImg: "../../static/img/gallery/cat-2.jpg",
    label: "fashons",
  },

  {
    categorys: "kids",
    secImg: "../../static/img/gallery/cat-3.jpg",
    label: "cutenes",
  },
];

// Get All Categorys
let items = document.querySelectorAll("header .container .links ul li a");
let desTite = document.querySelector(
  "header .container .view-content .content-img h2"
);
let bgImg = document.querySelector(
  "header .container .view-content .content-img"
);

let _name = document.querySelector(
  "header .container .view-content .description .name"
);

let vContent = document.querySelector("header .container .view-content");

document.body.onclick = function () {
  vContent.style.display = "none";
};

// Set ( data-index ) attribute on items
for (var i = 0; i < items.length; i++) {
  items[i].setAttribute("data-index", i);
}

// Set the Events
items.forEach((item) => {
  item.addEventListener("mouseover", function () {
    if (item.getAttribute("data-index") != items.length - 1) {
      vContent.style.display = "flex";
      let i = item.getAttribute("data-index");
      let objItem = topSec[i];
      bgImg.style.backgroundImage = "url(" + objItem.secImg + ")";
      _name.innerHTML = objItem.categorys;
      desTite.innerHTML = objItem.label;
    } else {
      vContent.style.display = "none";
    }
  });
});
