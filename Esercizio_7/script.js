
function fromJsonToObject () {
    let myObj = JSON.parse('{ "user": "logged", "info": { "os": "osx", "ip": "127.0.0.1", "gender": "f"} }');
    return myObj;

}

console.log(fromJsonToObject());