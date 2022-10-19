'use strict'

let btnConfirm = document.getElementById("btnConfirm");

btnConfirm.addEventListener("click", () => {
    let list = document.getElementById("listContainer");
    let txtInput = document.getElementById("txtField").value;

    if ( txtInput != "") {
        let listItem = document.createElement("li");
        listItem.innerText = txtInput;
        list.appendChild(listItem)
    }

})