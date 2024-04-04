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

function getRandomElement(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function generateRandomSyllable() {
	const startWithConsonant = Math.random() < startWithConsonantProb;
	let syllable = '';

	if (startWithConsonant) {
		const useCommonConsonant = Math.random() < useCommonConsonantProb;
		syllable += getRandomElement(useCommonConsonant ? commonConsonants : rareConsonants);
	}

	const useCommonVowel = Math.random() < useCommonVowelProb;
	syllable += getRandomElement(useCommonVowel ? commonVowels : rareVowels);

	if (!startWithConsonant) {
		// If the syllable started without a consonant, always end with a consonant
		const useCommonEnd = Math.random() < useCommonEndProb;
		syllable += getRandomElement(useCommonEnd ? commonEnds : rareEnds);
	} else {
		// If the syllable started with a consonant, use the original probability to end with a consonant
		const endWithConsonant = Math.random() < endWithConsonantProb;
		if (endWithConsonant) {
			const useCommonEnd = Math.random() < useCommonEndProb;
			syllable += getRandomElement(useCommonEnd ? commonEnds : rareEnds);
		} else {
			syllable += 'h';
		}
	}

	return syllable;
}

export function generateRandomWord() {
	const numSyllables = Math.floor(Math.random() * 3) + 1;
	const syllables = [];

	for (let i = 0; i < numSyllables; i++) {
		syllables.push(generateRandomSyllable());
	}

	const emphasisIndex = Math.floor(Math.random() * numSyllables);
	syllables[emphasisIndex] = syllables[emphasisIndex].toUpperCase();

	return syllables.join('-');
}
