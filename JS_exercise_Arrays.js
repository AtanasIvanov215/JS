const friends = ['Mikele', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2009, 2000);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jake';
console.log(friends);

const john = ['John', 'Ivanov', 1999, friends];
console.log(john);
console.log(john[3]);
//console.log(john[4]);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years1 = [1991, 1984, 2009, 2000];

console.log(calcAge(years1));

for (let index = 0; index < years1.length; index++) {
    const element = years1[index];
    const result = calcAge(element);
    console.log(result);
}
//adding
const newLenght = friends.push('Jay');
console.log(newLenght);

friends.unshift('John');
console.log(friends);
//removing
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // removes the first element
console.log(friends);

console.log(friends.indexOf('Mikele'));
console.log(friends.includes('Mikele'));

if (friends.includes('Mikele')) {
    console.log(`You have a friend called ${friends[0]}`);
}

const populations = new Array(6, 7, 153, 1441);
if (populations.length === 4) {
    console.log(`true`)
}
else {
    console.log('false');
}

const calcPop = function (percent) {
    return (percent / 7900) * 100;
}
const array1 = new Array;
for (let index = 0; index < populations.length; index++) {
    const element = populations[index];
    const percents = calcPop(element);
    array1.push(percents);
}
console.log(array1);

const neighbours = ['Greece', 'Serbia', 'Romania'];
neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Not central Europe');
}

const index = neighbours.indexOf('Serbia');
neighbours[index] = 'Republic of Serbia';
console.log(neighbours);
