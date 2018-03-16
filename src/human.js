const toDay = 365;
const toHour = 8765.76;
const toMin = 525945.6;
const toSec = 31556736;
const toMilli = 31556736000;

const daysMercury = 88;
const daysVenus = 255;
const daysMars = 686.98;
const daysJupiter = 4300;

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
		return Math.floor(dateDiff / conversionType);
	}
	getPlanetAge(planetDays) {
		let birthday = new Date(this.dateOfBirth);
		let dateDiff = Date.now() - birthday;
		let ageYears = Math.floor(dateDiff / toMilli);
		let planetAgeInYears = Math.floor((ageYears*365) / planetDays);
		return planetAgeInYears;
	}
};

export function getDateDifference(dateOne, dateTwo, conversionType) {
	let firstDate = new Date(dateOne);
	let secondDate = new Date(dateTwo);
	let dateDiff = Math.abs(firstDate - secondDate);
	return Math.floor(dateDiff / conversionType);
}
