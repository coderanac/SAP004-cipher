function cipherCesar(shift, script) {
  let message = '';
  if(typeof script !== "string") {
    throw new TypeError();
  }

  for (let i = 0; i < script.length; i++) {
    let letter = script[i].charCodeAt(0);
    let x;
    if (letter > 64 && letter < 91) {
      x = 65;
    } else if (letter > 96 && letter < 123) {
      x = 97;
    }
    else {
      x = letter - shift;
      letter -= shift;
    }
    const count = ((letter + shift) - x) % 26 + x;
    message += String.fromCharCode(count);
  }

  return message;
}

const cipher = {
  encode(shift, script) {
    let x = Math.floor(shift / 26) * 26;
    shift = shift - x;
    return cipherCesar(shift, script);
  },

  decode(shift, script) {
    shift = -shift;
    let x = Math.floor(shift / 26) * 26;
    shift = shift - x;
    return cipherCesar(shift, script)
  }
}

export default cipher;
