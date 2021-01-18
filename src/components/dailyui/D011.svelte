<script>
  let showSuccess = false;
  let showError = false;
</script>

<style>
  #success,
  #error {
    font-family: "Dosis";
  }
</style>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Dosis&display=swap"
    rel="stylesheet"
  />
</svelte:head>
<div id="container" class="bg-gray-200 p-10">
  <button
    class="bg-green-200 p-3"
    on:click={() => {
      showSuccess = !showSuccess;
    }}>Show Success</button
  >
  <button
    class="bg-red-200 p-3"
    on:click={() => {
      showError = !showError;
    }}>Show Error</button
  >
  {#if showSuccess || showError}
    <div
      id="backdrop"
      class="fixed bg-black bg-opacity-50 w-full h-full top-0 left-0 flex justify-center items-center"
      on:click={() => {
        showSuccess = false;
        showError = false;
      }}
    >
      {#if showSuccess}
        <div
          id="success"
          class="h-96 w-80 m-4 max-w-full max-h-full rounded-2xl overflow-hidden shadow-2xl"
        >
          <div
            class="bg-green-200 h-1/2 w-full flex justify-center items-center"
          >
            <img
              src="assets/dailyui/11_success.png"
              alt="success"
              class="w-1/2"
            />
          </div>
          <div
            class="bg-gray-50 h-1/2 w-full flex flex-col justify-around items-center"
          >
            <h1 class="text-3xl">Congrats!</h1>
            <p class="text-lg">You have woken up Gudetama!</p>
            <button
              class="text-lg px-10 py-3 bg-yellow-400 text-gray-50 rounded-lg"
              >Continue</button
            >
          </div>
        </div>
      {/if}
      {#if showError}
        <div
          id="error"
          class="h-96 w-80 m-4 max-w-full max-h-full rounded-2xl overflow-hidden shadow-2xl"
        >
          <div class="bg-red-400 h-1/2 w-full flex justify-center items-center">
            <img src="assets/dailyui/11_error.png" alt="error" class="w-1/2" />
          </div>
          <div
            class="bg-gray-50 h-1/2 w-full flex flex-col justify-around items-center"
          >
            <h1 class="text-3xl">Uh oh!</h1>
            <p class="text-lg">Gudetama is confused!</p>
            <button
              class="text-lg px-10 py-3 bg-yellow-400 text-gray-50 rounded-lg"
              >Try again</button
            >
          </div>
        </div>
      {/if}
    </div>
  {/if}
</div>
