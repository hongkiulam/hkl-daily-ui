<script>
  export let isDarkMode;
  let totalTime = 206;
  let currentTime = 10;
  const formatTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const seconds = (sec - minutes * 60).toString().padEnd(2, "0");
    return `${minutes}:${seconds}`;
  };
</script>

<style>
  .slider-group {
    font-size: 0.6em;
  }

  /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 5px;
    height: 16px;
    background: var(--primary);
    box-shadow: var(--shadow-up);
    transform: translateY(-3px);
    cursor: pointer; /* Cursor on hover */
  }

  .slider::-moz-range-thumb {
    width: 16px;
    height: 16px;
    background: rgb(38, 38, 38);
    border: 2px solid #f5f5f5;
    box-shadow: 0px 0px 0px 2px rgb(38, 38, 38);
    cursor: pointer; /* Cursor on hover */
  }
</style>

<div class="slider-group pt-2">
  <div class="w-full">
    <input
      type="range"
      class="slider appearance-none w-full h-1 outline-none {isDarkMode
        ? 'bg-gray-700'
        : 'bg-gray-200'}"
      max={totalTime}
      bind:value={currentTime}
    />
  </div>
  <div id="label" class="flex justify-between mt-2">
    <data value={currentTime}>{formatTime(currentTime)}</data>
    <data value={totalTime}>{formatTime(totalTime)}</data>
  </div>
</div>
