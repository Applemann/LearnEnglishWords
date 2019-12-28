{#if visible}
  <div style="width: {width}">
    <Container>
      <Title><b>{word.text}</b></Title>

      <div class="sound">[ {word.pronunciation} ]   &#x1F509;</div>
    </Container>


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

      <Container label="Priklady:" paddingTop="10pt">
        <ul class="descriptions">
          {#each word.examples as example}
            <li> {example} </li>
          {/each}
        </ul>
      </Container>

    </center>
  </div>
{/if}


<script>
  import Container from '../common/Container.svelte';
  import Title from '../common/Title.svelte';
  import Button from '../common/Button.svelte';

  export let width = "100%";
  export let word; 
  export let visible = false;

</script>


<style>
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
     font-weight: bold;
  }
</style>
