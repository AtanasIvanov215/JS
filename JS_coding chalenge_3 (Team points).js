let koalas1 = 88;
let koalas2 = 91;
let koalas3 = 110;
let dolphins1 = 96;
let dolphins2 = 108;
let dolphins3 = 89;

let koalasAverage = (koalas1 + koalas2 + koalas3) / 3;
let dolphinsAverage = (dolphins1 + dolphins2 + dolphins3) / 3;
if (koalasAverage > dolphinsAverage) {
    console.log(`Koalas win by ${koalasAverage - dolphinsAverage} points.`);
}
else if (koalasAverage < dolphinsAverage) {
    console.log(`Dolphins win by ${dolphinsAverage - koalasAverage} points.`);
}
else {
    console.log(`Its a tie.`)
}

//bonus 1

let koala1 = 109;
let dolph1 = 97;
let koala2 = 95;
let dolph2 = 112;
let koala3 = 123;
let dolph3 = 101;
let koalaAver = 0;
let dolphAver = 0;

if (koala1 > 100) {
    koalaAver += koala1;
}
if (koala2 > 100) {
    koalaAver += koala2;
}
if (koala3 > 100) {
    koalaAver += koala3;
}

if (dolph1 > 100) {
    dolphAver += dolph1;
}
if (dolph2 > 100) {
    dolphAver += dolph2;
}
if (dolph3 > 100) {
    dolphAver += dolph3;
}

if (koalaAver > dolphAver) {
    console.log(`Koalas win with ${koalaAver} points.`);
}
else if (koalaAver < dolphAver) {
    console.log(`Dolphins win with ${dolphAver} points.`);
}
else {
    console.log(`Its a tie.`)
}

//bonus 2

let koalPoints = (109 + 95 + 106) / 3;
let dolphPoints = (97 + 112 + 101) / 3;

if (koalPoints > dolphPoints && koalPoints > 100) {
    console.log(`Koalas win with ${koalPoints} points.`);
}
else if (koalPoints < dolphPoints && dolphPoints > 100) {
    console.log(`Dolphins win with ${dolphPoints} points.`);
}
else if (koalPoints === dolphPoints && koalPoints > 100) {
    console.log(`Both teams win`);
}
else {
    console.log(`No team wins!`);
}
