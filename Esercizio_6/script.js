let car = {
    nome: ' Classe A 2021 A180', marca: 'Mercedes-Benz', caratteristiche: {
    trazione: 'posteriore',
    cilindrata: 1950 },
    accessori: ["displayLCD", "sedile_riscaldato"],
    venduta: true };

function fromObjectToJson () {
    let myJson = JSON.stringify(car);
    return myJson;

}

console.log(fromObjectToJson());