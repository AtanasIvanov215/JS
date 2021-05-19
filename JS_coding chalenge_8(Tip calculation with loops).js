'use strict'

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
let sum = 0;
function calcAverage(billsSum) {
    return billsSum / totals.length;
}

for (let i = 0; i < totals.length; i++) {
    sum += totals[i];
}
console.log(sum);
console.log(calcAverage(sum));