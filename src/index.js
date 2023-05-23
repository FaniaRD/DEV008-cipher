import cipher from "./cipher.js";

console.log('cipher', cipher);
const botonCifrar = document.getElementById("botonCifrar");
const botonDescifrar = document.getElementById("botonDescifrar");
const textBox = document.getElementById("mensaje");

textBox.addEventListener("keyup", function(){
  const text = document.getElementById("mensaje").value;
  text.toUpperCase();
  document.getElementById("mensaje").value = text.toUpperCase();
});

botonCifrar.addEventListener("click", function () {
  const message = document.getElementById("mensaje").value;
  const offsetString = document.getElementById("numero").value;
  const offsetInt = parseInt(offsetString)
  //console.log('offsetString', offsetString)
  //console.log('typeof offsetString', typeof offsetString)
  //console.log('offsetInt', offsetInt)
  //console.log('typeof offsetInt', typeof offsetInt)
  const finalMessage = cipher.encode(offsetInt, message);
  document.getElementById("pCifrada").value = finalMessage;
  console.log('finalMessage',finalMessage);
  const finalMessageElement = document.getElementById("mCifrado")
  finalMessageElement.innerText = "El mensaje encriptado es:"
});


botonDescifrar.addEventListener("click", function () {
  const message = document.getElementById("mensaje").value;
  const offsetString = document.getElementById("numero").value;
  const offsetInt = parseInt(offsetString)
  console.log('offsetString', offsetString)
  console.log('typeof offsetString', typeof offsetInt)
  console.log('offsetInt', offsetInt)
  console.log('typeof offsetInt', typeof offsetInt)
  const finalMessage = cipher.decode(offsetInt, message);
  document.getElementById("pCifrada").value = finalMessage;
  const finalMessageElement = document.getElementById("mCifrado")
  finalMessageElement.innerText = "El mensaje desencriptado es:"

});