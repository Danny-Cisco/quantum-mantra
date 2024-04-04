// src/routes/api/fetchNumbers/+server.ts
import { VITE_API_URL, VITE_API_KEY } from '$env/static/private';

export async function GET(): Promise<Response> {
	const API_URL = VITE_API_URL;
	const API_KEY = VITE_API_KEY;
	const arrayLength = '4';
	const dataType = 'uint16';
	const blockSize = '2';

	const url = `${API_URL}?length=${arrayLength}&type=${dataType}&size=${blockSize}`;

	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: { 'x-api-key': API_KEY }
		});

		if (!response.ok) {
			// Use the Response constructor to return an error response
			return new Response(JSON.stringify({ error: `Error: ${response.statusText}` }), {
				status: response.status,
				headers: {
					'Content-Type': 'application/json'
				}
			});
		}

		const data = await response.json();
		// Return the fetched data using the Response constructor
		return new Response(JSON.stringify(data), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (error) {
		// Return server error response
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
}
