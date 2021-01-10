<script>
  import CreditCard from "svelte-credit-cards";
  import Icon from "svelte-awesome/components/Icon.svelte";
  import { creditCard, paypal, bitcoin, lock } from "svelte-awesome/icons";
  const paymentMethods = [
    {
      icon: creditCard,
      value: "card",
    },
    {
      icon: paypal,
      value: "paypal",
    },
    {
      icon: bitcoin,
      value: "bitcoin",
    },
  ];
  let selectedPaymentMethod = paymentMethods[0].value;
  let card = { name: "", number: "", cvc: "", expiry: "" };
  const paymentMethodChange = (e) => {
    selectedPaymentMethod = e.target.value;
  };
</script>

<style>
  .mulish {
    font-family: Mulish;
  }
  .payment_method_radio + label {
    border: 2px solid rgb(212, 212, 212);
  }
  .payment_method_radio:checked + label {
    /* indigo-700 */
    --tw-text-opacity: 1;
    border: 2px solid rgba(67, 56, 202, var(--tw-text-opacity));
  }
</style>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Mulish&display=swap"
    rel="stylesheet" />
</svelte:head>
<section class="mulish bg-gray-700 p-10 flex justify-center items-center">
  <div class="grid w-10/12 grid-flow-row md:grid-cols-2">
    <!-- LEFT -->
    <div class="bg-gray-100 w-full h-full flex flex-col p-5 owly-1">
      <h1 class="text-2xl">Payment Details</h1>
      <form class="owly-1" on:submit|preventDefault>
        <h3>Payment Method</h3>
        <div class="grid gap-6 grid-flow-col grid-cols-3">
          {#each paymentMethods as pM}
            <input
              id={pM.value}
              class="payment_method_radio hidden"
              type="radio"
              name="payment-method"
              checked={selectedPaymentMethod === pM.value}
              value={pM.value}
              on:click={paymentMethodChange} />
            <label for={pM.value} class="cursor-pointer p-3 text-center">
              <Icon data={pM.icon} scale="2" />
            </label>
          {/each}
        </div>
        <label class="block">
          <span class="text-xs"> Cardholder Name </span>
          <input
            type="text"
            bind:value={card.name}
            class="block outline-none w-full border-b-2 border-gray-300  focus:border-indigo-700 bg-transparent py-2 " />
        </label>
        <label class="block">
          <span class="text-xs"> Card Number </span>
          <input
            type="text"
            bind:value={card.number}
            class="block outline-none w-full border-b-2  border-gray-300  focus:border-indigo-700 bg-transparent py-2 " />
        </label>
        <!-- two column input -->
        <div class="grid gap-6 grid-cols-2">
          <label class="block">
            <span class="text-xs"> Expires End </span>
            <input
              type="text"
              bind:value={card.expiry}
              class="block outline-none w-full border-b-2  border-gray-300  focus:border-indigo-700 bg-transparent py-2 " />
          </label>
          <label class="block">
            <span class="text-xs"> CVC </span>
            <input
              type="number"
              bind:value={card.cvc}
              class="block outline-none w-full border-b-2  border-gray-300  focus:border-indigo-700 bg-transparent py-2 " />
          </label>
        </div>
        <button
          class="flex justify-between items-center text-2xl bg-indigo-700 text-white w-full p-3"><span>Checkout</span>
          <Icon data={lock} /></button>
      </form>
    </div>
    <!-- RIGHT -->
    <div
      class="bg-gray-300 w-full h-full p-5 flex flex-col justify-between row-start-1 row-end-2 md:col-start-2 md:col-end-3">
      <div class="my-16">
        <CreditCard {...card} preview />
      </div>
      <div>
        <h3 class="text-lg">Subtotal</h3>
        <h1 class="text-4xl">$49.99</h1>
      </div>
    </div>
  </div>
</section>
