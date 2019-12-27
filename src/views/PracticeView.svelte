
<Container>
  <Title><b>attraction</b></Title>

  <div class="sound">əˈtrækʃən   &#x1F509;</div>
</Container>


<center>
<Container label=Vyznamy: >
  <div class="sense descriptions">
    <ul>
      <li> pritazlivost </li>
      <li> puvab, kouzlo </li>
      <li> atrakce, zajimavost </li>
    </ul>
  </div>
</Container>

<Container label=Priklady: >
<ul class="descriptions">
  <li> Maybe that was the attraction she felt for people like Yancey and Allen. </li>
  <li> That physical attraction was responsible for the pounding of her heart right now. </li>
</ul>
</Container>

</center>

<h2 class="control-question"> Mel jsi pravdu? <br />Umis toto slovicko?: </h2>
<table>
  <tr>
    <td> 
      <div class="button red"> NO </div> 
    </td>
    <td> 
      <div class="button orange"> I am not sure </div> 
    </td>
    <td> 
      <div class="button green"> YES </div> 
    </td>
  </tr>
</table>

{#if !wallVisible}
<div class="wall" out:fly="{{ y: 2000, duration: 10000 }}">
  <div class="wall-text">
    <Title>
      Rekni co si myslis, ze dane slovicko znamena..
    </Title>
  </div>
  <Button id="check-button" on:click={() => { wallVisible = true}}>
    Zkontrolovat
  </Button>
</div>
{/if}


<script>
  import Container from '../common/Container.svelte';
  import Title from '../common/Title.svelte';
  import Button from '../common/Button.svelte';
	import { fade, fly } from 'svelte/transition';

  let wallVisible = false;
</script>


<style>
  .descriptions {
      background-color: white;
      padding: 10pt;
      margin: 10pt 30pt 0pt 30pt;
      border-style: solid;
      border-width: 3pt
  }

  :global(#check-button) {
      background-color: green;
  }

  ul {
    text-align: left;
  }

  .wall {
    background-color: blue;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 130pt;
  }

  .wall-text {
    text-align: center;
    margin: 50pt;
  }

  .sense {
    padding-left: 50pt;
  }

  .sound {
     font-weight: bold;
  }

  .green {
      background-color: green;
  }

  .red {
      background-color: red;
  }

  .orange {
      background-color: orange;
  }

  .button {
    width: 70pt;
    padding: 9pt;
    border-style: solid;
    border-width: 3pt;
    text-align: center;
    font-weight: bold;
  }

  table {
    width: 100%;
    text-align: center;
    padding-left: 0pt;
  }

	.control-question {
    padding-top: 10pt;
    text-align: center;
	}
</style>
