<script>
</script>

<style>
  #container {
    font-family: "Peddana";
    background: #38344d;
    color: #d6d6d6;
  }
  #container * {
    line-height: 70% !important;
  }

  #countdown-timer {
    width: 80vw;
    max-width: calc(100% - 1vw);
    height: 60vh;
    min-height: 600px;
    max-height: 700px;
    margin: auto;
  }
  #bg {
    background: url("/assets/dailyui/14_bg.png");
    background-size: cover;
  }
  .korean {
    font-size: 0.5em;
  }
  @media only screen and (max-width: 500px) {
    #countdown-timer {
      height: 700px;
    }
  }
</style>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Peddana&display=swap"
    rel="stylesheet"
  /><link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.15.1/css/brands.css"
    integrity="sha384-/feuykTegPRR7MxelAQ+2VUMibQwKyO6okSsWiblZAJhUSTF9QAVR0QLk6YwNURa"
    crossorigin="anonymous"
  />
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.15.1/css/fontawesome.css"
    integrity="sha384-ijEtygNrZDKunAWYDdV3wAZWvTHSrGhdUfImfngIba35nhQ03lSNgfTJAKaGFjk2"
    crossorigin="anonymous"
  />
</svelte:head>
<div id="container" class="p-10">
  <div id="countdown-timer" class="relative">
    <div
      id="bg"
      class="absolute top-0 left-0 w-full h-full md:opacity-100 opacity-70"
    />
    <main
      class="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-5 sm:p-10 md:p-20"
    >
      <header>
        <h1 class="text-4xl">ROSE <span class="korean">로제</span></h1>
        <h2 class="flex flex-col md:flex-row md:justify-between text-2xl">
          <span> SOLO ALBUM <span class="korean">솔로 앨범</span> </span>
          <span class="mt-3">18:00 KST . 23rd Match 2021</span>
        </h2>
      </header>
      <div
        id="timer"
        class="ml-auto grid grid-flow-col gap-5 text-5xl md:text-9xl"
      >
        <div class="segment flex flex-col items-center">
          <span>75</span>
          <small class="text-sm text-gray-400">days</small>
        </div>
        <div class="segment flex flex-col items-center">
          <span>10</span>
          <small class="text-sm text-gray-400">hours</small>
        </div>
        <div class="segment flex flex-col items-center">
          <span>43</span>
          <small class="text-sm text-gray-400">minutes</small>
        </div>
        <div class="segment flex flex-col items-center">
          <span>21</span>
          <small class="text-sm text-gray-400">seconds</small>
        </div>
      </div>
      <div id="socials" class="ml-auto grid grid-flow-col gap-3">
        <i class="fab fa-spotify" />
        <i class="fab fa-facebook" />
        <i class="fab fa-soundcloud" />
        <i class="fab fa-youtube" />
      </div>
    </main>
  </div>
</div>
