"use strict";
////////////////////////////////////////////////////////////////////////////
/*
// -----------------------Coding Challange #1-----------------------------------------
const calcAverage = (firstScore, secondScore, thirdScore) => (firstScore + secondScore + thirdScore) / 3;

const checkWinner = function (teamOneName, teamOneScore, teamTwoName, teamTwoScore) {
	let result;
	if (teamOneScore >= teamTwoScore * 2) {
		result = `${teamOneName} win (${teamOneScore} vs ${teamTwoScore})`;		
	} else if (teamTwoScore >= teamOneScore * 2) {
		result = `${teamTwoName} win (${teamTwoScore} vs ${teamOneScore})`;
	} else {
		result = `It's draw (${teamOneScore} vs ${teamTwoScore})`;
	}
	console.log(result);
}

// ---------------TEST #1-----------------------------
console.log("Test#1")
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
checkWinner("Dolphins", avgDolphins, "Koalas", avgKoalas);

// ---------------TEST #2-----------------------------
console.log("Test#1")
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner("Dolphins", avgDolphins, "Koalas", avgKoalas);
*/
////////////////////////////////////////////////////////////////////

// -----------------------Coding Challange #1-----------------------------------------
/*
const calcTip = bill => bill >= 50 && bill <= 300? bill * 0.15 : bill * 0.2;
const bills = new Array(125, 555, 44);
const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1]));
const total = new Array(bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]);

console.log(bills)
console.log(tips)
console.log(total)
*/

// Object's methods: Challange #1-----------------------------------------
/*
const jonas = {
	firstName: "Jonas",
	lastName: "Schmedtmann",
	age: 2037 - 1991,
	job: "teacher",
	friends: ["Michael", "Peter", "Steven"]
};

jonas.location = "Portugal"
jonas["twitter"] = "@jonas"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`)
*/

// Object's methods: Challange #2-----------------------------------------
/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicens: true,
  calcAge: function () {
    this.age = 2037 - this.birthYear;
		return this.age
  },
	getSummury: function () {
		return `${this.firstName} is a ${this.calcAge()}-years old and he has ${this.hasDriversLicens ? "a" : "no"} driver license. His best friend is ${this.friends[0]}.`
	}
};

// console.log(jonas.calcAge());
console.log(jonas.getSummury());
*/

// Object's methods: Challange #3-----------------------------------------

const markInfo = {
	firstName: "Mark",
	lastName: "Miller",
	mass: 78,
	height: 1.69,
	calcBMI: function () {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi
	}
};
const johnInfo = {
	firstName: "John",
	lastName: "Smith",
	mass: 92,
	height: 1.95,
	calcBMI: function () {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi
	}
};

// console.log(markInfo.calcBMI());
// console.log(johnInfo.calcBMI());

if (markInfo.calcBMI() > johnInfo.calcBMI()) {
	console.log(
		`${markInfo.firstName}'s BMI (${markInfo.bmi}) is higher than ${johnInfo.firstName}'s (${johnInfo.bmi}).`
		);
} else if (johnInfo.bmi > markInfo.bmi) {
	console.log(
    `${johnInfo.firstName}'s BMI (${johnInfo.bmi}) is higher than ${markInfo.firstName}'s (${markInfo.bmi}).`
  );
};
