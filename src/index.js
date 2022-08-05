import cipher from "./cipher.js";

let userKey = document.getElementById('userOffset');
let text = document.getElementById('textArea');
let buttonEncode = document.getElementById('submitButton');
let buttonDecode = document.getElementById('decipherButton');
let printResult = document.getElementById('resultado');

buttonEncode.addEventListener('click', () => {
  let userKeyValue = (parseInt(userKey.value));
  printResult.innerHTML = cipher.encode( text.value, userKeyValue);
  });

buttonDecode.addEventListener('click', () => {
  let userKeyValue = (parseInt(userKey.value));
  printResult.innerHTML = cipher.decode( text.value, userKeyValue);
});
