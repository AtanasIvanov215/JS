`use strict`;
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let dolphinsAverage1 = calcAverage(44, 23, 71);
let dolphinsAverage2 = calcAverage(85, 54, 41);

let koalasAverage1 = calcAverage(65, 54, 49);
let koalasAverage2 = calcAverage(23, 34, 27);

function checkWinner(koalapoints, dolphinpoints) {
    if (koalapoints > dolphinpoints && koalapoints >= dolphinpoints * 2) {
        return (`Koalas win(${koalapoints} vs. ${dolphinpoints})`);
    }
    else if (dolphinpoints > koalapoints && dolphinpoints >= koalapoints * 2) {
        return (`Dolphins win(${dolphinpoints} vs. ${koalapoints})`);
    }
    else {
        return `No team wins`;
    }
}
let data1 = checkWinner(koalasAverage1, dolphinsAverage1);
console.log(data1);
let data2 = checkWinner(koalasAverage2, dolphinsAverage2);
console.log(data2);