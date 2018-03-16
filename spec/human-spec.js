import { Human } from './../src/human.js';
import { getDateDifference } from './../src/human.js';

const toYear = 1;
const toDay = 365;
const toHour = 8765.76;
const toMin = 525945.6;
const toSec = 31556736;
const toMilli = 31556736000;

const daysMercury = 88;
const daysVenus = 255;
const daysMars = 686.98;
const daysJupiter = 4300;

const avgLife = 78.74;

describe('Human', function() {
  it('should test whether a human has its properties', function() {
    let human = new Human("dillon", "1991-06-04", "poor", "poor", "poor");
    expect(human.name).toEqual("dillon");
    expect(human.dateOfBirth).toEqual("1991-06-04");
    expect(human.foodHabits).toEqual("poor");
		expect(human.exerciseHabits).toEqual("poor");
		expect(human.socialHabits).toEqual("poor");
  });
});

describe('dateOfBirthToAge', function() {
	it('should test whether DOB is converted to age', function() {
		let human = new Human("dillon", "1991-06-04", "poor", "poor", "poor");
		let ageInYears = human.dateOfBirthToAge(toYear);
		expect(ageInYears).toEqual(26);
	});
});

describe('getPlanetAge', function() {
	it('should change age based on planet chosen', function() {
		let human = new Human("dillon", "1991-06-04", "poor", "poor", "poor");
		let ageOnMars = human.getPlanetAge(daysMars, toYear);
		let ageOnJupiter = human.getPlanetAge(daysJupiter, toYear);
		expect(ageOnMars).toEqual(13);
		expect(ageOnJupiter).toEqual(2);
	});
});

describe('getLifeExpectancy', function() {
	it('should return life expectancy based on habits', function() {
		let human = new Human("dillon", "1991-06-04", "poor", "poor", "poor");
		expect(human.getLifeExpectancy()).toEqual(avgLife - 21);
	});
});

describe('getDateDifference', function() {
	it('should return difference between two ages', function() {
		let dateOne = "1991-06-04";
		let dateTwo = "1992-06-04";
		let ageDiff = getDateDifference(dateOne, dateTwo, toYear);
		let ageDiffInSec = getDateDifference(dateOne, dateTwo, toSec);
		expect(ageDiff).toEqual(1);
		expect(ageDiffInSec).toEqual(31556736);
	});
});
