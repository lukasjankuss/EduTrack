var numbers = [1, 3, 5];
insert(3);
function insert(value){
    result = numbers.every(function (element) {
        return value > element;
    });
    console.log(result);
    if (result){
        numbers.push(value);
    }
    else{
        console.log("The number is smaller than the ones in the array");
    }
}
console.log(numbers);
