let user = '{ "user": "logged", "info": { "os": "osx", "ip": "127.0.0.1", "gender": "f"} }';

function fromJsonToObject (jsonObject) {
    let myObj = JSON.parse(jsonObject);
    return myObj;

}

console.log(fromJsonToObject(user));