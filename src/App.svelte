<div class="view">
  {#if currentView === "CollectionListView"}
    <CollectionListView on:changeView={changeView} />
  {:else if currentView === "CategoryListView"}
    <CategoryListView on:changeView={changeView} />
  {:else if currentView === "CategoryDetailView"}
    <CategoryDetailView on:changeView={changeView} categoryName={viewData.name} />
  {:else if currentView === "TrainingWordsView"}
    <TrainingWordsView on:changeView={changeView}/>
  {/if}
</div>


<script>
  import CollectionListView from './views/CollectionListView.svelte';
  import CategoryListView from './views/CategoryListView.svelte';
  import CategoryDetailView from './views/CategoryDetailView.svelte';
  import TrainingWordsView from './views/TrainingWordsView.svelte';

  export let currentView
  export let viewData

  let history = [];

  document.addEventListener("deviceready", onDeviceReady, false);

  function changeView(event) {
    setView(event.detail.view, event.detail.data);
  }

  function setView(view, data) {
    history.push(currentView);
    currentView = view;
    viewData = data
  }

  function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, false);
  }

  function onBackKeyDown() {
    if (history.length > 0) {
      setView(history.pop());
    }
  }
</script>


<style>
</style>
