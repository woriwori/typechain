interface Human {
    name: string,
    age: number,
    gender: string
}

const person = {
    name: 'wonhee',
    age: 24,
    gender: 'female'
}

const sayHiObject = (person: Human) => {
    const {name, age, gender} = person;
    console.log(`(Object) Hello! ${name}, you ar ${age}, you are a ${gender}`);
}

sayHi(name, age, gender);
sayHiObject(person);

export {}
