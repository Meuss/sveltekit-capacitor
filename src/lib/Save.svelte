<script>
	import Loading from './Loading.svelte';
	import { Filesystem, Directory } from '@capacitor/filesystem';

	let name = '';
	let greetMsg = '';
	async function greet() {
		writeToFile('pinquest.txt', name);
	}

	async function writeToFile(fileName, content) {
		try {
			const file = await Filesystem.writeFile({
				path: 'Download/' + fileName,
				data: content,
				directory: Directory.External
			});
			console.log('File written', file);
		} catch (e) {
			console.error('Unable to write file', e);
		}
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
