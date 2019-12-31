{#if label !== ""}
<h2 on:click style="padding-top: {paddingTop}">{label}</h2>
{/if}

<center><slot></slot></center>

<script>
  export let label = "";
  export let paddingTop = "15pt";
</script>

<style>
</style>
