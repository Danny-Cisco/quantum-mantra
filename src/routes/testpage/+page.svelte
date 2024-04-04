<script lang="ts">
	import { handleFetchNewNumbers } from '$lib/utils/fetchNewNumbers';

	let word = '';

	function handleClick() {
		word = handleFetchNewNumbers();
	}
</script>

<div class="text-xl font-bold">Test Page</div>
<button on:click={handleclick}>Generate Mantra</button>
<div>{word}</div>
