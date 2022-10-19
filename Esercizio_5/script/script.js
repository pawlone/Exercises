'use strict'
let btnConfirm = document.getElementById("btnConfirm");

btnConfirm.addEventListener("click", () => {
    let txtContainer = document.getElementById("txtContainer");
    let txtInput = document.getElementById("txtField").value;
    let pageLoader = document.getElementById("pageLoader");

    pageLoader.style.display = "";

    txtContainer.innerText = txtInput;
    txtContainer.style.display = "none";

    setTimeout(function() {
        pageLoader.style.display = "none";
        txtContainer.style.display = "";
    }, 5000);





})