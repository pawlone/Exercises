let car = {
    nome: ' Classe A 2021 A180', marca: 'Mercedes-Benz', caratteristiche: {
    trazione: 'posteriore',
    cilindrata: 1950 },
    accessori: ["displayLCD", "sedile_riscaldato"],
    venduta: true };

function fromObjectToJson (obj) {
    let myJson = JSON.stringify(obj);
    return myJson;

}

console.log(fromObjectToJson(car));