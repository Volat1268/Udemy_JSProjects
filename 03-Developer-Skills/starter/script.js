// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//////////////////////////////////////////////////////
// Coding Challenge #1
const tempsOne = [17, 21, 23];
const tempsTwo = [12, 5, -5, 30, 4];

const printForecast = function (arr) {
	let report = "...";
	let maxTemp = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > maxTemp) maxTemp = arr[i];
		report += `${maxTemp}°С in ${i + 1} days...`;
	}
	return report;	
}

console.log(printForecast(tempsTwo));








