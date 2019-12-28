export default class WordRepository {
  constructor() {
    this.db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    this.db.transaction(this.queryDB, this.errorCB);
  }

  // Transaction error callback
  //
  errorCB(err) {
    
    alert(err.code);
    console.log("Error processing SQL: "+err);
  }

  // Query the success callback
  //
  querySuccess(tx, results) {
    var len = results.rows.length;
    console.log("DEMO table: " + len + " rows found.");
    for (var i=0; i<len; i++){
      console.log("Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).data);
    }
  }

  queryDB(tx) {
    tx.executeSql('SELECT * FROM DEMO', [], this.querySuccess, this.errorCB);
  }

}
