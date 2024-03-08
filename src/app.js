/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  window.onload = () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
    console.log("Hello Rigo from the console!");
  };

  let generateExcuse = () => {
    let pronoun = ["mi", "el"];
    let subject = [
      "tio",
      "amigo",
      "hermana",
      "abuelita",
      "Policia",
      "profesor"
    ];
    let action = [
      "se enfermo",
      "agarro mi",
      "rompio mi",
      "me regaño",
      "me castigo"
    ];
    let possetion = ["celular", "computadora", "tarea", "car", "cabeza"];
    let where = ["en la casa", "en la escuela", "en la calle", "en el parque"];

    let proIndex = Math.floor(Math.random() * pronoun.length);
    let subjIndex = Math.floor(Math.random() * pronoun.length);
    let actionIndex = Math.floor(Math.random() * pronoun.length);
    let possetionnIndex = Math.floor(Math.random() * pronoun.length);
    let whereIndex = Math.floor(Math.random() * pronoun.length);

    return (
      pronoun[proIndex] +
      "" +
      subject[subjIndex] +
      "" +
      action[actionIndex] +
      "" +
      possetion[possetionnIndex] +
      "" +
      where[whereIndex]
    );
  };
};
