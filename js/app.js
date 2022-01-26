const menuStyle = document.querySelector("#mobile-nav-items").style;
function handleMenu() {
  let clicked = true;
  if (clicked) {
    menuStyle.display = "none";
    clicked = true;
  } else {
    menuStyle.display = "block";
    // clicked = true;
  }
}
