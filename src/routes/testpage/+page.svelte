<script lang="ts">
	import { onMount } from 'svelte';

	export let data;
	let output = 'nope';

	onMount(async () => {
		console.log(data);
	});
</script>

<div class="text-xl font-bold">Test Page</div>
<div>{output}</div>
