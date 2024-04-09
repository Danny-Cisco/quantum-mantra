<script>
  import { onMount } from "svelte";
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";

  let lottiePlayer;
  let showLottie = false;
  export let src = "";
  export let height = 80;
  export let width = 80;

  onMount(() => {
    showLottie = true;
  });

  function handleClick() {
    if (lottiePlayer) {
      lottiePlayer.stop();
      lottiePlayer.play();
    }
  }
</script>

{#if showLottie}
  <div on:click={handleClick}>
    <LottiePlayer
      bind:this={lottiePlayer}
      {src}
      autoplay={true}
      loop={false}
      controls={false}
      renderer="svg"
      background="transparent"
      {height}
      {width}
    />
  </div>
{/if}
