{#if currentView === "CollectionListView"}
  <CollectionListView on:changeView={changeView} />
{:else if currentView === "CategoryListView"}
  <CategoryListView on:changeView={changeView} />
{/if}



<script>
import CollectionListView from './CollectionListView.svelte';
import CategoryListView from './CategoryListView.svelte';

let history = [];
export let currentView = "CollectionListView"

document.addEventListener("deviceready", onDeviceReady, false);

function changeView(event) {
  setView(event.detail.view);
}

function setView(view) {
  history.push(currentView);
  currentView = view;
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
