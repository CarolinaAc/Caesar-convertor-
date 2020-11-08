//general decoder
const rot = (str, key) => {
  let text = ''
  for (let x = 0; x < str.length; x++) {
    const regEx = /[a-zA-Z]/
    if (regEx.test(str[x])) {
      if (str[x] === str[x].toUpperCase()) {
        text += String.fromCharCode(((str.charCodeAt(x) + key - 65) % 26) + 65)
      } else if (str[x] === str[x].toLowerCase()) {
        text += String.fromCharCode(((str.charCodeAt(x) + key - 97) % 26) + 97)
      }
    } else {
      text += str[x]
    }
  }
  return text
}

// function to get key, normaltext and ciphertext information from html
const getNormal = () => document.getElementById('normaltext').value
const getCipher = () => document.getElementById('ciphertext').value
const getKey = () => document.getElementById('key').value % 26

//function to get last function when key
let lastFun
const anyFunction = () => (lastFun === 'deciph' ? deCiph() : ciph())

//function for ciphering
const ciph = (normaltext, key) => {
  lastFun = 'ciph'
  key = getKey()
  normaltext = getNormal()
  document.getElementById('ciphertext').value = rot(normaltext, key)
}

//function to translate from cipher text to normal text
const deciph = (ciphertext, key) => {
  lastFun = 'deciph'
  key = (26 - getKey()) % 26
  ciphertext = getCipher()
  document.getElementById('normaltext').value = rot(ciphertext, key)
}
