<div class="view">
  {#if currentView === "CollectionListView"}
    <CollectionListView on:changeView={changeView} />
  {:else if currentView === "CategoryListView"}
    <CategoryListView on:changeView={changeView} />
  {:else if currentView === "CategoryDetailView"}
    <CategoryDetailView on:changeView={changeView} />
  {:else if currentView === "TrainingWordsView"}
    <TrainingWordsView on:changeView={changeView} />
  {/if}
</div>


<script>
  import CollectionListView from './views/CollectionListView.svelte';
  import CategoryListView from './views/CategoryListView.svelte';
  import CategoryDetailView from './views/CategoryDetailView.svelte';
  import TrainingWordsView from './views/TrainingWordsView.svelte';
  import Database from './Database.js';
  import { trainingData } from './store.js';

  export let currentView
  export let data

  let history = [];
  let database;
  setView(currentView, data)

  document.addEventListener("deviceready", onDeviceReady, false);

  function changeView(event) {
    setView(event.detail.view, event.detail.data);
  }

  function setView(view, data) {
    history.push({view: view, data: data});
    currentView = view;
  }

  function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, false);
    database = new Database();
    //database.write("newPersistentFile.txt", "ahoj ;)", () => console.log("zapsano"))
    //database.read("newPersistentFile.txt", (result) => console.log("Result is: " + result))
  }

  function onBackKeyDown() {
    if (history.length > 1) {
      history.pop(); //remove current view
      let { view, data } = history.pop(); // get previous view
      setView(view, data);
    }
  }

</script>


<style>
</style>
