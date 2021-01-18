<script>
  import {
    SunIcon,
    MoonIcon,
    ArrowLeftIcon,
    ListIcon,
    RepeatIcon,
    ShuffleIcon,
    HeartIcon,
    SkipBackIcon,
    PlayIcon,
    SkipForwardIcon,
  } from "svelte-feather-icons";
  import Slider from "../fragments/D009.Slider.svelte";
  let isDarkMode = true;

  let onRepeat = false;
  let isShuffle = false;
  let isSaved = false;
</script>

<style>
  #container {
    --primary: #5f5c7c;
    --primary-dark: #444259;
    --shadow-up: 0px 6px 0px #cfcfcf;
    --shadow-down: 0px 3px 0px #cfcfcf;

    font-family: "Titillium Web";
  }
  .shadow {
    box-shadow: var(--shadow-up);
    outline: none;
  }
  .shadow:active {
    box-shadow: var(--shadow-down);
    transform: translateY(3px);
    outline: none;
  }
  .shadow-down {
    box-shadow: var(--shadow-down);
    transform: translateY(3px);
    outline: none;
    color: var(--primary);
  }
  .bg-primary {
    background: var(--primary);
  }
  .bg-primary-dark {
    background: var(--primary-dark);
  }
  .phone-screen {
    max-width: 320px;
    width: 100%;
    min-height: 568px;
  }
</style>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap"
    rel="stylesheet"
  />
</svelte:head>
<div id="container" class="bg-primary-dark p-5">
  <div
    id="music-player"
    class="grid grid-flow-row gap-3 phone-screen
    m-auto p-5 shadow-2xl transition-all
    {isDarkMode
      ? 'bg-gray-800 text-gray-100'
      : 'bg-gray-100 text-gray-900'}"
  >
    <div id="topbar" class="flex justify-between items-center">
      <ArrowLeftIcon size="20" />
      <button
        on:click={() => {
          isDarkMode = !isDarkMode;
        }}>
        {#if isDarkMode}
          <SunIcon size="20" />
        {:else}
          <MoonIcon size="20" />
        {/if}
      </button>
    </div>
    <div id="title">
      <h1 class="text-3xl">HANN (Alone)</h1>
      <h2 class="text-lg">(G)I-DLE</h2>
    </div>
    <div id="cover">
      <img src="assets/dailyui/9_cover.png" alt="cover" />
    </div>
    <Slider {isDarkMode} />
    <div id="controls">
      <div id="sub-controls" class="grid gap-5 grid-flow-col">
        <button
          class="flex justify-center items-center h-12 shadow transition-all {isDarkMode
            ? 'bg-gray-700'
            : 'bg-gray-200'}"><ListIcon size="20" /></button
        >
        <button
          class="flex justify-center items-center h-12 shadow transition-all {isDarkMode
            ? 'bg-gray-700'
            : 'bg-gray-200'} {onRepeat ? 'shadow-down' : ''}"
          on:click={() => {
            onRepeat = !onRepeat;
          }}><RepeatIcon size="20" /></button
        >
        <button
          class="flex justify-center items-center h-12 shadow transition-all {isDarkMode
            ? 'bg-gray-700'
            : 'bg-gray-200'} {isShuffle ? 'shadow-down' : ''}"
          on:click={() => {
            isShuffle = !isShuffle;
          }}><ShuffleIcon size="20" /></button
        ><button
          class="flex justify-center items-center h-12 shadow transition-all {isDarkMode
            ? 'bg-gray-700'
            : 'bg-gray-200'} {isSaved ? 'shadow-down' : ''}"
          on:click={() => {
            isSaved = !isSaved;
          }}><HeartIcon size="20" /></button
        >
      </div>
      <div id="playback-controls" class="grid gap-5 grid-flow-col mt-5 mb-3">
        <button
          class="flex justify-center items-center h-12 shadow transition-all {isDarkMode
            ? 'bg-gray-700'
            : 'bg-gray-200'}"><SkipBackIcon size="20" /></button
        ><button
          class="flex justify-center items-center h-12 shadow transition-all bg-primary text-gray-100"
          ><PlayIcon size="20" /></button
        ><button
          class="flex justify-center items-center h-12 shadow transition-all {isDarkMode
            ? 'bg-gray-700'
            : 'bg-gray-200'}"><SkipForwardIcon size="20" /></button
        >
      </div>
    </div>
  </div>
</div>
