'use strict'

let counter = 0;
let btnConfirm = document.getElementById("btnConfirm");

btnConfirm.addEventListener("click", () => {
  let txtNumber = document.getElementById("txtNumber")
  let num = Number(txtNumber.value);

  let counterContainer = document.getElementById("counterContainer");
  if (num <= 0) {
    counterContainer.innerText = "Numbero inserito non valido";
  }
  counter = num;
  setInterval(() => {
    if(counter > 0) {
      counterContainer.innerText = counter;
      counter--;
    }
    else {
      counterContainer.innerText = "Conto alla rovescia terminato";
      return;
    }
    
  }, 1000);
})

