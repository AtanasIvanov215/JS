for (let rep = 1; rep <= 10; rep++) {
    console.log(`Rep = ${rep}`);
}

const john = ['John', 'Ivanov', 1999, ['mike', 'bob']];
const types = [];
for (let i = 0; i < john.length; i++) {
    console.log(john[i], typeof john[i]);
    //types[i] = typeof john[i];
    types.push(typeof john[i]);
}
console.log(types);

const years = [1990, 1991, 1873, 1977];
const ages = [];

for (let i = 0; i < years.length; i++) {
    //ages[i] = 2037 - years[i];
    ages.push(2037 - years[i]);
}
console.log(ages);

for (let i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i], typeof john[i]);
}
for (let i = 0; i < john.length; i++) {
    if (typeof john[i] === 'number') break;
    console.log(john[i], typeof john[i]);
}

for (let i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`Starting exercise ${exercise}`);
    for (let repetition = 1; repetition <= 5; repetition++) {
        console.log(`repetition ${repetition}`);
    }
}

let repetition = 1;
while (repetition <= 10) {
    console.log(`Rep - ${repetition}`);
    repetition++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
console.log(dice);
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log('Loop is about ot end');
    }
}

for (let index = 1; index <= 50; index++) {
    console.log(`Voter ${index} is voting now`);
}

const population = [7, 8, 153, 1441];
const percentages = [];
function percentageOftheWorld(population) {
    return (population / 7900) * 100;
}
for (let i = 0; i < population.length; i++) {
    percentages[i] = percentageOftheWorld(population[i]);
}
console.log(percentages);

const listOfNeighbours = [['canada', 'mexico'], ['spain'], ['norway', 'sweden', 'russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        let listOf = listOfNeighbours[i];
        console.log(listOf[j]);
    }
}

const percentages3 = [];
let count = 0;
while (count < population.length) {
    percentages3.push(percentageOftheWorld(population[count]));
    count++;
}
console.log(percentages3);

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function tipCalc(billValue) {
    if (billValue >= 50 && billValue <= 300) {
        return billValue * 0.15;
    }
    else {
        return billValue * 0.2;
    }
}
for (let i = 0; i < bills.length; i++) {
    let element = bills[i];
    tips.push(tipCalc(element));
    totals.push(tipCalc(element) + element);
}
console.log(tips);
console.log(totals);

