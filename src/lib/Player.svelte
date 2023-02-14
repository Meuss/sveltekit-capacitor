<script>
	import Save from '$lib/Save.svelte';
	/**
	 * @type {String}
	 */
	export let playerNumber;

	let counter = 0;
	function doThing() {
		counter = counter + 1;
	}
</script>

<h1 class="mb-4">Player {playerNumber}</h1>

<div class="row">
	<!-- <Save /> -->
	<div class="flex items-center justify-center gap-4">
		counter: <strong class="text-4xl text-torange">{counter}</strong>
	</div>
	<button
		class="mt-5 rounded bg-torange px-10 py-2 focus:ring focus:ring-violet-300 active:bg-violet-700"
		on:click={doThing}>asdf</button
	>
</div>

<style lang="postcss">
</style>
