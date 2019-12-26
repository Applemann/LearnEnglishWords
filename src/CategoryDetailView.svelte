<div id="category-view" class="view">
  <h1 style="padding-bottom: 20pt; padding-top: 20pt" id="category-name">{categoryName}</h1>

    <center>
    <table class="statistics-table">
        <tr style="color: black;" > <td>Celkem slov:              </td><td>150</td> </tr>
        <tr style="color: green;" > <td>Uz znas:                  </td><td>20 </td> </tr>
        <tr style="color: orange;"> <td>Jeste neumis:             </td><td>30 </td> </tr>
        <tr style="color: red;"> <td>Zatim neznas:             </td><td>100</td> </tr>
        <tr> <td>Dnes ses naucil:          </td><td>10 </td> </tr>
        <tr> <td>V tomto tydnu ses naucil: </td><td>20 </td> </tr>
    </table>
    </center>

    <h2 style="padding-top: 20pt">Vyber si jednu z moznosti treninku:</h2>
    <div style="text-align:center; padding-top: 10pt; padding-right: 30pt">
        <ul id="select-mode-item-list" style="list-style-type: none;">
          {#each modes as {name, translation, visible}, id}
            <li class="select-learn-item" id="select-learn-item{id}" style="display: {visible ? 'block' : 'none'};"> <h2>{name}</h2> <h3>{translation}</h3></li>
          {/each}
        </ul>
        <div on:click={modeButtonLeft} id="select-mode-button-left">
            <center>
                <h3>&#x25C0;</h3>
            </center>
        </div>
        <div on:click={modeButtonRight} id="select-mode-button-right">
            <center>
                <h3>&#x25B6;</h3>
            </center>
        </div>
    </div>
    <div id="category-start-button">
        <center>
            <h3>Zacit trenovat</h3>
        </center>
    </div>
</div>


<script>
  export let categoryName;

  let modes = [
    {name: "Reading", translation: "(AJ -> CJ)", visible: true},
    {name: "Writting", translation: "(CJ -> AJ)", visible: false},
    {name: "Listening", translation: "(AJ -> CJ)", visible: false},
    {name: "Mix", translation: "", visible: false}
  ]

  function modeButtonLeft() {
      let items = document.querySelector("#select-mode-item-list").childNodes;
      let i = 0;
      for (let elem of items) {
          if (elem.style.display == "block") {
              elem.style.display = "none"; 
              if (i === 0) {
                  elem.style.display = "block"; 
                  //items[3].style.display = "block"; 
              } else {
                  items[i-1].style.display = "block"; 
              }
              break;
          }
          i += 1;
      }
  }
  
  function modeButtonRight() {
      let items = document.querySelector("#select-mode-item-list").childNodes;

      let i = 0;
      for (let elem of items) {
          if (elem.style.display == "block") {
              elem.style.display = "none"; 
              if (i === 3) {
                  elem.style.display = "block"; 
                  //items[0].style.display = "block"; 
              } else {
                  items[i+1].style.display = "block"; 
              }
              break;
          }
          i += 1;
      }
  }
  
</script>


<style>
.statistics-table {
    font-size: 12pt;
    font-weight: bold;
    border-style: solid;
    border-width: 3pt
}

.statistics-table td {
    border-style: solid;
    border-width: 1pt;
    border-color: grey;
}

.select-mode-item {
    display: none;
}

#select-mode-button-right {
    display: block;
    position: absolute;
    right: 50pt;
    bottom: 134pt;
    border-style: solid;
    border-width: 2pt;
    background-color: blue;
    padding: 0pt 10pt 0pt 10pt;
}

#select-mode-button-left {
    display: block;
    position: absolute;
    left: 50pt;
    bottom: 134pt;
    border-style: solid;
    border-width: 2pt;
    background-color: blue;
    padding: 0pt 10pt 0pt 10pt;
}

#category-start-button {
    background-color: green;
    padding: 5pt 0pt 5pt 0pt;
    margin: 40pt 60pt 0pt 60pt;
    border-style: solid;
    border-width: 3pt
}
</style>
