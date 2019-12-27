<Title> {title} </Title>

<div style="text-align:center; padding-top: 20pt; padding-right: 30pt">
  <ul id="collection-list" style="list-style-type: none;">
    {#each collectionItems as {label, description}, id}
      <li on:click={() => select(id)} class="download-selection-item" class:selected="{selectedItem === id}"> 
        <h2>{label}</h2> 
      </li>
    {/each}
  </ul>
</div>

{#each collectionItems as {label, description}, id}
  <div class="select-description" style="display: {selectedItem === id ? 'block' : 'none'};" >
    {description}
  </div>
{/each}

<Button id="download-button" disabled={buttons.download.disabled}> {buttons.download.name} </Button>
<Button id="continue-button" on:click="{buttons.continue.handleFunc}" disabled={buttons.continue.disabled}> {buttons.continue.name} </Button>


<script>
  import Title from '../common/Title.svelte';
  import Button from '../common/Button.svelte';
  import { createEventDispatcher } from 'svelte';

  export let selectedItem;
  export let title = "Select collection of words:";

  const dispatch = createEventDispatcher();

  let buttons = {
    "download": { name: "Download", disabled: "true", handleFunc: () => {} },
    "continue": { name: "Continue", disabled: "true", handleFunc: () => dispatch('changeView', {view: "CategoryListView"}) }
  }

  const collectionItems = [
    {label: "Basic (1000 words)", description: "Obsahuje vsechna zakladni anglicka slovicka pro zakladni komunikaci a dorozumeni. "},
    {label: "Standard (3000 words)", description: "Se znalosti 2500 az 3000 anglickych slov dokážete porozumět 90 % každodenní anglické konverzace, anglicky psaným novinám a časopisům."},
    {label: "Student (5000 words)", description: "Specialni kolekce pro studenty. Obsahuje slovicka serazena do skupin podle lekci nejznamejsich ucebnic."},
    {label: "Native (15000 words)", description: "Rodily mluvci ma celkem 10000 az 20000 slov v aktivni slovni zasobe. V teto kolekci jsou ty nejznamejsi z nich. (Doporucujeme stahovat az po projiti vsech predchozich kolekci)"}
  ];

  function select(id) {
    selectedItem = id
    buttons.continue.disabled = "false";
  }
</script>


<style>
  .select-description {
      display: none;
      background-color:white;
      padding: 10pt;
      margin: 20pt 30pt 0pt 30pt;
      border-style: solid;
      border-width: 3pt
  }

  :global(#continue-button) {
      background-color: green;
  }

  :global(#download-button) {
      background-color: red;
  }

  .download-selection-item {
      background-color: MediumSeaGreen;
      margin: 10pt;
      padding: 5pt;
  }

  li.selected {
      border-style: dashed;
      border-width: 3pt;
  }
</style>

