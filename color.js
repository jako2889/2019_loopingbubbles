"use strict";
document.addEventListener("DOMContentLoaded", init);

//GLOBAL

let number = 0;
const arr = [];

function init() {
  // create bubbles call - first
  createBubbles();
  // color bubbles call - second
  colorBubbles();
}
function createBubble() {
  // createBubble() - Blackbox
  const clone = document
    .querySelector("#bubbleTemplate")
    .content.cloneNode(true);

  const div = clone.querySelector(".bubble");

  const output = document.querySelector("#bubbles");
  output.appendChild(clone);
  arr.push(div);
}
function createBubbles(number) {
  // createBubbles(number = 256)
  for (number = 0; number < 256; number++) {
    createBubble();
  }

  //call createbubble
}

function colorBubble(bubble, color) {
  // colors of each bubble segment - blackbox
  bubble.style.backgroundColor = color;

  return { bubble, color };
}

function colorBubbles() {
  //color the selected bubbles loop
  for (number = 0; number < 16; number++) {
    const bubble = arr[number];
    colorBubble(bubble, "green");
  }
  for (number = 16; number < 32; number++) {
    const bubble = arr[number];
    colorBubble(bubble, "red");
  }
  for (number = 32; number < 40; number++) {
    const bubble = arr[number];
    colorBubble(bubble, "lightgreen");
  }
  for (number = 46; number < 50; number++) {
    const bubble = arr[number];
    colorBubble(bubble, "lightblue");
  }
  for (number = 56; number < 128; number += 3) {
    const bubble = arr[number];
    colorBubble(bubble, "pink");
  }
  for (number = 56; number < 128; number += 5) {
    const bubble = arr[number];
    colorBubble(bubble, "orange");
  }
  for (number = 56; number < 128; number += 7) {
    const bubble = arr[number];
    colorBubble(bubble, "black");
  }
  for (number = 1; number < 256; number *= 2) {
    const bubble = arr[number];
    colorBubble(bubble, "yellow");
  }
  for (number = 64; number < 256; number += 16) {
    const bubble = arr[number];
    colorBubble(bubble, "purple");
  }
  for (number = 8; number < 256; number += 16) {
    const bubble = arr[number];
    colorBubble(bubble, "hotpink");
  }
  for (number = 0; number < 256; number += 17) {
    const bubble = arr[number];
    colorBubble(bubble, "cyan");
  }
}

//colorBubbles()
//colorBubble(bubble, color)
