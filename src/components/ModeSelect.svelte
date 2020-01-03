<div>
  <table>
    <tr>
      <td>
        <div on:click={buttonLeft} class:active={!disableLeft} class:disable={disableLeft} id="select-button-left" class="select-button">
          <center>
            <h3>&#x25C0;</h3>
          </center>
        </div>
      </td>
      <td>
        <ul id="select-item-list" >
          <slot></slot>
        </ul>
      </td>
      <td>
        <div on:click={buttonRight} class:active={!disableRight} class:disable={disableRight} id="select-button-right" class="select-button">
          <center>
            <h3>&#x25B6;</h3>
          </center>
        </div>
      </td>
    </tr>
  </table>
</div>


<script>
  let disableLeft = true;
  let disableRight = false;
  export let currentMode = 0;

  function buttonLeft() {
    let items = document.querySelector("#select-item-list").childNodes;
    let i = 0;
    for (let elem of items) {
      if (elem.style.display == "block") {
        elem.style.display = "none"; 
        if (i === 0) {
          elem.style.display = "block"; 
          //items[3].style.display = "block"; 
        } else {
          items[i-1].style.display = "block"; 
          disableLeft = i === 1;
          disableRight = false;
        }
        currentMode = i-1;
        break;
      }
      i += 1;
    }
  }
  
  function buttonRight() {
    let items = document.querySelector("#select-item-list").childNodes;

    let i = 0;
    for (let elem of items) {
      if (elem.style.display == "block") {
        elem.style.display = "none"; 
        if (i === 3) {
          elem.style.display = "block"; 
          //items[0].style.display = "block"; 
        } else {
          items[i+1].style.display = "block"; 
          disableLeft = false;
          disableRight = i === 2;
        }
        currentMode = i+1;
        break;
      }
      i += 1;
    }
  }
</script>


<style>
  #select-item-list {                          
    text-align: center;
    list-style-type: none;
    padding-right: 25pt;
    width: 60pt;
    height: 45pt;
  }

  .active {
    background-color: blue;
  }

  .disable {
    background-color: grey;
  }

  .select-button {
    margin: 10pt;
    border-style: solid;
    border-width: 2pt;
    padding: 0pt 10pt 0pt 10pt;
  }
</style>
