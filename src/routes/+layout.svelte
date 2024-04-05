<script lang="ts">
	// Your custom Skeleton theme:
	import '../modernCyan.postcss';

	// This contains the bulk of Skeletons required styles:
	// import '@skeletonlabs/skeleton/styles/skeleton.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase text-primary-500">Quantum Mantra</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-outline-primary"
					href="https://dannycisco.com"
					target="_blank"
					rel="noreferrer"
				>
					by Danny Cisco
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<div class="flex flex-col items-center">
		<slot />
	</div>

	<!-- footer -->
	<svelte:fragment slot="footer">
		<div class="flex flex-col items-center space-y-2">
			<p class="text-sm text-gray-500">&copy; 2024 Danny Cisco. All rights reserved.</p>
			<div>
				<a
					href="https://qrng.anu.edu.au/"
					class="text-sm text-gray-500 text-center hover:text-gray-400"
					target="_blank"
					rel="noopener noreferrer"
				>
					⚡️ Powered by QRNG Quantum Random Numbers (ANU)</a
				>
			</div>
		</div>
	</svelte:fragment>
</AppShell>
