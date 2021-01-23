function sum(num1, num2){
    return console.log(num1+num2)
}

function sum2(){
    let sum = 0;
    for(let i in arguments){
        sum += arguments[i];
    }
    console.log(sum);
}

function sum3(name, ...args){
    let sum = 0;
    for(let i in args){
        sum += args[i];
    }
    console.log(name + " : " + sum);
}

// sum of 2 number
sum(12,12);

// sum of any number of argument
sum2(12,12,12,12,12,12);

// sum of any type of argument like string, number
sum3("sheru", 12,12,23)