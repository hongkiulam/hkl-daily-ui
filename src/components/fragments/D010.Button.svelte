<script>
  export let icon;
</script>

<button
  on:click|preventDefault|stopPropagation
  class="relative rounded-full flex justify-center items-center h-12 w-12"
  style="background:var(--color)">
  <svelte:component this={icon} size="24" />
  <slot />
</button>
