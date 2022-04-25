/*const targetDiv = document.getElementById("message-form");
const btn = document.getElementById("button");
btn.onclick = function () {
  if (targetDiv.style.opacity !== "0") {
    targetDiv.style.opacity = "0";
  } else {
    targetDiv.style.opacity = "1";
  }
};
*/

const targetDiv = document.getElementById("message-form");
const btn = document.getElementById("button");
btn.onclick = function() {
  if (targetDiv.className === "") {
    targetDiv.className = "akt";
  } else {
    targetDiv.className = "";
  }
};