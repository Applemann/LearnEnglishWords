<Title> {categoryName} </Title>

<Container>
  <StatisticsTable />
</Container>

<Container label="Vyber si jednu z moznosti treninku:">
  <ModeSelect>
    {#each modes as {name, translation, visible}, id}
      <li style="display: {visible ? 'block' : 'none'};"> <h2>{name}</h2> <h3>{translation}</h3></li>
    {/each}
  </ModeSelect>
</Container>

<Container>
  Word limit: 
  <select bind:value={wordLimit}>
    {#each limitList as limit}
      <option value={limit}> {limit} </option>
    {/each}
  </select>
</Container>

<Button id="category-start-button" color="green" on:click="{startCategory}"> Start Category </Button>


<script>
  import Title from '../common/Title.svelte';
  import Container from '../common/Container.svelte';
  import Button from '../common/Button.svelte';
  import StatisticsTable from '../components/StatisticsTable.svelte';
  import ModeSelect from '../components/ModeSelect.svelte';
  import { createEventDispatcher } from 'svelte';

  export let categoryName;

  const dispatch = createEventDispatcher();                              

  let limitList = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  let wordLimit = 30;

  let modes = [
    {name: "Reading", translation: "(AJ -> CJ)", visible: true},
    {name: "Writting", translation: "(CJ -> AJ)", visible: false},
    {name: "Listening", translation: "(AJ -> CJ)", visible: false},
    {name: "Mix", translation: "(Random)", visible: false}
  ]

  function startCategory() {
    dispatch('changeView', {view: "PracticeView"})
  }
</script>


<style>
:global(#category-start-button) {
    background-color: green;
    padding: 5pt 0pt 5pt 0pt;
    margin: 40pt 60pt 0pt 60pt;
    border-style: solid;
    border-width: 3pt
}
</style>
