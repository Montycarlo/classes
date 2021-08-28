
/* Lesson 1 - Classes and Instances
 * */

class Person{
	constructor(name){
		this.name = name
	}
}

var number = 1; // Int or Number
var someString = "Hello!"; // String
var noe = new Person("Noe"); // ??????
var josh = new Person("Josh");

console.log(noe);
console.log(josh);

// Question - If the 'number' variable is of type 'Int',
//	What is the type of 'noe' and 'josh' variables?

//	Question - What is the type of the 'Person' class?

console.log("Noe's name is " + noe.name);

// #####################################################################
// #####################################################################

// If we are writing a program to keep track of people's scores, then for each person, we need
// to keep track of;
//	1. Their name, so we can display it to the user
//	2. Their current score
//

class Player{

	constructor(name){
		this.name = name;
		this.score = 0;
	}

	addOneToScore(){
		this.score = this.score + 1;
	}

}

var playerA = new Player("Josh");
var playerB = new Player("Noe");

// Now let's pretend some actions occurred in the game, and playerA won, we would
// run the following line of code somewhere:
playerA.addOneToScore();

// Then let's check the new score:
console.log("Player A's score is now " + playerA.score);

// #####################################################################
// #####################################################################

// If we didn't have classes, how otherwise could we store this data?
// Perhaps like this?
var playerA_2 = ["Josh", 0];

// But then we would need to declare a function to add one to it;
function addOneToScore(player){
	player[1] = player[1] +1;
}

// and then updating the score like this;
addOneToScore(playerA_2);

// #####################################################################
// #####################################################################

// Which would you rather see in your code? Which seems more organised?
// What is then one of the major benefits of using classes?
//

// Exercise - write a function which when given a Player instance, determines whether they have won
// A player has won when their score is more than 5.
//
//
// Now modify the Player class to add a method to each instance - so we can use the following code:
let playerExample = new Player("Bob");
// ...
// if(playerExample.hasWon()){
// 	console.log("Bob has won!");
// }
// Now that we have a current 'score', and a way to add one to the score variable, we need a way to show that on the screen.
//
// Write a function that will write a player's score the to browser.

// function writePlayerToDOM .......

// 
