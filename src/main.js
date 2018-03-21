import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Human } from './human.js';
import { getDateDifference } from './human.js';

const toYear = 1;
const toDay = 365;
const toHour = 8765.76;
const toMin = 525945.6;
const toSec = 31556736;
const toMilli = 31556736000;

const daysEarth = 365.24;
const daysMercury = 88;
const daysVenus = 255;
const daysMars = 686.98;
const daysJupiter = 4300;

const avgLife = 78.74;
const mercuryLife = 323;
const venusLife = 111;
const marsLife = 41;
const jupiterLife = 6;

$(document).ready(function() {
  $('#humanForm').submit(function(event) {
    event.preventDefault();
		let name = $("#name").val();
    let dateOfBirth = $("#date-of-birth").val();
		let foodHabits = $("#food-habits").val();
		let exerciseHabits = $("#exercise-habits").val();
		let socialHabits = $("#social-habits").val();
		let human = new Human(name, dateOfBirth, foodHabits, exerciseHabits, socialHabits);
		console.log(name);
		console.log(dateOfBirth);
		console.log(foodHabits);
		console.log(exerciseHabits);
		console.log(socialHabits);
		let humanAge = human.dateOfBirthToAge(toYear);
		let ageInMs = human.dateOfBirthToAge(toMilli);
		let humanLifeEx = human.getLifeExpectancy();
    let marsLifeEx = human.getLifeExpectancyByPlanet(daysMars);
    let venusLifeEx = human.getLifeExpectancyByPlanet(daysVenus);
    let mercuryLifeEx = human.getLifeExpectancyByPlanet(daysMercury);
    let jupiterLifeEx = human.getLifeExpectancyByPlanet(daysJupiter);
		let humanLifeExDesc = "";
		if (humanAge < humanLifeEx) {
			humanLifeExDesc = "Finally, based on your current habits, you'll probably live until age " + humanLifeEx + ". For some context, that's " + marsLifeEx + " Mars years, " + venusLifeEx + " Venus years, " + mercuryLifeEx + " Mercury years, and " + jupiterLifeEx + " Jupiter years. Thanks for playing!";
		}
		else {
			humanLifeExDesc = "One more thing - good on you! You've surpassed your life expectancy. Keep on doing what you're doing!"
		}
		let ageOnMercury = human.getPlanetAge(daysMercury, toYear);
		let ageOnVenus = human.getPlanetAge(daysVenus, toYear);
		let ageOnMars = human.getPlanetAge(daysMars, toYear);
		let ageOnJupiter = human.getPlanetAge(daysJupiter, toYear);
		let resultsDescription = "<h5>Hi there, <em>" + name + "</em>! Here are some fun facts for you based on the information you provided: You are currently <em>" + humanAge + "</em> years old, or exactly <em>" + ageInMs + "</em> milliseconds old. Woah. Also, did you know you'd be a different age if you lived on a different planet? On Mercury, you'd be a whopping <em>" + ageOnMercury + "</em> years old. On Venus you'd be <em>" + ageOnVenus + "</em>, on Mars you'd be <em>" + ageOnMars + "</em>, and on Jupiter you'd be a measly <em>" + ageOnJupiter + "</em> years old! Pretty wild, huh? " + humanLifeExDesc + "</h5>";
		$("#results").html(resultsDescription);
		$("#results").show();
  });
});
