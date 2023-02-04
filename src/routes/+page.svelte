<script>
	import Player from '$lib/Player.svelte';
</script>

<div class="flex h-screen flex-col justify-between">
	<div class="flex flex-1 rotate-180 flex-col justify-center p-4 text-center">
		<Player playerNumber="1" />
	</div>
	<div class="h-1 w-full bg-torange" />
	<div class="flex flex-1 flex-col justify-center p-4 text-center">
		<Player playerNumber="2" />
	</div>
</div>

<style lang="postcss">
</style>
