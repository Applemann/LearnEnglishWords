{#if visible}
  <div class="word-box" style="width: {width}">
    <div id="word" on:click={playSound}>
      <Container>
        <Title><b>{word.text}</b></Title>

        <div class="sound">[ {word.pronunciation} ]  &#x1F509;</div>
      </Container>
    </div>


    <center>
      <Container label="Vyznamy:" paddingTop="15pt">
        <div class="sense descriptions">
          <ul>
            {#each word.sense as sense}
              <li> {sense} </li>
            {/each}
          </ul>
        </div>
      </Container>

      <div class="description-box">
        <Container on:click="{() => showExample = !showExample}" label={showExample ? "▼ Priklady" : "▶  Priklady"} paddingTop="10pt">
          {#if showExample}
            <ul class="descriptions">
              {#each word.examples as example}
                <li> {example} </li>
              {/each}
            </ul>
          {/if}
        </Container>
      </div>

    </center>
  </div>
{/if}


<script>
  import Container from '../common/Container.svelte';
  import Title from '../common/Title.svelte';

  export let width = "100%";
  export let word; 
  export let visible = true;
  let showExample = false;

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
  .descriptions {
      background-color: white;
      padding: 5pt;
      border-style: solid;
      border-width: 3pt
  }

  ul {
    text-align: left;
  }

  .sense {
    padding-left: 20pt;
  }

  .sound {
    font-family: "Arial", sans-serif;
    font-weight: bold;
    text-transform: lowercase;
  }
</style>
