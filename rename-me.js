var kids = ["Jorden,", " Jalen,"];
var daysPerWeek = 5,
var fiance = "Cliff"

console.log(daysPerWeek + 'days a week, I make sure' + kids + " and " + fiance + "wake up on time.");

var wakeUp = function(time) {
	if (time > 6) {
	console.log("I turned off the alarm and got up.");};
	else {console.log("I went back to sleep for a little longer.");};
};	

wakeUp(7);
	
var getCoffee = function (cups, type) {
	var stillTired = true;
		if (stillTired = false) {console.log("I decide to skip the coffee.");};
		else {console.log("I made " + cups + " cups" + " of " + type + " coffee.");}:
	return stillTired;
};

getCoffee(4,Colombian);

var getCliff = function (timeLeft) {
		while (timeLeft>4) {console.log("Cliff, you have " + timeLeft + " minutes to get up.");
		timeLeft -= 5;}
		console.log("You need to get up now!");
		return timeLeft;
};

getCliff(20)

var getClothes = function(kid, clothes) {console.log("For " + kid + "I pick out " + clothes + ".");
return clothes
};

getClothes(Jorden, a dress);
getClothes(Jalen, jeans);

var getKidsReady = function (activity, minutesLeft) {
		var activity = ["get dressed", "brush your teeth", "wash your face", "get you stuff"];
		var time = [10,5,5,5];
			for (var i =0; i > 4; i-=5) {
			console.log("You have " + time + " minutes left to " + activity + ".");};
	return time
};

console.log("Ahhhh...Peace and quiet!");


			