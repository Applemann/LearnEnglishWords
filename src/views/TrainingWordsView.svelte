<div>
  {currentVisible+1}/{$trainingData.limit}
</div>
<table>
  <tr>
    <td> 
      <div class="button left" on:click={() => nextWord(-1)}> &#x25C0; </div> 
    </td>
    <td> 
      <center>
        {#each wordList as word, id}
          {#if $trainingData.mode === 0}
            <WordReadDetail width="60%" {word} visible={currentVisible === id}/>
          {/if}
          {#if $trainingData.mode === 1 || $trainingData.mode === 2}
            <WordWriteDetail width="60%" {word} visible={currentVisible === id} mode={$trainingData.mode}/>
          {/if}
        {/each}
      </center>
    </td>
    <td> 
      <div class="button right" on:click={() => nextWord(1)}> &#x25B6; </div> 
    </td>
  </tr>
</table>

{#if $trainingData.mode === 0}
  <div class="question">
    <QuestionDialog />
  </div>
  <!--
    <Wall bind:visible={wallVisible} />
  -->
{/if}

<script>
  import WordReadDetail from '../components/WordReadDetail.svelte';
  import WordWriteDetail from '../components/WordWriteDetail.svelte';
  import Wall from '../components/Wall.svelte';
  import QuestionDialog from '../components/QuestionDialog.svelte';
  import Word from '../models/Word.js';
  import WordRepository from '../repositories/WordRepository.js';
  import { onMount } from 'svelte';
  import { trainingData, categoryData } from '../store.js';

  export let wordList = $categoryData.readAsJSON().slice(0, $trainingData.limit)

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
