const myVal=process.argv ;
console.log(`process argument at position 3 is ${myVal[2]}`);
console.log(`process argument at position 4 is ${myVal[3]}`);
let sum = Number(myVal[2]) + Number(myVal[3]) ;
console.log(`result after adding the arguments is ${sum}`) ;