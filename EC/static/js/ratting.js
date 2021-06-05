// Number of  Star via product rate form DB

let stars = document.querySelectorAll(".production .cart .ratting .stars");

// Creating Star

function createStar() {
  let i = document.createElement("i");
  i.setAttribute("class", "ti-star");
  return i;
}

stars.forEach((item) => {
  // Get The item Sapn

  let spans = item.childNodes;

  // get Number of Stars via span

  let stNum = parseInt(spans[1].getAttribute("data-set"));

  // Set n Stars into the div.stars

  for (let i = 0; i < stNum; i++) {
    item.appendChild(createStar());
  }

  // Create The Span that have the rate value

  let rateVale = document.createElement("span");
  rateVale.innerText = spans[1].getAttribute("data-set");
  rateVale.style.color = "#37833b";

  // Append the span to the current div.star

  item.appendChild(document.createTextNode("  "));
  item.appendChild(rateVale);
});
