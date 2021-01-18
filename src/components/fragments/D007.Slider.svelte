<script>
  export let color = false;
  export let darkMode = false;
  export let label;
  export let value = color ? "180" : "50";

  $: console.log(value);
</script>

<style>
  .color-bg {
    background: linear-gradient(
      90deg,
      #ff2400,
      #e81d1d,
      #e8b71d,
      #e3e81d,
      #1de840,
      #1ddde8,
      #2b1de8,
      #dd00f3,
      #dd00f3,
      #ff2400
    );
  }
  .gradient-bg {
    background: linear-gradient(
      90deg,
      rgba(85, 85, 85, 0.17),
      rgba(85, 85, 85, 100)
    );
  }
  .setting-group_option {
    font-size: 0.7em;
  }

  /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background: #f5f5f5;
    border: 2px solid rgb(38, 38, 38);
    box-shadow: 0px 0px 0px 2px #f5f5f5;
    cursor: pointer; /* Cursor on hover */
  }

  .slider::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background: #f5f5f5;
    border: 2px solid rgb(38, 38, 38);
    box-shadow: 0px 0px 0px 2px #f5f5f5;
    cursor: pointer; /* Cursor on hover */
  }
  /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
  .slider-dark::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background: rgb(38, 38, 38);
    border: 2px solid #f5f5f5;
    box-shadow: 0px 0px 0px 2px rgb(38, 38, 38);
    cursor: pointer; /* Cursor on hover */
  }

  .slider-dark::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background: rgb(38, 38, 38);
    border: 2px solid #f5f5f5;
    box-shadow: 0px 0px 0px 2px rgb(38, 38, 38);
    cursor: pointer; /* Cursor on hover */
  }
</style>

<div class="setting-group_option pt-2">
  <div id="label" class="flex justify-between">
    <span>{label}</span>
    <data>{value}</data>
  </div>
  <div class="w-full">
    <input
      type="range"
      class="{darkMode ? 'slider-dark' : 'slider'} appearance-none w-full h-0.5 {color ? 'color-bg' : 'gradient-bg'} outline-none"
      max={color ? '360' : '100'}
      bind:value />
  </div>
</div>
