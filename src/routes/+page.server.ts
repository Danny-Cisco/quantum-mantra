// // src/routes/some-page/+page.server.ts

// import { error, json } from '@sveltejs/kit';

// export async function load({ fetch }) {
// 	try {
// 		const number = await getQuantumRandomNumber(fetch);
// 		return { props: { number } };
// 	} catch (err) {
// 		throw error(500, 'Failed to fetch quantum random number');
// 	}
// }

// async function getQuantumRandomNumber(fetch): Promise<number> {
// 	const API_URL = import.meta.env.VITE_API_URL;
// 	const API_KEY = import.meta.env.VITE_API_KEY;

// 	try {
// 		const response = await fetch(`${API_URL}?length=1&type=uint8`, {
// 			method: 'POST', // Assuming it's a GET request; adjust if necessary
// 			headers: {
// 				'x-api-key': API_KEY
// 			}
// 		});

// 		if (!response.ok) {
// 			throw error(response.status, `API call failed with status: ${response.status}`);
// 		}

// 		const data = await response.json();
// 		return data.number;
// 	} catch (err) {
// 		console.error('Error fetching quantum random number:', err);
// 		throw error(500, 'Internal Server Error');
// 	}
// }
