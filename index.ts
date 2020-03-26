// interface Human {
//     name: string;
//     age: number;
//     gender:string;
// }

const person = {
    name: "leehyerim",
    age: 32,
    gender: "female",

}
const sayHi = (person): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(person));

export {};