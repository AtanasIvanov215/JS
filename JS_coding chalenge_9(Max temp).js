// // Remember, we're gonna use strict mode in all scripts now!
// "use strict";

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const temp1 = [15, 2, -7, -9, 20];
// const tempConcat = temperatures.concat(temp1);
// console.log(tempConcat);

// const calcTempAmp = function (temps) {
//   let max = tempConcat[0];
//   let min = tempConcat[0];
//   for (let i = 0; i < tempConcat.length; i++) {
//     if (typeof tempConcat[i] !== "number") continue;
//     if (tempConcat[i] > max) max = tempConcat[i];
//     if (tempConcat[i] < min) min = tempConcat[i];
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude1 = calcTempAmp(tempConcat);
// console.log(amplitude1);

// const measureKelv = function () {
//   const measurment = {
//     type: "temp",
//     unit: "celsius",
//     //value: Number(prompt("Degrees celsius:")),
//   };
//   //console.log(measurment);
//   //console.table(measurment); //console.log(measurment.value);
//   const kelvin = measurment.value + 237;
//   return kelvin;
// };

// console.log(measureKelv());

const tempData = [17, 21, 23];
const tempData2 = [12, 5, -5, 0, 4];
let str = "";

const printForest = function (data) {
  for (let i = 0; i < data.length; i++) {
    if (i === 0) {
      str += `in ${i + 1} day the temp was ${data[i]}C... `;
    } else {
      str += `in ${i + 1} days the temp was ${data[i]}C... `;
    }
  }
  return str;
};

console.log(printForest(tempData));
str = "";
console.log(printForest(tempData2));
