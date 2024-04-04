// src/routes/api/generateQuantumNumber.ts

import { error, json } from '@sveltejs/kit';

export async function POST() {
	try {
		const number = await getQuantumRandomNumber();
		return json({ number });
	} catch (err) {
		return error(500, 'Failed to fetch quantum random number');
	}
}

async function getQuantumRandomNumber(): Promise<number> {
	const API_URL = import.meta.env.VITE_API_URL;
	const API_KEY = import.meta.env.VITE_API_KEY;

	try {
		const response = await fetch(`${API_URL}?length=1&type=uint8`, {
			method: 'GET',
			headers: {
				'x-api-key': API_KEY
			}
		});

		if (!response.ok) {
			throw error(response.status, `API call failed with status: ${response.status}`);
		}

		const data = await response.json();
		return data.number; // Make sure this matches the actual key in your response JSON
	} catch (err) {
		console.error('Error fetching quantum random number:', err);
		throw error(500, 'Internal Server Error');
	}
}
