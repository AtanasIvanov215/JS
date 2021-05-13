function tipCalc(billValue) {
    if (billValue >= 50 && billValue <= 300) {
        return billValue * 0.15;
    }
    else {
        return billValue * 0.2;
    }
}
const firstValue = tipCalc(100);
console.log(firstValue);

const bills = [125, 555, 44];
const tips = new Array;
for (let index = 0; index < bills.length; index++) {
    const element = bills[index];
    const result = tipCalc(element);
    tips.push(result);
}
console.log(tips);