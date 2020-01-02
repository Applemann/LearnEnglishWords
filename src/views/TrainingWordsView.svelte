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

<!--
<Wall bind:visible={wallVisible} />
-->
<div class="question">
  <QuestionDialog />
</div>

<script>
  import WordDetail from '../components/WordDetail.svelte';
  import Wall from '../components/Wall.svelte';
  import QuestionDialog from '../components/QuestionDialog.svelte';
  import Word from '../models/Word.js';
  import WordRepository from '../repositories/WordRepository.js';
  import { onMount } from 'svelte';

  export let wordList = []
  var wordRepository = new WordRepository()
  onMount(async () => {
    wordList = await wordRepository.getWords();
  });

  let currentVisible = 0;
  let wallVisible = true;

  function nextWord(number) {
    currentVisible += number
    if (wordList.length == currentVisible) {
      currentVisible = 0;
    }
    if (currentVisible == -1) {
      currentVisible = wordList.length - 1;
    }
    wallVisible = true;
  }
</script>

<style>
  .question {
    position: absolute;
    bottom: 30pt;
    left: 8pt;
  }
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
  table {
    width: 100%;
    height: 70%;
  }
</style>
