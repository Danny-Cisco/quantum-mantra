<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { generateRandomWord } from '$lib/utils/wordGenerator';

	let word = generateRandomWord();

	function handleClick() {
		word = generateRandomWord();
	}

	let pageReady = false;

	// // Example usage within an async context
	// async function exampleUsage() {
	// 	const randomNumber = await getQuantumRandomNumber();
	// 	console.log('Quantum random number:', randomNumber);
	// }

	// exampleUsage();

	let number = 0;

	onMount(async () => {
		const response = await fetch('/api/generate-quantum-number', { method: 'POST' });
		if (response.ok) {
			const data = await response.json();
			number = data.number;
		} else {
			console.error('Failed to fetch quantum random number');
		}
		pageReady = true;
	});
</script>

<div class="text-6xl text-center font-bold uppercase">Quantum Mantra</div>
<div class="h-[50px]"></div>
{#if !pageReady}
	<div></div>
{:else}
	{#key word}
		<div
			class="text-8xl text-center font-bold text-secondary-500"
			in:fade={{ duration: 1000, delay: 0 }}
		>
			{word}
		</div>
	{/key}
	<div class="h-[100px]"></div>
	<button class="btn variant-filled-primary uppercase" on:click={handleClick}
		>Generate Mantra</button
	>
{/if}

<form method="post" action="/src/routes/+page.server.ts/?generateQuantumNumber">
	<button type="submit">Generate Quantum Number</button>
</form>

<h1>The Quantum Number is: {number}</h1>
