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
	import components from "../../components/dailyui";

	export let challenge;
	let Component;
	$: (async () => {
		if (components[challenge.slug]) {
			Component = (await components[challenge.slug]()).default;
		} else {
			Component = undefined;
		}
	})();

	$: paddedNum = challenge.slug.padStart(3, "0");
</script>

<style>
</style>

<svelte:head>
	<title>{challenge.title}</title>
</svelte:head>

<div class="max-w-5xl w-full m-auto poppins">
	<h1 class="text-xl mt-5">{paddedNum} - {challenge.title}</h1>
	<div class="mt-5">
		<a
			class="button"
			href="/dailyui/{Number(challenge.slug) - 1}"
			style={challenge.slug === '1' ? 'pointer-events:none;opacity:0.5' : ''}>back</a>
		<a
			class="button"
			href="/dailyui/{Number(challenge.slug) + 1}"
			style={challenge.slug === '100' ? 'pointer-events:none;opacity:0.5' : ''}>next</a>
	</div>
	<h1 class="text-lg mt-5">UI Design (Figma)</h1>
	<img src={challenge.behance} alt="ui" />
	<h1 class="text-lg mt-5">HTML, CSS</h1>

	{#if Component}
		<svelte:component this={Component} />
	{:else}TODO{/if}
	<div class="py-5">
		<a
			class="button"
			href="/dailyui/{Number(challenge.slug) - 1}"
			style={challenge.slug === '1' ? 'pointer-events:none;opacity:0.5' : ''}>back</a>
		<a
			class="button"
			href="/dailyui/{Number(challenge.slug) + 1}"
			style={challenge.slug === '100' ? 'pointer-events:none;opacity:0.5' : ''}>next</a>
	</div>
</div>
