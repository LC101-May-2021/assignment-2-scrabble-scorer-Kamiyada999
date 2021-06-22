// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
       results.push(pointValue.includes(word[i]));
			letterPoints += `Points for "${word[i]}": ${pointValue}\n`
		 }
     return results;
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

let wordAgain = " "
function initialPrompt() {
   wordAgain = input.question("Let's play some scrabble! Enter a word:");
   return wordAgain;
}

function simpleScore(word){
   word = word.toUpperCase();
   let normalPoints = 0;
  simpleScoreArray = word.split('');
  for (let i = 0; i < word.length; i++) {
    normalPoints++;
  }
  return normalPoints;
}
 /* letterPoints = simpleScoreArray.length;
  return letterPoints;*/


function vowelBonusScore(word){
   word = word.toUpperCase();
  //simpleScoreArray = word.split('');
  vPoints = 0;
  for (let i = 0; i < word.length; i++)
  if (word[i] === "A" || word[i] === "E" || word[i] === "I" || word[i] === "O" || word[i] === "U") {
    vPoints  = vPoints + 3;
  } else {
    vPoints = vPoints + 1;
  }
  return vPoints;
}
  function scrabbleScore(word){
  word = word.toLowerCase();
  sPoints = 0;
  for(let i = 0; i<word.length; i++){
    sPoints += newPointStructure[word[i]]
  }
  return sPoints
}

const scoringAlgorithms = [
{simpleScore,
  name: "Simple Score",
  description: "One point per character",
  scoringFunction: simpleScore},


{vowelBonusScore,
  name: "Bonus Vowels",
  description: "Vowels are worth 3 points",
  scoringFunction: vowelBonusScore},


{scrabbleScore,
  name: "Scrabble",
  description: "Uses scrabble point system",
  scoringFunction: scrabbleScore}
]



function scorerPrompt() {
  console.log("Which scoring algorithms would you like to use?\n0-Simple: One point per character\n1- Vowel Bonus: Vowels are worth 3 points\n2- Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: ");
  if(userInput === "0") {
    return simpleScore
  }
  if(userInput === "1") {
    return vowelBonusScore
  }
  if(userInput === "2") {
    return scrabbleScore
  }
}
function transform(oldPointStructure) {
 let newPointStructure = {};
  for(item in oldPointStructure){
    for(i = 0; i < oldPointStructure[item].length; i++){
      newPointStructure[oldPointStructure[item][i].toLowerCase()] = Number(item);
    }
  }
  return newPointStructure;
};
let newPointStructure = transform(oldPointStructure);

function runProgram() {
   initialPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
}

