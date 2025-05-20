//function for calc

function sum( a,b){
    return a+b;
}

function subs(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b===0){
        console.log("chal futt!!");
    } else { 
         return a/b;
    }
}

console.log(sum(2,3));

//function inside a function 

function calculator(a,b,operator){
    return operator(a,b)
}



const sumResult=calculator(5,4,sum);
console.log(sumResult);

const subResult=calculator(5,9,subs);
console.log(subResult);

const multiplyResult=calculator(5,0,multiply);
console.log(multiplyResult);

const divideResult=calculator(5,0,divide);
console.log(divideResult);