<script>
	import '../tailwind.css';
	import Nav from '$lib/Nav.svelte';
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

<div class="relative flex flex-col">
	<slot />
	<!-- <StandByToggle on:yes={setSb} on:no={setNotSb} />
	<StandBy standby={sb} /> -->
	<Nav />
</div>
