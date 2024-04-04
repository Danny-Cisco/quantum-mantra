<script lang="ts">
	import { onMount } from 'svelte';

	export let data; // Initial data loaded through load function
	let output = JSON.stringify(data.data); // Initialize output with the initial data

	onMount(() => {
		console.log(data);
	});

	async function handleFetchNewNumbers() {
		try {
			const response = await fetch('/api/fetchNumbers');
			if (!response.ok) {
				throw new Error(`Error: ${response.statusText}`);
			}
			const newData = await response.json();
			output = JSON.stringify(newData.data); // Update output with the new data
		} catch (error) {
			console.error('Error:', error);
			output = `Error: ${error.message}`; // Display error message
		}
	}
</script>

<div class="text-xl font-bold">Test Page</div>
<button on:click={handleFetchNewNumbers}>Fetch New Numbers</button>
<div>{output}</div>
