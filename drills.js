// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

"use strict"

function jediName(firstName, lastName) {
  let secondHalf = firstName.substring(0, 2);
  let firstHalf = lastName.substring(0, 3);

  return `${firstHalf}${secondHalf}`;
}

jediName('Beyonce', 'Knowles'); // KnoBe
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function beyond(num) {
  // 1: if num is infinite log out "and beyond"
  if (num === Infinity || num === -Infinity) {
    console.log('and beyond');
  }
  // 2: if num is finite log out "to infinity"
  else if (num > 0) {
    console.log('to infinity');
  }
  // 3: if num is negative but finite, log out "to negative infinity"
  else if (num < 0) {
    console.log('to negative infinity');
  }
  // 4: if num is zero, log out "staying home"
  else if (num === 0) {
    console.log('staying home');
  }
}

console.log("------");
beyond(Number.POSITIVE_INFINITY); // And beyond
console.log("------");
beyond(Number.NEGATIVE_INFINITY); // And beyond
console.log("------");
beyond(64); // To infinity
console.log("------");
beyond(-465); //To negative infinity
console.log("------");
beyond(0); // Staying home
console.log("------");
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function decodeMessage(sentence) {
  //split the sentence into separate strings
  let allWords = sentence.split(' ');
  //container for the decoded message
  let message = ' ';
  for (let i = 0; i < allWords.length; i++) {
    //extract first word
    let word = allWords[i];
    //extract the first letter from first word
    let firstLetter = word[0];

    //if the first letter is 'a' grab the second character of the word etc
    if (firstLetter === 'a') {
      //Save all coded letters to the same string
      message += word[1];
    }
    else if (firstLetter === 'b') {
      //Save all coded letters to the same string
      message += word[2];
    }
    else if (firstLetter === 'c') {
      //Save all coded letters to the same string
      message += word[3];
    }
    else if (firstLetter === 'd') {
      //Save all coded letters to the same string
      message += word[4];
    }
    else {
      //Save all coded letters to the same string
      message += ' ';
    }
  }
}
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


/*
Step 1: Create Function that takes month(string) and leapYear(boolean)

Step 4: Use a switch statement to return a sentence explaining how many days there are in that month.
*/

function daysInMonth(month, leapYear) {
  //Step 3: Make a list of real months.
  //Step 2: If a string doesn't match a real  month, throw "Must provide a valid month"
  switch (month) {
    case 'January':
      console.log('31 days');
      break;
    case 'February':
      //If the condition of an if statement is a boolean, you don't need to explicitly state anything in the code.
      if (leapYear) {
        console.log('29 days');
      }
      else {
        console.log('28 days');
      }
      break;
    case 'March':
      console.log('31 days');
      break;
    case 'April':
      console.log('30 days');
      break;
    case 'May':
      console.log('31 days');
      break;
    case 'June':
      console.log('30 days');
      break;
    case 'July':
      console.log('31 days');
      break;
    case 'August':
      console.log('31 days');
      break;
    case 'September':
      console.log('30 days');
      break;
    case 'October':
      console.log('31 days');
      break;
    case 'November':
      console.log('30 days');
      break;
    case 'December':
      console.log('31 days');
      break;
    default: 
    console.log('Please enter a valid month, you Zounderkite.')
  }
}

daysInMonth('January', true);

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

/*
Step 1: Create a function wrapper with a player argument. 
Step 2: There are 2 players and three options.
Step 3: If both players choose the same option, the result is a tie.
Step 4: Bird beats snake, lizard beats bird, snake beats lizard.
Step 5: If both players choose the same option, the result is a tie.
Step 6: If the number entered is not 1, 2, or 3, throw an error.
*/

//player chooses lizard

function rockScissorsLizardSpock(player){
  const randomNo = Math.floor(Math.random() * 3) + 1;
  /*
  Bird/Rock === 1
  Snake/Scissors === 2
  Lizard/Paper === 3
  */
  if (player === randomNo){
    console.log('Neither of you zounderkites win.');
  }
  else if((player === 1 && randomNo === 2) || (player === 2 && randomNo === 3 ) || (player === 3 && randomNo === 1 ) ){
    console.log('Player wins!')
  }
  else{
    console.log('Player anti-wins.')
  }
}

rockScissorsLizardSpock(1);