
<div id="select-collection-view" class="view">
    <h1 style="padding-top: 20pt">Select collection of words:</h1>
    <div style="text-align:center; padding-top: 20pt; padding-right: 30pt">
      <ul id="collection-list" style="list-style-type: none;">
        {#each collectionItems as {label, description}, id}
          <li on:click={() => select(id)} class="download-selection-item" class:selected="{current === id}"> 
            <h2>{label}</h2> 
          </li>
        {/each}
      </ul>
    </div>
    {#each collectionItems as {label, description}, id}
        <div class="select-description" style="display: {current === id ? 'block' : 'none'};" >
          {description}
        </div>
    {/each}

    <div id="download-button">
        <center>
            <h3>Download</h3>
        </center>
    </div>
    <div on:click="{() => dispatch('changeView', {view: "CategoryListView"})}" id="continue-button" style="display: none;">
        <center>
            <h3>Continue</h3>
        </center>
    </div>
</div>

<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let current;
  let collectionItems = [
    {label: "Basic (1000 words)", description: "Obsahuje vsechna zakladni anglicka slovicka pro zakladni komunikaci a dorozumeni. "},
    {label: "Standard (3000 words)", description: "Se znalosti 2500 az 3000 anglickych slov dokážete porozumět 90 % každodenní anglické konverzace, anglicky psaným novinám a časopisům."},
    {label: "Student (5000 words)", description: "Specialni kolekce pro studenty. Obsahuje slovicka serazena do skupin podle lekci nejznamejsich ucebnic."},
    {label: "Native (15000 words)", description: "Rodily mluvci ma celkem 10000 az 20000 slov v aktivni slovni zasobe. V teto kolekci jsou ty nejznamejsi z nich. (Doporucujeme stahovat az po projiti vsech predchozich kolekci)"}
  ];
  function select(id) {
    current = id
    //let downloadButton = document.querySelector("#download-button");
    let continueButton = document.querySelector("#continue-button");
    //downloadButton.style.display = "block";
    continueButton.style.display = "block";
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

  #continue-button {
      background-color: green;
      padding: 0pt;
      margin: 10pt 100pt 0pt 100pt;
      border-style: solid;
      border-width: 3pt
  }

  #download-button {
      display: none;
      background-color: red;
      padding: 0pt;
      margin: 10pt 100pt 0pt 100pt;
      border-style: solid;
      border-width: 3pt
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

