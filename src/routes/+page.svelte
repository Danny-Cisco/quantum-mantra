<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';

	import { generateRandomWord } from '$lib/utils/wordGenerator';
	import { handleFetchNewNumbers } from '$lib/utils/fetchNewNumbers';

	let numbers = [];
	let word = '';

	let lottiePlayer: LottiePlayer;

	async function handleClick() {
		lottiePlayer.stop();
		word = '';

		setTimeout(() => {
			lottiePlayer.play();
		}, 1000);
		numbers = await handleFetchNewNumbers();
		setTimeout(() => {
			word = generateRandomWord(numbers);
		}, 2000);
	}

	let pageReady = false;

	onMount(async () => {
		pageReady = true;
		numbers = await handleFetchNewNumbers();
		setTimeout(() => {
			word = generateRandomWord(numbers);
		}, 2000);
	});
</script>

<div class="flex flex-col h-full items-center relative">
	<!-- <div class="text-6xl text-center font-bold uppercase">Quantum Mantra</div> -->
	{#if !pageReady}
		<div></div>
	{:else}
		{#key word}
			<div class="flex flex-col h-full justify-center items-center">
				<div
					class="text-8xl text-center font-bold text-secondary-500"
					in:fade={{ duration: 1000, delay: 0 }}
				>
					{word}
				</div>
			</div>
		{/key}
		<div class="flex-grow"></div>
		<button class="btn variant-filled-primary uppercase" on:click={handleClick}
			>Generate Mantra</button
		>
		<div class="h-[24px]"></div>

		<div
			class="absolute w-full h-full top-0 left-0 z-[-1] flex flex-col justify-center items-center"
		>
			<LottiePlayer
				bind:this={lottiePlayer}
				src="/lottie/fancy-loader.json"
				height={900}
				width={900}
				autoplay={true}
				loop={false}
			/>
		</div>
	{/if}
</div>
