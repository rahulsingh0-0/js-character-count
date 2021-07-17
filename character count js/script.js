"use-strict";

const textArea = document.querySelector(".longInput");
const text = document.querySelector(".text");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
const color4 = document.querySelector(".color4");
const color5 = document.querySelector(".color5");

// theme functionality

const themePicker = function () {
  color1.addEventListener("click", function () {
    document.body.style.background =
      "linear-gradient(to right, #c02425, #f0cb35)";
    color1.style.border = "3px solid white";
    textArea.style.backgroundColor = "#f6e58d";
  });

  color2.addEventListener("click", function () {
    document.body.style.background =
      "linear-gradient(to right, #673ab7, #512da8)";
    color2.style.border = "3px solid white";
    textArea.style.backgroundColor = "#686de0";
  });
  color3.addEventListener("click", function () {
    document.body.style.background =
      "linear-gradient(to right, #e53935, #e35d5b)";
    color3.style.border = "3px solid white";
    textArea.style.backgroundColor = "#ff7979";
  });
  color4.addEventListener("click", function () {
    document.body.style.background =
      "linear-gradient(to right, #fc00ff, #00dbde)";
    this.style.border = "3px solid white";
    textArea.style.backgroundColor = "#7ed6df";
  });
  color5.addEventListener("click", function () {
    document.body.style.background =
      "linear-gradient(to right, #ee9ca7, #ffdde1)";
    this.style.border = "3px solid white";
    textArea.style.backgroundColor = "#ffdde1";
  });
};
themePicker();

// app functionality
textArea.oninput = function () {
  let value = textArea.value.length;
  if (value >= 255) {
    textArea.disabled = true;
  }
  text.textContent = `Total Characters ${value}/255 Allowed`;
};
