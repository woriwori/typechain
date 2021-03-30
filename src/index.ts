const name = 'wonhee',
    age = 24,
    gender = 'female';

const sayHi = (name:string, age:number, gender:string): void => {
    console.log(`Hello! ${name}, you ar ${age}, you are a ${gender}`);
}

sayHi(name, age, gender);

export {}
