/*

Author: Sheila Alfaro
# 01_06 Ticking Time

## What You'll Do

Given a `<div id="clock"></div>` create a clock which displays the current hour, minutes, and seconds.

## Requirements

[x] - Use setInterval
[x] -  Use Date()

*/

function clock() {
  const clock = document.querySelector("#clock");
  return setInterval(function () {
    const date = new Date();
    clock.textContent = date.toLocaleTimeString();
  }, 1000);
}

clock();
