<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`dailyui.json`)
			.then((r) => r.json())
			.then((challenges) => {
				return { challenges };
			});
	}
</script>

<script>
	export let challenges;
</script>

<style>
</style>

<svelte:head>
	<title>Daily UI</title>
</svelte:head>

<section class="w-full max-w-5xl m-auto px-5">
	<h1 class="my-5">Day:</h1>
	<div class="grid grid-flow-col gap-3 justify-start ">
		{#each challenges as challenge}
			<div>
				<a
					class="bg-green-200 rounded-md w-10 h-10 flex justify-center items-center"
					rel="prefetch"
					href="dailyui/{challenge.day}">{challenge.day}</a>
			</div>
		{/each}
	</div>
</section>
