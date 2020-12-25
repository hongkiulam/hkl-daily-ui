<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }
  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav class="h-10 text-xs sm:text-base">
  <div class="max-w-5xl w-full flex items-center h-full m-auto">
    {#if segment !== undefined}
      <a href="/dailyui" class="p-0">{'back | '}</a>
    {:else}<a href="/" class="p-0">{'home | '}</a>{/if}
    <p class="poppins">Daily UI Challenge by Haydon Lam</p>
  </div>
</nav>
