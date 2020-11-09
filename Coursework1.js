class Module {
    constructor (name, code, startDate, endDate, courseName, students){
    this.name = name;
    this.code = code;
    this.startDate = startDate;
    this.endDate = endDate;
    this.courseName = courseName;
    this.student = students;
    }
}
var students = new Array("John", "Peter", "Anthony", "May", "Amy");
Module = [
    {
        "name": "Artificial Intelligence",
        "code": "CO123",
        "startDate": "05/Oct",
        "endDate": "16/Jan",
        "courseName": "Computer Science",
        students
    },
    {
        "name": "Computer Architecture",
        "code": "CO124",
        "startDate": "05/Oct",
        "endDate": "16/Jan",
        "courseName": "Computer Science",
        students
    },
    {
        "name": "Information Databases",
        "code": "CO125",
        "startDate": "05/Oct",
        "endDate": "16/Jan",
        "courseName": "Computer Science",
        students
    },
    {
        "name": "Theory of Computation",
        "code": "CO126",
        "startDate": "16/Jan",
        "endDate": "26/May",
        "courseName": "Cybersecurity",
        students
    },
    {
        "name": "Machine Learning",
        "code": "CO127",
        "startDate": "16/Jan",
        "endDate": "26/May",
        "courseName": "Cybersecurity",
        students
    }]
function ArrayFilter(value){
    if(value == "Computer Science"){
       let moduleFinder = Module.filter(Module => Module.courseName === "Computer Science").map(ele=>ele.name.toUpperCase());
        console.log(moduleFinder);
    }
    else{
        console.log("-------Error! Could not find the course name-------")
    }
}
ArrayFilter("Computer Science");
