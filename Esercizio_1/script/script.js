var textElement = document.querySelectorAll('#pageContent p');

textElement.forEach(e => e.addEventListener("mouseenter", function () {
  let textColor = e.style.color;
  e.style.color = "red";

}))

textElement.forEach(e => e.addEventListener("mouseleave", function () {
  let textColor = e.style.color;
  e.style.color = "black";

}))