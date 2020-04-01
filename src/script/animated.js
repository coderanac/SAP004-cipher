import { broom, clear, encrypt, decrypt, logo, title } from './selectors.js';

function eventEncrypt() {
  logo.classList.add('move-left');
  logo.classList.remove('move-right');
  title.innerHTML = 'Jlzhy Jpwoly';
}

function eventDecrypt() {
  logo.classList.add('move-right');
  logo.classList.remove('move-left');
  title.innerHTML = 'César Cipher';
}

encrypt.addEventListener('click', () => {
  eventEncrypt();
})
encrypt.addEventListener('focus', () => {
  eventEncrypt();
})


decrypt.addEventListener('click', () => {
  eventDecrypt();
})
decrypt.addEventListener('focus', () => {
  eventDecrypt();
})

clear.addEventListener('click', () => {
  logo.classList.remove('move-left', 'move-right');
  title.innerHTML = 'César Cipher';

  broom.classList.add('broom');
  broom.addEventListener('animationend', () => {
    broom.classList.remove('broom');
  });
})
