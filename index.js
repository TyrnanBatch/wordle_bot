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
    
    // Check if letters with unknown positions are in the word and not in the given positions
    for (let [char, positions] of currentInformation.inWordUnknownPosition) {
        if (!word.includes(char)) {
            return false;
        }
        for (let pos of positions) {
            if (word.charAt(pos) === char) {
                return false;
            }
        }
    }

    // Check if letters in known positions are in the correct position
    for (let [char, pos] of currentInformation.inWordKnownPosition) {
        if (word.charAt(pos) !== char) {
            return false;
        }
    }

    return true;
};

const possibleAnswers = () => {
    let data = fs.readFileSync('/home/tyrnan/Code/projects/wordle_bot/wordlist/possible_answers.txt', 'utf8');
    let lines = data.split('\n');
    let possibleWords = [];

    for (let line of lines) {
        if (wordMatchesInformation(line)) {
            possibleWords.push(line);
        }
    }

    return possibleWords;
};

const getCurrentBestGuessForInfo = () => {
    return 0;
};

console.log(possibleAnswers());
