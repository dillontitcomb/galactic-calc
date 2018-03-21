// One year in all units
const toYear = 1;
const toDay = 365;
const toHour = 8765.76;
const toMin = 525945.6;
const toSec = 31556736;
const toMilli = 31556736000;
// Days per year on each planet
const daysEarth = 365.24;
const daysMercury = 88;
const daysVenus = 255;
const daysMars = 686.98;
const daysJupiter = 4300;
// Avg life expectancy on each planet (years)
const avgLife = 78.74;
const mercuryLife = 323;
const venusLife = 111;
const marsLife = 41;
const jupiterLife = 6;

export class Human {
	constructor(name, dateOfBirth, foodHabits, exerciseHabits, socialHabits) {
		this.name = name;
		this.dateOfBirth = dateOfBirth;
		this.foodHabits = foodHabits;
		this.exerciseHabits = exerciseHabits;
		this.socialHabits = socialHabits;
	}
	dateOfBirthToAge(conversionType) {
		let birthday = new Date(this.dateOfBirth);
		let dateDiff = Date.now() - birthday;
		let years = Math.floor(dateDiff / toMilli);
		return years * conversionType;
	}
	getPlanetAge(planetDays, conversionType) {
		let birthday = new Date(this.dateOfBirth);
		let dateDiff = Date.now() - birthday;
		let ageYears = Math.floor(dateDiff / toMilli);
		let planetAgeInYears = Math.floor((ageYears*365) / planetDays);
		return planetAgeInYears * conversionType;
	}
	getLifeExpectancyByPlanet(planetDays) {
		let earthExpectancy = this.getLifeExpectancy();
		return Math.floor(((earthExpectancy * daysEarth)/planetDays));
	}
	getLifeExpectancy() {
		let age = this.dateOfBirthToAge(toYear);
		let habitArray = [this.foodHabits, this.exerciseHabits, this.socialHabits];
		let healthScore = 0;
		habitArray.forEach(function(habit) {
			if (habit === "poor") {
				healthScore -= 7;
			}
			if (habit === "good") {
				healthScore += 7;
			}
		})
		return Math.floor(avgLife + healthScore);
	}
};

export function getDateDifference(dateOne, dateTwo, conversionType) {
	let firstDate = new Date(dateOne);
	let secondDate = new Date(dateTwo);
	let dateDiff = Math.abs(firstDate - secondDate);
	let diffYears =  Math.floor(dateDiff / toMilli);
	return diffYears * conversionType;
}
