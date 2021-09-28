const targetDiv = document.getElementById("message-form");
const btn = document.getElementById("button");
btn.onclick = function () {
  if (targetDiv.style.visibility !== "hidden") {
    targetDiv.style.visibility = "hidden";
  } else {
    targetDiv.style.visibility = "visible";
  }
};