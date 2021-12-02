function saveUser(user) {
    //load the old data
    let data = readUsers();
    //merge the data
    data.push(user);
    let val = JSON.stringify(data);
    localStorage.setItem("users", val);
    //val is the string
    // user is the object
}

function readUsers() {
    let data = localStorage.getItem("users");
    if(!data){ //Not data?
        return []; // create an array the first registration
    }else{
        let list = JSON.parse(data);//parse string back into object
        return list;//return array of objects
    }
}