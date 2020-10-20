//Write an Arrow Function as a constant to return and display a base to the power of exponent; i.e. x^y.
const powerTo = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    //return result;
    console.log(result);  
  };

power(3,2)
