"use strict";
exports.__esModule = true;
// interface Human {
//     name: string;
//     age: number;
//     gender:string;
// }
var Human = /** @class */ (function () {
    function Human(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    return Human;
}());
var leehyerim = new Human("hyerim", 32, "female");
// const person = {
//     name: "leehyerim",
//     age: 32,
//     gender: "female",
// }
var sayHi = function (person) {
    return "Hello " + person.name + ", you are " + person.age + ", you are a " + person.gender;
};
console.log(sayHi(leehyerim));
