<script>
  import { SunIcon, MoonIcon, ArrowLeftIcon } from "svelte-feather-icons";
  import Slider from "../fragments/D007.Slider.svelte";
  let isDarkMode = true;

  let bg = {
    h: "22",
    s: "100",
    l: "40",
    o: "100",
  };
  let text = {
    h: "209",
    s: "92",
    l: "29",
    o: "100",
  };
</script>

<style>
  #container {
    font-family: "Noto Sans";
  }
  .phone-screen {
    max-width: 320px;
    width: 100%;
    min-height: 568px;
  }
  .wallpaper-upload-group {
    font-size: 0.7em;
  }
</style>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap"
    rel="stylesheet"
  />
</svelte:head>
<div id="container" class="bg-yellow-200 p-5">
  <div
    id="settings"
    class="flex flex-col phone-screen
    m-auto p-5 shadow-2xl transition-all
    {isDarkMode
      ? 'bg-gray-800 text-gray-100'
      : 'bg-gray-100 text-gray-900'}"
  >
    <div id="topbar" class="flex justify-between items-center">
      <ArrowLeftIcon size="16" />
      <h1>Customise Background</h1>
      <button
        on:click={() => {
          isDarkMode = !isDarkMode;
        }}>
        {#if isDarkMode}
          <SunIcon size="16" />
        {:else}
          <MoonIcon size="16" />
        {/if}
      </button>
    </div>
    <div class="setting-group pt-5">
      <div
        class="setting-group_header text-xs flex justify-between items-center"
      >
        <span>Background/ Mask</span>
        <div
          class="w-3 h-3"
          style="background-color: hsla({bg.h}deg,{bg.s}%,{bg.l}%,{bg.o / 100})"
        />
      </div>
      <Slider label="Color" darkMode={isDarkMode} bind:value={bg.h} color />
      <Slider label="Saturation" darkMode={isDarkMode} bind:value={bg.s} />
      <Slider label="Lightness" darkMode={isDarkMode} bind:value={bg.l} />
      <Slider label="Opacity" darkMode={isDarkMode} bind:value={bg.o} />
    </div>
    <div class="setting-group pt-5">
      <div
        class="setting-group_header text-xs flex justify-between items-center"
      >
        <span>Text</span>
        <div
          class="w-3 h-3"
          style="background-color: hsla({text.h}deg,{text.s}%,{text.l}%,{text.o /
            100})"
        />
      </div>
      <Slider label="Color" darkMode={isDarkMode} bind:value={text.h} color />
      <Slider label="Saturation" darkMode={isDarkMode} bind:value={text.s} />
      <Slider label="Lightness" darkMode={isDarkMode} bind:value={text.l} />
      <Slider label="Opacity" darkMode={isDarkMode} bind:value={text.o} />
    </div>
    <div class="setting-group pt-5">
      <div
        class="setting-group_header text-xs flex justify-between items-center"
      >
        <span>Wallpaper</span>
      </div>
      <div
        class="wallpaper-upload-group flex justify-between items-center pt-2"
      >
        <input id="wallpaper-upload" type="file" />
        <!-- <label for="wallpaper-upload">None</label> -->
      </div>
    </div>
    <div id="footer" class="mt-auto text-xs flex justify-between items-center">
      <button
        class="{isDarkMode
          ? 'bg-gray-700'
          : 'bg-gray-300'} px-3 py-2 rounded-sm">Hold to Preview</button
      >
      <button class="bg-yellow-600 px-3 py-2 rounded-sm">Apply Changes</button>
    </div>
  </div>
</div>
