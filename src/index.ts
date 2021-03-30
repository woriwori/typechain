class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const wonhee = new Human('wonhee', 24, 'female')

const sayHiObject = (person: Human) => {
    const {name, age, gender} = person;
    console.log(`(Object) Hello! ${name}, you ar ${age}, you are a ${gender}`);
}

sayHiObject(wonhee);

export {}
