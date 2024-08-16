/* ---------- POPUP -------------- */

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

/*------------- AUDIO ------------*/

var song = document.getElementById('song');
var iconSong = document.getElementById('icon-song');

iconSong.onclick = function() {
  if (song.paused) {
      song.play();
      iconSong.src = '../img/pause.png';
  } else {
      song.pause();
      iconSong.src = '..img/play.png';
  }
}