const fs = require("fs");

let currentInformation = {
    // Mock word "mouse"
    notInWord: ['f', 'p', 'g', 'l', 'a'],
    inWordUnknownPosition: [['m', [4, 5]], ['o', [0, 4]]],
    inWordKnownPosition: [['u', 2]]
};

const wordMatchesInformation = (word) => {
    // Check if letters that are not in the word are actually not in the word
    for (let char of currentInformation.notInWord) {
        if (word.includes(char)) {
            return false;
        }
    }
    
    // Check if letters with unknown positions are in the word
    for (let charInfo of currentInformation.inWordUnknownPosition) {
        if (word.includes(charInfo[0])) {
            return false;
        }
    }

    // Check if letters in known positions are in the correct position
    for (let charInfo of currentInformation.inWordKnownPosition) {
        if (word.charAt(charInfo[1]) !== charInfo[0]) {
            return false;
        }
    }

    return true;
};

const possibleAnswers = () => {
    let data = fs.readFileSync('possible_wordles.txt', 'utf8'); // Use readFileSync for synchronous reading
    let lines = data.split('\n');
    let possibleWordles = [];

    for (let line of lines) {
        if (wordMatchesInformation(line)) {
            possibleWordles.push(line); // Use push() instead of append() for arrays
        }
    }

    return possibleWordles;
};

const getCurrentBestGuessForInfo = () => {
    // Placeholder function, implement logic as needed
    return 0;
};

console.log(possibleAnswers()); // Ensure to call the function with parentheses
