var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function togglemenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "130px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

function togglemenu2() {
  var popup = document.getElementById('popup');
  popup.classList.toggle('active');
}

function togglemenu3() {
  var popupH = document.getElementById('popupH');
  popupH.classList.toggle('active')
}