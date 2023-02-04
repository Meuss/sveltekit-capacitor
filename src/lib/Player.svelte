<script>
	import Save from '$lib/Save.svelte';
	/**
	 * @type {String}
	 */
	export let playerNumber;
</script>

<h1 class="mb-4">Player {playerNumber}</h1>

<div class="row">
	<Save />
</div>

<style lang="postcss">
</style>
