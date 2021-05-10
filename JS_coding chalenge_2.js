let heightMark = 1.88;
let heightJonh = 1.76;
let weightMark = 95;
let weughtJohn = 85;
let markBMI = weightMark / (heightMark * heightMark);
let johnBMI = weughtJohn / (heightJonh * heightJonh);

if (markBMI >= johnBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than Jon's BMI ${johnBMI}.`);
}
else {
    console.log(`Jonh's BMI ${johnBMI} is higher than Mark's BMI ${markBMI}.`);
}


