<div on:click {id} class="button" class:disabled>
  <h3><slot></slot></h3>
</div>

<script>
  export let disabled = false;
  export let id;
</script>

<style>
  .disabled {
      display: none;
  }
  .button {
      margin: 10pt 100pt 0pt 100pt;
      border-style: solid;
      border-width: 3pt;
      text-align: center;
  }
</style>
