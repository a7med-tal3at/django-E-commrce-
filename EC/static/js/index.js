/***
 * Markting section logic
 */

// Create the objects

let categorys = [
  {
    category: "men",
    img: "../static/img/gallery/f-men.png",
    width: "270px",
    x: "135px",
  },

  {
    category: "women",
    img: "../static/img/gallery/f-women.png",
    width: "425px",
    x: "5px",
  },

  {
    category: "kids",
    img: "../static/img/gallery/f-kids.png",
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
