import cipher from "./cipher.js";

console.log('cipher', cipher);
const botonCifrar = document.getElementById("botonCifrar");
const botonDescifrar = document.getElementById("botonDescifrar");

botonCifrar.addEventListener("click", function () {
  const message = document.getElementById("mensaje").value;
  const offsetString = document.getElementById("numero").value;
  const offsetInt = parseInt(offsetString)
  console.log('offsetString', offsetString)
  console.log('typeof offsetString', typeof offsetString)
  console.log('offsetInt', offsetInt)
  console.log('typeof offsetInt', typeof offsetInt)
  const palabra = cipher.encode(offsetInt, message);
  document.getElementById("pCifrada").value = palabra;
  console.log(palabra);
});

// "3" !== 3

botonDescifrar.addEventListener("click", function () {
  const message = document.getElementById("mensaje").value;
  const offsetString = document.getElementById("numero").value;
  const offsetInt = parseInt(offsetString)
  console.log('offsetString', offsetString)
  console.log('typeof offsetString', typeof offsetInt)
  console.log('offsetInt', offsetInt)
  console.log('typeof offsetInt', typeof offsetInt)
  const palabra = cipher.decode(offsetInt, message);
  document.getElementById("pCifrada").value = palabra;

  //const message = document.getElementById("mensaje").value;
  //const offset = document.getElementById("numero").value;
  //const palabra = cipher.decode(offset, message);
  //document.getElementById("pCifrada").value = palabra;
});