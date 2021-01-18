<script>
  import { Share2Icon } from "svelte-feather-icons";
  import Button from "../fragments/D010.Button.svelte";
  import Tooltip from "../fragments/D010.Tooltip.svelte";
  import { fly } from "svelte/transition";

  let show = false;
  let color = "#cfcfcf";
</script>

<style>
  .show {
    transform: translateY(calc(-100% - 10px));
  }
</style>

<div id="container" class="bg-gray-200 p-10" style="--color:{color}">
  <label>Select Colour<input type="color" bind:value={color} /></label>
  <Button
    icon={Share2Icon}
    on:click={() => {
      show = !show;
    }}
  >
    {#if show}
      <div
        class="tooltip absolute left-0 top-0"
        class:show
        transition:fly={{ y: 10, duration: 100 }}
      >
        <Tooltip />
      </div>
    {/if}
  </Button>
</div>
