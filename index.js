const fs = require("fs")

let currentInfomation = {
	// Mock word mouse
	notInWord: ['f', 'p', 'g', 'l', 'a'],
	inWordUnkownPosition: [['m', [4, 5]], ['o', [0, 4]]],
	inWordKnownPosition: [['u', 2]]
}

const wordMatchesInfomation = (word) => {
	// check if words that are not in word are not in word
	for (let char of currentInfomation.notInWord)
		if word.contains(char) {
			return false
		}
		
	// check words that have an unkown position are in word
	for (let char of currentInfomation.inWordUnkownPosition) {
		if word.contains(char[0]) {
			return false
		}
	}

	// check words that have a known positon are in the correct position  
	for (let char of currentInfomation.inWordKnownPosition){
		if word.charAt(char[1]) != char[0] {
			return false
		}
	}

	return true  
}

const possibleAnswers = () => {
	words = fs.readFile('possible_wordles.txt', 'utf8')
	lines = data.split('\n')
	possibleWordles = []

	for (let line of lines) {
		if (wordMatchesCurrentInfomation(line)) {
			possibleWordles.append(line)
		}
	}

	return possibleWordles
}

const getCurrentBestGuessForInfo = () => {
	// Iterate through list of remaining five letter words that are possible guesses
	// Give each letter that has not been guessed a score as to its frequncy in remaining words
	// give each orange letter a change of it being it a certain place in the string
	// give each words number based on how usful it will be.
	// Order words and give to 5 to user

	return 0
}

console.log(possibleAnswers)
