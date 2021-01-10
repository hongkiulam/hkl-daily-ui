<script>
  import {
    SearchIcon,
    UserIcon,
    ShoppingCartIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
  } from "svelte-feather-icons";
</script>

<style>
  #container {
    font-family: Ubuntu;
  }
  .bg-coral {
    background-color: #fb9980;
  }
  #navbar_links li {
    cursor: pointer;
  }
  #hero_content__body {
    width: 100%;
    max-width: 300px;
  }
  #hero_content__img {
    width: calc(100% - 400px);
  }
</style>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap"
    rel="stylesheet" />
</svelte:head>
<div id="container" class="bg-coral p-14">
  <div id="frame" class="w-full h-full m-auto">
    <div id="navbar" class="bg-gray-300 flex justify-between p-4">
      <div id="left" class="flex owlx-1">
        <icon
          class="w-6 h-6 flex justify-center items-center rounded-full border-gray-900 border-2">
          K
        </icon><span>Keychron</span>
      </div>
      <div id="right">
        <ul id="navbar_links" class="flex owlx-1">
          <div class="sm:contents hidden owlx-1">
            <li>Keyboards</li>
            <li>Accessories</li>
            <li>Switches</li>
          </div>
          <li>
            <UserIcon size="24" />
          </li>
          <li>
            <SearchIcon size="24" />
          </li>
          <li>
            <ShoppingCartIcon size="24" />
          </li>
        </ul>
      </div>
    </div>
    <div id="hero" class="bg-gray-900 p-5 sm:p-20 relative">
      <div
        id="hero_content__img"
        class="h-full pointer-events-none absolute right-0 top-0 overflow-x-hidden hidden sm:block">
        <img
          class="h-full py-5 sm:py-20 max-w-none box-border ml-auto"
          src="assets/dailyui/3_hero.png"
          alt="hero" />
      </div>
      <div id="hero_content" class="text-gray-300 w-full h-full">
        <div id="hero_content__body">
          <h1 class="text-5xl">Keychron K1</h1>
          <h2 class="text-2xl">Wireless Mechanical Keyboard</h2>
          <p>
            A tenkeyless (87-key) ultra-slim wireless mechanical keyboard built
            for high productivity and a great tactile typing experience.
          </p>
          <h2 class="text-2xl">From $69.99</h2>
        </div>
        <div
          id="actions"
          class="text-gray-900 mt-10 flex justify-between items-end">
          <div id="cta" class="flex">
            <button class="bg-gray-300 px-5 py-3 flex items-center">View more
              <ArrowRightIcon size="16" /></button>
            <button class="bg-coral px-5 py-3 flex ml-4 items-center">Buy now
              <ShoppingCartIcon size="16" /></button>
          </div>
          <div id="arrows" class="hidden sm:block">
            <button class="bg-gray-300 p-1"><ArrowLeftIcon size="16" /></button>
            <button class="bg-gray-300 p-1 ml-4"><ArrowRightIcon
                size="16" /></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
