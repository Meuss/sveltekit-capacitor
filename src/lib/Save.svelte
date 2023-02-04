<script>
	import Loading from './Loading.svelte';

	let name = '';
	let greetMsg = '';
	async function greet() {
		console.log('test');
	}
</script>

<div>
	{#if !greetMsg}
		<p class="mb-4">What's your name, olympian?</p>
		<div class="row mb-2">
			<input id="greet-input" placeholder="Enter your name..." bind:value={name} />
			<button on:click={greet}> Play </button>
		</div>
	{:else}
		<h2>{greetMsg}</h2>
		<div class="mt-4 flex justify-center">
			<Loading />
		</div>
	{/if}
</div>

<style>
	#greet-input {
		margin-right: 5px;
		color: #000;
	}
</style>
