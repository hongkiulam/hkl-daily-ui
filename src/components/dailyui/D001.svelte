<script>
  import { FacebookIcon, GithubIcon } from "svelte-feather-icons";

  const input = ({ label, value, type = "text" }) => {
    return `<div class=" border-2 w-10/12 relative rounded-md" style="border-color:#9ad7cf">
      <input
        class="bg-transparent w-full h-full px-4 py-3 rounded-md"
        type="${type}"
        value="${value}" />
      <label class="absolute -top-4 left-4 bg-gray-50">${label}</label>
    </div>`;
  };
</script>

<style>
  .quicksand {
    font-family: Quicksand;
  }

  .gradient-background {
    background: linear-gradient(-70deg, #9ad7cf, #d1ede9);
  }
  .background {
    background: #9ad7cf;
  }
  .green-color {
    color: #9ad7cf;
  }
</style>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
    rel="stylesheet" />
</svelte:head>
<section
  class="gradient-background p-10 flex justify-center items-center quicksand">
  <div
    class="owl-2 max-w-xl w-full bg-gray-50 rounded-xl shadow-lg p-5 flex flex-col items-center">
    <h1 class="text-lg sm:text-3xl">Ready to join {'{'}company name{'}'}?</h1>
    {@html input({ label: 'Name', value: 'Fred Bloggs' })}
    {@html input({
      label: 'Email',
      value: 'fred.bloggs@domain.com',
      type: 'email',
    })}
    {@html input({ label: 'Password', value: 'password', type: 'password' })}
    {@html input({
      label: 'Retype Password',
      value: 'password',
      type: 'password',
    })}
    <div class="flex flex-col w-full items-center">
      <button
        class="p-3 text-2xl w-8/12 background rounded-lg text-white font-bold">Sign
        up</button>
      <p>
        Already have an account?
        <span class="green-color font-bold">Log in</span>
      </p>
    </div>
    <div class="flex flex-col w-full items-center">
      <p>Sign up instead with</p>
      <div class="grid gap-4 grid-flow-row sm:grid-flow-col w-full">
        <button
          class="flex items-center w-full border-2 rounded-md p-1"
          style="border-color:#9ad7cf">
          <FacebookIcon size="16" /><span class="ml-4">Facebook</span></button>
        <button
          class="flex items-center w-full border-2 rounded-md p-1"
          style="border-color:#9ad7cf"><GithubIcon size="16" /><span
            class="ml-4">Github</span></button>
      </div>
    </div>
  </div>
</section>
