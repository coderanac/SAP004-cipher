import cipher from './cipher.js';
import { clear, decrypt, encrypt, offset } from './selectors.js';

encrypt.addEventListener('keyup', () => {
  let script = encrypt.value;
  let shift = parseInt(offset.value);
  decrypt.value = cipher.encode(shift, script);
});

decrypt.addEventListener('keyup', () => {
  let script = decrypt.value;
  let shift = offset.value;
  encrypt.value = cipher.decode(shift, script);

});

clear.addEventListener('click', () => {
  encrypt.value = '';
  decrypt.value = '';
  offset.value = '';
});
