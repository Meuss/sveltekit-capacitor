<script>
	import Save from '$lib/Save.svelte';
	import { onMount } from 'svelte';
	/**
	 * @type {String}
	 */
	export let playerNumber;

	let counter = 0;
	function doThing() {
		counter = counter + 1;
	}
	let maxTouchPoints = 0;
	onMount(() => {
		maxTouchPoints = navigator.maxTouchPoints;
	});
</script>

<h1 class="mb-4">Player {playerNumber}</h1>
<div>maxTouchPoints: {maxTouchPoints}</div>

<div class="row">
	<!-- <Save /> -->
	<div class="flex items-center justify-center gap-4">
		counter: <strong class="text-4xl text-torange">{counter}</strong>
	</div>
	<button class="mt-5 rounded bg-torange px-10 py-2 active:bg-violet-700" on:touchstart={doThing}>asdf</button>
</div>

<style lang="postcss">
</style>
