const raining = true;
const cold = true;

if(raining) {
	console.log("Don't forget your umbrella!");
}

if(cold){
	console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");


//using Logical operators

const isCitizen = true;
const age = 26;

if(isCitizen && age > 18){
	console.log("You are eligible to vote.");
}

//----------------

if(temperature < -40 || temperature > 40){
	console.log("Maybe going outside isn't such a great idea...");
}
