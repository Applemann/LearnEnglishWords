{#if label !== ""}
<h2 style="padding-top: 20pt">{label}</h2>
{/if}

<center><slot></slot></center>

<script>
  export let label = "";
</script>

<style>
</style>
