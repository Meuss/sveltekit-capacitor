<script>
	import { fade } from 'svelte/transition';
	import Pinquest from '$lib/Pinquest.svelte';

	export let standby = false;
</script>

{#if standby}
	<div
		transition:fade
		class="fixed top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center bg-tblack text-torange"
	>
		<Pinquest />
	</div>
{/if}
