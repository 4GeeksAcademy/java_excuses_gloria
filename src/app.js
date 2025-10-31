import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const who = ["the dog", "my Grandma", "The mailman", "My son"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ['my homework', 'my phone', 'the car'];
const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

window.onload = function() {
  //write your code here
  const whoElement = who[Math.floor(Math.random() * who.length)];
  const actionElement = action[Math.floor(Math.random() * action.length)];
  const whatElement = what[Math.floor(Math.random() * what.length)];
  const whenElement = when[Math.floor(Math.random() * when.length)];
  const excuse = whoElement + " " + actionElement + " " + whatElement + " " + whenElement + "."
  document.getElementById("excuse").innerHTML = excuse
};

