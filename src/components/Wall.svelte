
{#if visible}
<div class="wall" out:fly="{{ y: 2000, duration: 5000 }}">
  <div class="wall-text">
    <Title>
      Rekni co si myslis, ze dane slovicko znamena..
    </Title>
  </div>
  <Button id="check-button" on:click={() => visible = false}>
    Zkontrolovat
  </Button>
</div>
{/if}


<script>
	import { fade, fly } from 'svelte/transition';
  import Title from '../common/Title.svelte';
  import Button from '../common/Button.svelte';
  import WordRepository from '../repositories/WordRepository.js';

  export let visible = true;
</script>


<style>
  :global(#check-button) {
      background-color: green;
  }

  .wall {
    background-color: blue;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 130pt;
  }

  .wall-text {
    text-align: center;
    margin: 50pt;
  }
</style>
