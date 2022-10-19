let color = ["blue", "red" , "green", "orange"];
let i = 0;
function change() {
  document.body.style.backgroundColor = color[i];
  i++;
  
  if(i > color.length - 1) {
    i = 0;  //ritorna a 0 se i > color.length
  }
}

setInterval(change, 5000);

// Change Bg color randomly
// function changeColor(){
//     let randomColor = Math.floor(Math.random()*16777215).toString(16);
//     document.body.style.backgroundColor = '#'+randomColor;
// }

// setInterval(changeColor, 1000);