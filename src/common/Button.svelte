<div on:click {id} class="button" class:disabled={disabled === "true"}>
    <center>
        <h3><slot></slot></h3>
    </center>
</div>

<script>
  export let disabled;
  export let id;
</script>

<style>
  .disabled {
      display: none;
  }
  .button {
      padding: 0pt;
      margin: 10pt 100pt 0pt 100pt;
      border-style: solid;
      border-width: 3pt
  }
</style>
