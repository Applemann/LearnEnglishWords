{#if currentView === "CollectionListView"}
  <CollectionListView on:changeView={changeView} />
{:else if currentView === "CategoryListView"}
  <CategoryListView on:changeView={changeView} />
{:else if currentView === "CategoryDetailView"}
  <CategoryDetailView on:changeView={changeView} categoryName={viewData.name} />
{/if}



<script>
import CollectionListView from './CollectionListView.svelte';
import CategoryListView from './CategoryListView.svelte';
import CategoryDetailView from './CategoryDetailView.svelte';

let history = [];
export let currentView = "CollectionListView"
export let viewData

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
