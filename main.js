function addClass() {
  const addplaying = document.getElementsByClassName("key");
  for (let key of addplaying) {
    key.classList.add('playing');
    // audio.play();
  }
}

function removeClass() {
  const removeplaying = document.getElementsByClassName(".key");
  for (let key of addplaying) {
    key.classList.remove('playing');
  }
}

const getKey = document.querySelectorAll('[data-key="${i.keyCode}');
const getAudio = document.querySelectorAll('audio[data-key="${i.keyCode}');


for (let keyCode of getkey) {
  getKey.addEventListener('click', evt => {
    evt.perventDefault();
  //  if (getKey == getAudio)
    addClass();
  });
}


// ↓真似をしようと思ったサイトです。https://carolinegabriel.com/javascript-piano/
// const   keys = document.querySelectorAll('.key'),
//         note = document.querySelector('.nowplaying'),
//     hints = document.querySelectorAll('.hints');

// function playNote(e){
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
//           key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

//     if(!key) return;
   
//     const keyNote = key.getAttribute('data-note');

//     key.classList.add('playing');
//     note.innerHTML = keyNote;
//     audio.currentTime = 0;
//     audio.play();
// }

// function removeTransition(e){
//     if(e.propertyName !== 'transform') return;
//     this.classList.remove('playing');
// }

// function hintsOn(e, index){
//     e.setAttribute('style', 'transition-delay:' + index * 50 + 'ms');
// }

// hints.forEach(hintsOn);

// keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// window.addEventListener('keydown', playNote);
