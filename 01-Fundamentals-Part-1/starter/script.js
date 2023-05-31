// -----------------------------Coding Challange #1-----------------------------------

/*
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 95;
const johnHeight = 1.88;
let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;
let markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);
*/
///////////////////////////////////////////////////////

/*
const age = 10;
const personName = "Sarah"
const isOldEnough = age >= 18;
if (isOldEnough) {
	console.log(`${personName} can get driving license 🚗`)
} else {
	const yearsLeft = 18 - age;
	console.log(`${personName} can't get driving license. Wait another ${yearsLeft} years. 🤢`)
}
*/

////////////////////////////////////////////////////////

// -----------------------Coding Challange #2-----------------------------------------
// 
// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.88;
// let markBMI = markWeight / markHeight ** 2;
// let johnBMI = johnWeight / johnHeight ** 2;

// if(markBMI > johnBMI) {
// 	console.log(`Mark's BMI (${markBMI} is higher than John's BMI (${johnBMI}).`);
// } else {
// 	console.log(`John's BMI (${johnBMI} is higher than Mark's BMI (${markBMI}).`);
// }

/////////////////////////////////////////////////////////////

// -----------------------Coding Challange #3-----------------------------------------
/* 
const dolphinScorOne = 96;
const dolphinScorTwo = 108;
const dolphinScorThree = 89;
const koalasScorOne = 88;
const koalasScorTwo = 91;
const koalasScorThree = 110;

let dolphinAverageScore = (dolphinScorOne + dolphinScorTwo + dolphinScorThree) / 3;
let koalasAverageScore = (koalasScorOne + koalasScorTwo + koalasScorThree) / 3;

if (dolphinAverageScore > koalasAverageScore) {
	console.log(`Dolphin's average score (${dolphinAverageScore}) is greater than Koalas average score (${koalasAverageScore}).	Dolphin's  team is winner.`);
} else if (dolphinAverageScore === koalasAverageScore) {
	console.log(`It' s a draw!`);
} else {
	console.log(`Koalas average score (${koalasAverageScore}) is greater than Dolphin's average score (${dolphinAverageScore}).	Koalas's  team is winner.`);
}
*/                    
//                         ====================
// --------------------------Bonus 1 -----------------------------------
/*
const dolphinScorOne = 97;
const dolphinScorTwo = 112;
const dolphinScorThree = 101;
const koalasScorOne = 109;
const koalasScorTwo = 95;
const koalasScorThree = 123;
const minScore = 100;

let dolphinAverageScore =
  (dolphinScorOne + dolphinScorTwo + dolphinScorThree) / 3;
let koalasAverageScore = (koalasScorOne + koalasScorTwo + koalasScorThree) / 3;

if (dolphinAverageScore > koalasAverageScore && dolphinAverageScore >= 100) {
  console.log(
    `Dolphin's average score (${dolphinAverageScore}) is greater than Koalas average score (${koalasAverageScore}).	Dolphin's  team is winner.`
  );
} else if (dolphinAverageScore === koalasAverageScore) {
  console.log(`It' s a draw!`);
} else {
  console.log(
    `Koalas average score (${koalasAverageScore}) is greater than Dolphin's average score (${dolphinAverageScore}).	Koalas's  team is winner.`
  );
}
*/
//                          ====================
// --------------------------Bonus 2 -----------------------------------
/*const dolphinScorOne = 97;
const dolphinScorTwo = 112;
const dolphinScorThree = 101;
const koalasScorOne = 109;
const koalasScorTwo = 95;
const koalasScorThree = 106;
const minScore = 100;

let dolphinAverageScore =
  (dolphinScorOne + dolphinScorTwo + dolphinScorThree) / 3;
let koalasAverageScore = (koalasScorOne + koalasScorTwo + koalasScorThree) / 3;

if (dolphinAverageScore > koalasAverageScore && dolphinAverageScore >= 100) {
  console.log(
    `Dolphin's average score (${dolphinAverageScore}) is greater than Koalas average score (${koalasAverageScore}).	Dolphin's  team is winner.`
  );
} else if (dolphinAverageScore === koalasAverageScore && dolphinAverageScore >= 100) {
  console.log(
    `Koalas average score is (${koalasAverageScore}) and Dolphin's average score is (${dolphinAverageScore} It' s a draw!`
  );
} else {
  console.log(
    `Koalas average score (${koalasAverageScore}) is greater than Dolphin's average score (${dolphinAverageScore}).	Koalas's  team is winner.`
  );
}
*/
/////////////////////////////////////////////////////////////

// -----------------------Coding Challange------------------------------------

const bill = 430;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15: bill * 0.20;
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value $${bill + tip}`);
