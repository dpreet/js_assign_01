let myVal= process.argv ;
let mealCost = Number(myVal[2]) ;
console.log(`your mealcost is: $${mealCost}`);
let tipPercent = Number(myVal[3]);
console.log(`your tipPercent is: ${tipPercent}%`);
const tipAmount = (tipPercent / 100) * (mealCost);
const totalOwing = tipAmount + mealCost ;
const outPut = (`Your meal was $${mealCost} + a ${tipPercent}% tip = ${totalOwing}`) ;
console.log(`${outPut}`) ;