//Create a Person class that stores a person’s name and gender. Create a list of at least 10 Person objects. 
//Write a function that displays all the people in the list of the same gender.
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
function ArrayFilter(value){
    if(value == "Males"){
        let males = Person.filter(Person => Person.gender === "Male");
        console.log(males);
    }
    else if(value == "Females"){
        let females = Person.filter(Person => Person.gender === "Female");
        console.log(females);
    }
}
ArrayFilter("Females");
