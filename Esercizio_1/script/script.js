var textElement = document.querySelectorAll('#pageContent p');

textElement.forEach(e => e.addEventListener("mouseenter", function () {
  e.style.color = "red";
}))

textElement.forEach(e => e.addEventListener("mouseleave", function () {
  e.style.color = "black";
}))
