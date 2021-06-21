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
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
     return results;
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

let wordAgain = ""
function initialPrompt() {
   wordAgain = input.question("Let's play some scrabble! Enter a word:");
   return wordAgain;
}

function simpleScore(word){
   word = word.toUpperCase();
  simpleScoreArray = word.split('');
  letterPoints = simpleScoreArray.length
  return letterPoints
}

function vowelBonusScore(word){
   word = word.toUpperCase();
  simpleScoreArray = word.split('');
  letterPoints = 0
  for (let i = 0; i < vowelBonusScore.length; i++)
  if (vowelBonusScore = "A" || "E" || "I" || "O" || "U") {
    letterPoints =+ 3
  } else {
    letterPoints =+ 1
  }
}
  function scrabbleScore(word){
  word = word.toLowerCase()
  letterPoints = 0
  for(let i = 0; i<word.length; i++){
    letterPoints += newPointStructure[word[i]]
  }
  return letterPoints
}

simpleScore = {
  name: "Simple Score",
  description: "One point per character",
  scoringFunction: simpleScore
}

vowelBonusScore = {
  name: "Bonus Vowels",
  description: "Vowels are worth 3 points",
  scoringFunction: vowelBonusScore
}

scrabbleScore = {
  name: "Scrabble",
  description: "Uses scrabble point system",
  scoringFunction: scrabbleScore
}




const scoringAlgorithms = [simpleScore, vowelBonusScore, scrabbleScore];

function scorerPrompt() {
  console.log("Which scoring algorithm would you like to use?\n\n");
  for(let i = 0; i<scoringAlgorithms.length; i++){
    console.log(`${i} – ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`)
  }
  scorerPrompttt = input.question("Enter 0, 1, or 2: ");
  //scorerPrompttt = Number(scorerPrompttt)
  console.log (`Score for "${wordAgain}": ${scoringAlgorithms[scorerPrompttt].scoringFunction(wordAgain)}`)
}

function transform(pointStructure) {
  let newPointStruct = {};
  for (key in pointStructure) {
    for (let i = 0; i < pointStructure[key].length; i++){
      let letterItem = pointStructure[key][i];
      letterItem = letterItem.toLowerCase();
      newPointStruct[`${letterItem}`] = Number(key);
    };
  };
  return newPointStruct;
};

let newPointStructure = transform(oldPointStructure);
newPointStructure[" "] ;
//= 0;

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

