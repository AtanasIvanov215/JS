const markMiller = {
    firstName: 'Mark',
    lastName: 'Miller',
    kg: 78,
    height: 1.69,
    calcBMI: function () {
        return markMiller.kg / (markMiller.height ** 2);
    }
};
const johnSmith = {
    firstName: 'John',
    lastName: 'Smith',
    kg: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.kg / this.height ** 2;
        return this.bmi;
    }
};
if (johnSmith.calcBMI() > markMiller.calcBMI()) {
    console.log(`${johnSmith.firstName}'s BMI (${johnSmith.bmi}) is higher than ${markMiller.firstName}'s 
    (${markMiller.bmi})!`);
}
else {
    console.log(`${markMiller.firstName}'s BMI (${markMiller.calcBMI()}) is higher than ${johnSmith.firstName}'s 
    (${johnSmith.bmi})!`);
}

