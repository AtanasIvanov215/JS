'use strict';

function logger() {
    console.log('My name is John');
}
logger();

function fruitProccesor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

let applejiuce = fruitProccesor(5, 0);
console.log(applejiuce);
console.log(fruitProccesor(5, 0));
const appleOrangejiuce = fruitProccesor(4, 8);
console.log(appleOrangejiuce);

function describeCountry(country, population, capital) {
    const result = `${country} has ${population} million population and its capital is ${capital}.`;
    return result;
}
console.log(describeCountry('Finland', 6, 'Helsinki'));
console.log(describeCountry('Bulgaria', 7, 'Sofia'));
console.log(describeCountry('Russia', 153, 'Moscow'));

function calcAge1(birthYear) {
    let age = 2037 - birthYear;
    return age;
}
const age1 = calcAge1(1991);
console.log(age1);

//function expression 

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1999);

console.log(age1, age2);
function percentageOftheWorld(population) {
    return (population / 7900) * 100;
}

let res1 = percentageOftheWorld(7);
let res2 = percentageOftheWorld(6);
let res3 = percentageOftheWorld(153);
let res4 = percentageOftheWorld(1441);

console.log(res1, res2, res3, res4);

function percentageOftheWorld2(population) {
    const result = (population / 7900) * 100;
    return result;
}
let res5 = percentageOftheWorld(1441);
console.log(res5);

const calcAge3 = birthYear => 2037 - birthYear;
let age3 = calcAge3(1992);
console.log(age3);


const yearsUntilRet = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires after ${retirement} years.`;
}
console.log(yearsUntilRet(1991, 'John'));
console.log(yearsUntilRet(1992, 'Bob'));

const percentageOftheWorld3 = (population) => {
    const result = (population / 7900) * 100;
    return result;
}
console.log(percentageOftheWorld3(7));
console.log(percentageOftheWorld3(1441));

function cutsFruit(fruit) {
    return fruit * 4;
}

function fruitProccesor(apples, oranges) {
    let applepeices = cutsFruit(apples);
    let orangepeices = cutsFruit(oranges);

    const juice = `Juice with ${applepeices} apples pieces and ${orangepeices} orange pieces.`;
    return juice;
}
console.log(fruitProccesor(2, 3));

function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about ${percentageOftheWorld(population)}% of the world.`;

}
console.log(describePopulation('China', 1441));
