class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

Person = [
    {
        "name": "Amy",
        "gender": "Female"
    },
    {
        "name": "Anthony",
        "gender": "Male"
    },
    {
        "name": "Anna",
        "gender": "Female"
    },
    {
        "name": "Mike",
        "gender": "Male"
    },
    {
        "name": "Andrew",
        "gender": "Male"
    },
    {
        "name": "Lexie",
        "gender": "Female"
    },
    {
        "name": "Cody",
        "gender": "Male"
    },
    {
        "name": "Ray",
        "gender": "Male"
    },
    {
        "name": "Lilly",
        "gender": "Female"
    },
    {
        "name": "Maria",
        "gender": "Female"
    } ]

let males = Person.filter(Person => Person.gender === "Male");
console.log(males);
let females = Person.filter(Person => Person.gender === "Female");
console.log(females);
