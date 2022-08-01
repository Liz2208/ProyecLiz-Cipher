import cipher from './cipher.js'

let userKey = document.getElementById('userOffset');
let text = document.getElementById('textArea');
let btn = document.getElementById('submitButton');
let btn2 = document.getElementById('decipherButton');
let printResult = document.getElementById('resultado');
let resultEncrypt = [];
let resultDecrypt = [];


btn.addEventListener('click', () => {
  let textValue = text.value;
  let userKeyValue = (parseInt(userKey.value));
  resultEncrypt.toString;
  cipher.encode(textValue, userKeyValue);
  printResult.innerHTML = cipher.encode(textValue, userKeyValue);
  //printResult.innerHTML = resultEncrypt.join('');
  console.log("Este es el texto a cifrar", text.value)
  console.log("Estos son los espacios a mover", userKey.value)
  });

btn2.addEventListener('click', () => {
  let userKeyValue = parseInt(userKey.value);
  resultEncrypt.toString;
  cipher.decode(resultEncrypt, userKeyValue);
  printResult.innerHTML = resultDecrypt.join('');
  console.log("Este es el texto a cifrar", text.value)
  console.log("Estos son los espacios a mover", userKey.value)
});
