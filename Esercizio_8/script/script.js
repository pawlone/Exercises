function randomBgColor(items) {
  let randomColor =  items[Math.floor(Math.random() * items.length)];
  document.body.style.backgroundColor = randomColor;
}

let color = ["blue", "red", "green", "orange"];
setInterval(randomBgColor, 3000, color);

// Change Bg color randomly
// function changeColor(){
//     let randomColor = Math.floor(Math.random()*16777215).toString(16);
//     document.body.style.backgroundColor = '#'+randomColor;
// }

// setInterval(changeColor, 1000);