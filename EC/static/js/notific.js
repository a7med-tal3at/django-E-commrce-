// Notifcations logic
function notifec(theme, msg) {
  window.createNotification({
    closeOnClick: true,
    displayCloseButton: true,
    positionClass: "nfc-top-right",
    showDuration: 3000,
    theme: theme,
  })({
    title: "order status",
    message: msg,
  });
}

function ifAllNotChecked(element) {
  let ans = false;
  element.forEach((item) => {
    if (item.checked) {
      ans = true;
    }
  });
  return ans;
}
window.addEventListener("DOMContentLoaded", function () {
  var chk = document.querySelector(".chk");
  chk.addEventListener("click", function (e) {
    // e.preventDefault();

    let bx = document.querySelectorAll("input[type=checkbox]");
    if (bx.length == 1) {
      notifec("error", "You has no products");
    } else if (ifAllNotChecked(bx)) {
      notifec("success", "Done");
    } else {
      notifec("error", "You haven't chosen anything yet");
    }
  });
});
