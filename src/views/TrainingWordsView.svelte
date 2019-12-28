<table>
  <tr>
    <td> 
      <div class="button left" on:click={() => nextWord(-1)}> &#x25C0; </div> 
    </td>
    <td> 
      <center>
        {#each wordList as word, id}
          <WordDetail width="60%" word={word} visible={currentVisible === id}/>
        {/each}
      </center>
    </td>
    <td> 
      <div class="button right" on:click={() => nextWord(1)}> &#x25B6; </div> 
    </td>
  </tr>
</table>

<Wall bind:visible={wallVisible} />
<QuestionDialog />

<script>
  import WordDetail from '../components/WordDetail.svelte';
  import Wall from '../components/Wall.svelte';
  import QuestionDialog from '../components/QuestionDialog.svelte';
  import Word from '../models/Word.js';

  export let wordList = [] 
  let wallVisible = true;

  function nextWord(number) {
    currentVisible += number
    wallVisible = true;
  }
</script>

<style>
  .button {
    position: absolute;
    top: 0pt;
    padding: 20pt;
    padding-top: 80%;
    height: 50%;
    background-color: rgba(255, 99, 71, 0.1);
    font-size: 20pt;
    font-weight: bold;
  }
  .left {
    left: 0pt;
  }
  .right {
    right: 0pt;
  }
</style>
