// interface Human {
//     name: string;
//     age: number;
//     gender:string;
// }
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

const leehyerim = new Human("hyerim", 32, "female");
// const person = {
//     name: "leehyerim",
//     age: 32,
//     gender: "female",

// }
const sayHi = (person): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(leehyerim));

export {};