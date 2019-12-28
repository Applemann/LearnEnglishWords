<table>
  <tr>
    <td> 
      <div class="button left"> &#x25C0; </div> 
    </td>
    <td> 
      <center>
        <WordDetail width="60%"/>
      </center>
    </td>
    <td> 
      <div class="button right"> &#x25B6; </div> 
    </td>
  </tr>
</table>

<Wall visible={wallVisible} />
<QuestionDialog/>

<script>
  import WordDetail from '../components/WordDetail.svelte';
  import Wall from '../components/Wall.svelte';
  import QuestionDialog from '../components/QuestionDialog.svelte';
  let wallVisible = true;
</script>

<style>
  .button {
    position: absolute;
    top: 0pt;
    padding: 20pt;
    padding-top: 80%;
    height: 50%;
    background-color: rgba(255, 99, 71, 0.1);
    font-size: 20pt;
    font-weight: bold;
  }
  .left {
    left: 0pt;
  }
  .right {
    right: 0pt;
  }
</style>
