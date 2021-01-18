<script>
  import { SunIcon, MoonIcon, SettingsIcon } from "svelte-feather-icons";
  let isDarkMode = true;
  $: colors = isDarkMode
    ? {
        yellow: "#FFDE9E",
        blue: "#9BF9FF",
        green: "#82FF8E",
      }
    : { yellow: "#CDA455", blue: "#599296", green: "#3A7D41" };

  const sup = (val) => `<sup>${val}</sup>`;
  const sub = (val) => `<sub>${val}</sub>`;
  const advancedButtons = [
    `x${sup(3)}`,
    `x${sup(-1)}`,
    `x${sup(-2)}`,
    `x${sup(2)}`,
    `log${sub("(x)")}`,
    `log`,
    `ln`,
    `&Sqrt;`,
    `sin`,
    `cos`,
    `tan`,
    `${sup("x")}&frasl;${sub("x")}`,
    `(`,
    `)`,
    `S<>D`,
    `&pi;`,
  ];
  const numpadButtons = [
    `x10${sup("x")}`,
    { label: "DEL", color: "yellow" },
    { label: "C", color: "yellow" },
    { label: "/", color: "blue" },
    `7`,
    `8`,
    `9`,
    { label: "*", color: "blue" },
    `4`,
    `5`,
    `6`,
    { label: "-", color: "blue" },

    `1`,
    `2`,
    `3`,
    { label: "+", color: "blue" },
    `0`,
    `.`,
    `Ans`,
    { label: "=", color: "green" },
  ];
</script>

<style>
  #container {
    font-family: "Nunito", sans-serif;
    font-weight: 300;
  }
  .phone-screen {
    max-width: 320px;
    width: 100%;
    height: 650px;
  }
  .bg-dark {
    background-color: #2d2e3c;
  }
  .bg-display-dark {
    background-color: rgba(223, 223, 223, 0.15);
  }
  .bg-display-light {
    background-color: rgba(223, 223, 223, 0.55);
  }
</style>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap"
    rel="stylesheet" />
</svelte:head>
<div id="container" class="bg-indigo-200 p-5">
  <div
    id="calculator"
    class="flex flex-col justify-between phone-screen
    m-auto p-5 rounded-3xl shadow-2xl transition-all text-lg
    {isDarkMode ? 'bg-dark text-gray-200' : 'bg-gray-100 text-gray-900'}">
    <div id="topbar" class="flex justify-between">
      <button
        on:click={() => {
          isDarkMode = !isDarkMode;
        }}>
        {#if isDarkMode}
          <SunIcon size="24" />
        {:else}
          <MoonIcon size="24" />
        {/if}
      </button>
      <SettingsIcon size="24" />
    </div>
    <div
      id="display"
      class="{isDarkMode ? 'bg-display-dark' : 'bg-display-light'} rounded-xl p-5  text-2xl">
      <p id="display__formula" class="text-left">124 + 38 * 2</p>
      <p id="display__solution" class="text-right">200</p>
    </div>
    <div
      id="advanced"
      class="grid grid-cols-4 {isDarkMode ? 'text-gray-500' : ''}">
      {#each advancedButtons as btn}
        <button class="p-2">{@html btn}</button>
      {/each}
    </div>
    <div id="numpad" class="grid grid-cols-4">
      {#each numpadButtons as btn}
        {#if typeof btn === 'string'}
          <button class="p-2">{@html btn}</button>
        {:else}
          <button
            class="p-2"
            style="color:{colors[btn.color]}">{@html btn.label}</button>
        {/if}
      {/each}
    </div>
  </div>
</div>
