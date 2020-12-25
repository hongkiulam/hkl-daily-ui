<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`dailyui/${params.slug}.json`);
		const data = await res.json();
		if (res.status === 200) {
			return { challenge: data };
		} else {
			this.error(res.status, "This challenge has not been done yet");
		}
	}
</script>

<script>
	import { onMount } from "svelte";
	import components from "../../components/dailyui";

	export let challenge;
	let Component;
	onMount(async () => {
		if (components[challenge.slug]) {
			Component = (await components[challenge.slug]()).default;
		}
	});

	$: paddedNum = challenge.slug.padStart(3, "0");
</script>

<style>
</style>

<svelte:head>
	<title>{challenge.title}</title>
</svelte:head>

<div class="max-w-5xl w-full m-auto poppins text-center">
	<h1 class="text-lg ">{paddedNum} - {challenge.title}</h1>
	<h1 class="text-md mt-5">UI Design (Figma)</h1>
	<img src={challenge.behance} alt="ui" />
	<h1 class="text-md mt-5">HTML, CSS</h1>

	{#if Component}
		<svelte:component this={Component} />
	{:else}TODO{/if}
	<div>
		<a
			href="/dailyui/{Number(challenge.slug) - 1}"
			style={challenge.slug === '1' ? 'pointer-events:none;opacity:0.5' : ''}>back</a>
		<a
			href="/dailyui/{Number(challenge.slug) + 1}"
			style={challenge.slug === '100' ? 'pointer-events:none;opacity:0.5' : ''}>next</a>
	</div>
</div>
