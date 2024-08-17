    
/*------------- ABOUT AUDIO ------------*/

var song = document.getElementById('song');
var iconSong = document.getElementById('icon-song');
    
iconSong.onclick = function() {
    if (song.paused) {
      song.play();
      iconSong.src = '../img/pause.png';
    } else {
      song.pause();
      iconSong.src = '../img/play.png';
    }
}