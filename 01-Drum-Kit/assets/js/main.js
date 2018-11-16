let alt = false;
// get all div keys
const keys = document.querySelectorAll('.key');

// add listener for keydown - toggle the audio when the button has been clicked
window.addEventListener('keydown', e => {
  // get the corresponding audio element
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  // get the corresponding key element
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  // only if both exist - play the audio and toggle the animation
  if (audio && key) {
    audio.volume = 0.7;
    audio.currentTime = 0;
    audio.play();
    key.classList.add(alt ? 'playing-alt' : 'playing');
    alt = !alt;
  }
});

// add listeners to all of the keys for ending the animation
for (let key of keys) {
  key.addEventListener('transitionend', e => {
    key.classList.remove(alt ? 'playing-alt' : 'playing');
    alt = !alt;
  });
}
