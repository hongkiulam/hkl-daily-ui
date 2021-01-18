<script>
  import {
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    LinkedinIcon,
  } from "svelte-feather-icons";
  import Button from "./D010.Button.svelte";
  export let centre = false;
</script>

<style>
  .tooltip::before {
    content: "";
    display: block;
    height: 3rem;
    width: 3rem;
    position: absolute;
    left: 0;
    top: -5px;
    transform: rotate(45deg);
    border-radius: 100%;
    border-bottom-right-radius: 0;
    background: linear-gradient(
      -45deg,
      var(--color),
      var(--color) 30%,
      transparent 31%,
      transparent 100%
    );
  }
  .tooltip.centre::before {
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
  }
</style>

<div
  class="tooltip {centre
    ? 'centre'
    : ''} flex w-min rounded-full shadow-md relative"
  style="background: var(--color)"
>
  <Button icon={FacebookIcon} />
  <Button icon={TwitterIcon} />
  <Button icon={InstagramIcon} />
  <Button icon={LinkedinIcon} />
</div>
