<Title> {title} </Title>

<div style="text-align:center; padding-top: 20pt; padding-right: 30pt">
  <ul id="category-list" style="list-style-type: none;">
    {#if $collectionData != 0}
      {#each $collectionData as category, id}
        <li on:click="{() => goToDetailView(category)}" class="category-item"> 
          {category.name.slice(6,-5)} ({category.readAsJSON().length} words) 
        </li>
      {/each}
    {/if}
  </ul>
</div>


<script>
  import Title from '../common/Title.svelte';
  import { createEventDispatcher } from 'svelte';
  import WordRepository from '../repositories/WordRepository.js';
  import { collectionData, categoryData } from '../store.js';

  export let title = "Select category:";

  const dispatch = createEventDispatcher();

  function goToDetailView(category) {
    dispatch('changeView', {view: "CategoryDetailView"});
    categoryData.set(category)
  }

/*
  let categoryItems = [
    {name: "Family", wordsNum: 30},
    {name: "Colors", wordsNum: 20},
    {name: "Numbers", wordsNum: 35},
    {name: "Furniture", wordsNum: 70},
    {name: "Food", wordsNum: 150},
    {name: "Animals", wordsNum: 60},
    {name: "Traveling", wordsNum: 300},
    {name: "Health", wordsNum: 163},
    {name: "Body", wordsNum: 30}
  ];
  */

</script>


<style>
.category-item {
    background-color: MediumSeaGreen;
    font-size: 12pt;
    font-weight: bold;
    margin: 3pt;
    padding: 10pt 1pt 10pt 1pt;
}
</style>
