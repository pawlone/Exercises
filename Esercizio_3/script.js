function reverseArray(array) {
    let newArray = [];
    for (let i = (array.length - 1); i >= 0; i--){
        newArray.push(array[i]);

    }
    return newArray;
}

let array=["pippo", true, 1, 2, 3, false, "mario"]

console.log(array);
console.log(reverseArray(array));