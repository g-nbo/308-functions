
let obj1 = {
    name: "peter",
    age: 42,
    updated_at: Date(Date.now()),
}

function incrementAge(obj) {
    return obj.age += + 1;
}

export { obj1, incrementAge }