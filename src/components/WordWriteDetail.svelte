{#if visible}
  <div class="word-box" style="width: {width}">
    {#if mode === 1}
      <Container>
        <Title><b>{word.sense.join("; ")}</b></Title>
      </Container>
    {:else if mode === 2}
      <Container label="Listen:" >
        <div id="sound" on:click={playSound}>
          <Title><b>&#x1F509;</b></Title>
        </div>
      </Container>
    {/if}

    <center>
    {#if mode === 1}
      <Container label="Write english translate:" paddingTop="15pt">
        <input bind:value={translate} on:keydown={handleKeydown} id="translate-input" placeholder="enter your translate">
      </Container>
    {:else if mode === 2}
      <Container label="Write what you listen:" paddingTop="15pt">
        <input bind:value={translate} on:keydown={handleKeydown} id="translate-input" placeholder="enter your listened word">
      </Container>
    {/if}
    </center>
  </div>

  {#if result === ""}
    <Button id="check-button" on:click={check}> Zkontrolovat </Button>
  {/if}

  {#if result !== ""}
    <h1>{result}</h1>
  {/if}

{/if}


<script>
  import Container from '../common/Container.svelte';
  import Title from '../common/Title.svelte';
  import Button from '../common/Button.svelte';

  export let width = "100%";
  export let visible = true;
  export let word; 
  export let mode;

  let translate = "";
  let result = "";
  
  function check() {
    document.querySelector("#translate-input").disabled = true;
    if (translate === word.text) {
      result = "Spravne ;-)"
    } else {
      result = "Spatne. Spravna odpoved je: " + word.text
    }
  }

	function handleKeydown(event) {
    if (event.key === "Enter") {
      document.querySelector("#translate-input").blur();
      check();
    }
	}

  function playSound() {
    var audio = new Audio();
    audio.src = `http://example.com/english-words/collections/basic/sounds/${word.text}.mp3`;
    audio.play();
  }

</script>


<style>
  .word-box {
    padding-bottom: 80pt;
  }
</style>
