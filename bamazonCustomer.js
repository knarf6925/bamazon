var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon_db"
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
   makeTable();
});

var makeTable = function() {
    connect.query("SELECT * FROM products", function (err,res){
    for (var i = 0; i ,res.length; i++){
        console.log(res[i].itemid+"")
    }
})
}
