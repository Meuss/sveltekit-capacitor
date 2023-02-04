<script>
	import '../tailwind.css';
	import StandBy from '$lib/StandBy.svelte';
	import StandByToggle from '$lib/StandByToggle.svelte';

	let sb = false;

	function setSb() {
		sb = true;
	}
	function setNotSb() {
		sb = false;
	}
</script>

<div class="relative">
	<slot />
	<StandByToggle on:yes={setSb} on:no={setNotSb} />
	<StandBy standby={sb} />
</div>
