<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { generateRandomWord } from '$lib/utils/wordGenerator';
	import { handleFetchNewNumbers } from '$lib/utils/fetchNewNumbers';

	let numbers = [];
	let word = '';

	async function handleClick() {
		numbers = handleFetchNewNumbers();
		word = generateRandomWord(await numbers);
	}

	let pageReady = false;

	onMount(async () => {
		numbers = handleFetchNewNumbers();
		word = generateRandomWord(await numbers);
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
