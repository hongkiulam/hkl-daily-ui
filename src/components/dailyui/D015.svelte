<script>
  import { VolumeXIcon, Volume2Icon } from "svelte-feather-icons";
  let checked = false;
  let size = 5;
  let color = "#927777";

  $: {
    document
      .getElementById("container")
      ?.style.setProperty("--checkbox-base", size + "rem");
  }
  $: {
    document
      .getElementById("container")
      ?.style.setProperty("--checkbox-color", color);
  }
</script>

<style>
  #container {
    --checkbox-color: #927777;
    --checkbox-base: 5rem;
    --checkbox-height: var(--checkbox-base);
    --checkbox-width: calc(var(--checkbox-height) * 2.25);
    --checkbox-track-border-width: calc(var(--checkbox-height) * 0.1);
    --checkbox-thumb-height: calc(
      var(--checkbox-height) - (var(--checkbox-track-border-width) * 2) - 2px
    );
    --checkbox-thumb-width: var(--checkbox-thumb-height);
  }
  .toggle {
    font-size: var(--checkbox-base);
    height: var(--checkbox-height);
    width: var(--checkbox-width);
  }
  .toggle label {
    border-width: var(--checkbox-track-border-width);
    border-color: var(--checkbox-color);
  }
  #checkbox:checked + label .thumb {
    left: 100%;
    transform: translateX(calc(-100% - 2px));
  }
  .thumb {
    height: var(--checkbox-thumb-height);
    width: var(--checkbox-thumb-width);
    margin: 1px;
    background: var(--checkbox-color);
  }
  .wave rect {
    fill: var(--checkbox-color);
    opacity: 0;
    animation: fade-in 0.3s ease forwards;
  }
  @keyframes fade-in {
    to {
      opacity: 1;
    }
  }
</style>

<div id="container" class="p-10 bg-gray-600 flex justify-center items-center">
  <div
    id="canvas"
    class="p-10 bg-gray-400 flex flex-col justify-around items-center rounded-3xl"
  >
    <label>
      Size : {size}
      <input type="range" max="6" min="1" step="0.5" bind:value={size} /></label
    >
    <label>
      Color : {color}
      <input type="color" bind:value={color} /></label
    >
    <div class="toggle cursor-pointer">
      <input type="checkbox" id="checkbox" class="hidden" bind:checked />
      <label
        for="checkbox"
        class="block relative h-full w-full rounded-full bg-gray-50">
        <div
          class="thumb cursor-pointer shadow-md text-gray-50 absolute top-0 left-0 flex justify-center items-center rounded-full transition-all"
        >
          {#if checked}<Volume2Icon size="0.5x" />
          {:else}<VolumeXIcon size="0.5x" />{/if}
        </div>
        <div class="track w-full h-full flex items-center">
          <svg
            width="158"
            height="37"
            viewBox={checked ? "0 0 158 37" : "0 0 158 1"}
            class="wave w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            {#if checked}
              <rect y="18" width="2" height="1" />
              <rect x="64" y="5" width="2" height="27" />
              <rect x="68" y="12" width="2" height="13" />
              <rect x="72" y="14" width="2" height="9" />
              <rect x="76" y="16" width="2" height="5" />
              <rect x="80" y="17" width="2" height="3" />
              <rect x="84" y="18" width="2" height="1" />
              <rect x="88" y="16" width="2" height="5" />
              <rect x="92" y="14" width="2" height="9" />
              <rect x="144" y="16" width="2" height="5" />
              <rect x="148" y="17" width="2" height="3" />
              <rect x="152" y="18" width="2" height="1" />
              <rect x="156" y="16" width="2" height="5" />
              <rect x="96" y="11" width="2" height="15" />
              <rect x="4" y="17" width="2" height="3" />
              <rect x="8" y="16" width="2" height="5" />
              <rect x="12" y="17" width="2" height="3" />
              <rect x="16" y="14" width="2" height="9" />
              <rect x="20" y="13" width="2" height="11" />
              <rect x="24" y="11" width="2" height="15" />
              <rect x="28" y="16" width="2" height="5" />
              <rect x="32" y="17" width="2" height="3" />
              <rect x="36" y="15" width="2" height="7" />
              <rect x="40" y="13" width="2" height="11" />
              <rect x="44" y="9" width="2" height="19" />
              <rect x="48" y="5" width="2" height="27" />
              <rect x="52" y="7" width="2" height="23" />
              <rect x="56" width="2" height="37" />
              <rect x="60" y="7" width="2" height="23" />
              <rect x="108" y="5" width="2" height="27" />
              <rect x="112" y="12" width="2" height="13" />
              <rect x="116" y="14" width="2" height="9" />
              <rect x="120" y="16" width="2" height="5" />
              <rect x="124" y="17" width="2" height="3" />
              <rect x="128" y="18" width="2" height="1" />
              <rect x="132" y="16" width="2" height="5" />
              <rect x="136" y="14" width="2" height="9" />
              <rect x="140" y="11" width="2" height="15" />
              <rect x="100" width="2" height="37" />
              <rect x="104" y="7" width="2" height="23" />
            {:else}
              <rect x="60" width="2" height="1" />
              <rect x="124" width="2" height="1" />
              <rect x="128" width="2" height="1" />
              <rect x="132" width="2" height="1" />
              <rect x="136" width="2" height="1" />
              <rect x="140" width="2" height="1" />
              <rect x="144" width="2" height="1" />
              <rect x="148" width="2" height="1" />
              <rect x="152" width="2" height="1" />
              <rect x="156" width="2" height="1" />
              <rect x="64" width="2" height="1" />
              <rect x="68" width="2" height="1" />
              <rect x="72" width="2" height="1" />
              <rect width="2" height="1" />
              <rect x="4" width="2" height="1" />
              <rect x="8" width="2" height="1" />
              <rect x="76" width="2" height="1" />
              <rect x="80" width="2" height="1" />
              <rect x="84" width="2" height="1" />
              <rect x="88" width="2" height="1" />
              <rect x="92" width="2" height="1" />
              <rect x="96" width="2" height="1" />
              <rect x="100" width="2" height="1" />
              <rect x="104" width="2" height="1" />
              <rect x="108" width="2" height="1" />
              <rect x="112" width="2" height="1" />
              <rect x="116" width="2" height="1" />
              <rect x="8" width="2" height="1" />
              <rect x="12" width="2" height="1" />
              <rect x="16" width="2" height="1" />
              <rect x="20" width="2" height="1" />
              <rect x="24" width="2" height="1" />
              <rect x="28" width="2" height="1" />
              <rect x="32" width="2" height="1" />
              <rect x="36" width="2" height="1" />
              <rect x="40" width="2" height="1" />
              <rect x="44" width="2" height="1" />
              <rect x="48" width="2" height="1" />
              <rect x="52" width="2" height="1" />
              <rect x="56" width="2" height="1" />
              <rect x="60" width="2" height="1" />
              <rect x="120" width="2" height="1" />
            {/if}
          </svg>
        </div>
      </label>
    </div>
    <p>Checked: {checked}</p>
  </div>
</div>
