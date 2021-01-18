<style>
  #container {
    font-family: "Montserrat";
    height: 700px;
  }
  #img-container {
    height: auto;
  }
  .btn {
    border-width: 1px;
  }
</style>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat&family=MuseoModerno:wght@100&display=swap"
    rel="stylesheet"
  />
</svelte:head>
<div
  id="container"
  class="bg-gray-200 flex flex-col items-center justify-center text-gray-900 p-10"
>
  <div id="img-container" class="relative w-full max-w-lg">
    <img src="/assets/dailyui/8_illustration.png" alt="" />
  </div>
  <p class="text-center">Oops - page not found!</p>
  <p class="text-center">Looks like you may have gotten lost.</p>
  <div class="grid gap-5 grid-flow-col mt-3">
    <button
      class="btn px-5 sm:px-10 py-1 border-gray-900 rounded-full hover:bg-gray-300"
      >Try again</button
    ><button
      class="btn px-5 sm:px-10 py-1 border-gray-900 rounded-full hover:bg-gray-300"
      >Go home</button
    >
  </div>
</div>
