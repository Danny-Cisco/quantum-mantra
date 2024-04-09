// wordGenerator.ts

const commonConsonants = ['m', 'n', 'p', 't', 'k', 's', 'r', 'b', 'd', 'g', 'f'];
const rareConsonants = ['v', 'th', 'z', 'sh', 'ch', 'j', 'l', 'w', 'y'];
const commonVowels = ['a', 'e', 'i', 'o', 'u'];
const rareVowels = ['ai', 'ee', 'ei', 'yoo', 'oo'];
const commonEnds = ['n', 'dd', 'tt', 'ck', 'ss', 'rr', 'b'];
const rareEnds = [
	'sh',
	'th',
	'ch',
	'ng',
	'll',
	'y',
	'mm',
	'pp',
	'z',
	'j',
	'w',
	'ge',
	'gg',
	'ff',
	'v'
];

const startWithConsonantProb = 0.65;
const endWithConsonantProb = 0.2;
const useCommonConsonantProb = 0.7;
const useCommonVowelProb = 0.7;
const useCommonEndProb = 0.7;

export function generateRandomWord(randomNumbers: number[]) {
	const maxRandomValue = 65535;
	let randomIndex = 0;

	function nextRandom() {
		const value = randomNumbers[randomIndex++] / maxRandomValue;
		return value;
	}
	function getRandomElement(array) {
		return array[Math.floor(nextRandom() * array.length)];
	}

	function generateRandomSyllable() {
		const startWithConsonant = nextRandom() < startWithConsonantProb;
		let syllable = '';

		if (startWithConsonant) {
			const useCommonConsonant = nextRandom() < useCommonConsonantProb;
			syllable += getRandomElement(useCommonConsonant ? commonConsonants : rareConsonants);
		}

		const useCommonVowel = nextRandom() < useCommonVowelProb;
		syllable += getRandomElement(useCommonVowel ? commonVowels : rareVowels);

		if (!startWithConsonant) {
			const useCommonEnd = nextRandom() < useCommonEndProb;
			syllable += getRandomElement(useCommonEnd ? commonEnds : rareEnds);
		} else {
			const endWithConsonant = nextRandom() < endWithConsonantProb;
			if (endWithConsonant) {
				const useCommonEnd = nextRandom() < useCommonEndProb;
				syllable += getRandomElement(useCommonEnd ? commonEnds : rareEnds);
			} else {
				syllable += 'h';
			}
		}

		return syllable;
	}

	const numSyllables = Math.floor(nextRandom() * 2) + 2; // Adjust the random formula to fit your range and precision
	const syllables = [];

	for (let i = 0; i < numSyllables; i++) {
		syllables.push(generateRandomSyllable());
	}

	const emphasisIndex = Math.floor(nextRandom() * numSyllables);
	syllables[emphasisIndex] = syllables[emphasisIndex].toUpperCase();

	console.log('random index =', randomIndex);

	return syllables.join('-');
}
