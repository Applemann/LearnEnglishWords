
<div style="width: {width}">
<Container>
  <Title><b>attraction</b></Title>

  <div class="sound">[ əˈtrækʃən ]   &#x1F509;</div>
</Container>


<center>
<Container label="Vyznamy:" paddingTop="15pt">
  <div class="sense descriptions">
    <ul>
      <li> pritazlivost </li>
      <li> puvab, kouzlo </li>
      <li> atrakce, zajimavost </li>
    </ul>
  </div>
</Container>

<Container label="Priklady:" paddingTop="10pt">
<ul class="descriptions">
  <li> Maybe that was the attraction she felt for people like Yancey and Allen. </li>
  <li> That physical attraction was responsible for the pounding of her heart right now. </li>
</ul>
</Container>

</center>
</div>



<script>
  import Container from '../common/Container.svelte';
  import Title from '../common/Title.svelte';
  import Button from '../common/Button.svelte';

  export let width = "100%";
</script>


<style>
  .descriptions {
      background-color: white;
      padding: 5pt;
      border-style: solid;
      border-width: 3pt
  }

  ul {
    text-align: left;
  }

  .sense {
    padding-left: 20pt;
  }

  .sound {
     font-weight: bold;
  }
</style>
