import { generateRandomWord } from '$lib/utils/wordGenerator';

export async function handleFetchNewNumbers(): Promise<number[]> {
	try {
		const response = await fetch('/api/fetchNumbers');
		if (!response.ok) {
			throw new Error(`Error: ${response.statusText}`);
		}
		const newData = await response.json();

		// Since newData.data is already an array of numbers, we can use it directly
		const randomNumbers: number[] = newData.data;

		return randomNumbers;
	} catch (error) {
		console.error('Error:', error);
		// Return an empty array in case of error as a fallback
		return [];
	}
}
