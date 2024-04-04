// create a svelte load function that loads the random numbers found at https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint16&size=6

// Import environment variables securely
import { VITE_API_URL, VITE_API_KEY } from '$env/static/private';

// The load function, which SvelteKit calls before rendering the page
export async function load({ fetch }) {
	const API_KEY = VITE_API_KEY; // Your actual API key
	const API_URL = VITE_API_URL; // Your actual API URL
	const arrayLength = '4'; // Set the desired array length
	const dataType = 'uint16'; // Set the desired data type
	const blockSize = '2'; // Set the desired block size

	const url = `${API_URL}?length=${arrayLength}&type=${dataType}&size=${blockSize}`;

	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'x-api-key': API_KEY
			}
		});

		if (!response.ok) {
			throw new Error(`Error: ${response.statusText}`);
		}

		const data = await response.json();

		// Return the fetched data as props to the page
		return {
			props: {
				data // This will be accessible in the page component
			}
		};
	} catch (error) {
		console.error('Error:', error);
		return {
			props: {
				error: error.message
			}
		};
	}
}
