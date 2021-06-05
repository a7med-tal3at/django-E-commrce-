/**
 * Check all
 */

let boxes = document.querySelectorAll("input[type=checkbox]");

boxes[0].onclick = function () {
  boxes.forEach((item) => (item.checked = boxes[0].checked));
};

let btnDel = document.querySelector(".del");

btnDel.onclick = function () {
  for (let i = 1; i < boxes.length; i++) {
    if (boxes[i].checked) {
      document
        .querySelector("tbody")
        .removeChild(boxes[i].parentNode.parentNode);
    }
  }
};
