//Write a function that inserts an element into a list only if the element to be inserted is smaller than any of the elements currently in the list.
var numbers = [4, 5, 7];
insert(3);
function insert(value){
    result = numbers.every(function (element) {
        return value < element;
    });
    console.log(result);
    if (result){
        numbers.push(value);
    }
    else{
        console.log("The number is bigger than the ones in the array");
    }
}
console.log(numbers);