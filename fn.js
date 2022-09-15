function add(a, b) {
    return a + b
}

function makeUser(name, age) {
    return { name: name, age: age, gender: undefined }
}



const fn = {
    add,
    makeUser
}

module.exports = fn