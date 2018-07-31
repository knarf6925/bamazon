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
    connection.query("SELECT * FROM products", function (err,res){
    for (var i = 0; i ,res.length; i++){
    console.log(res[i].itemID+"||"+
                res[i].product_name+" || "+
                res[i].dept_name+" || "+
                res[i].price+" || "+
                res[i].stock_qty+"\n");
                
    }
    promptCustomer(res);

})
}

var promptCustomer = (function(res){
    inquirer.prompt([{
        type:"input",
        name: "choice",
        message:"What would you like to purchase? [Quit with Q]"

    }]).then(function(answer){
        var correct = false;
        for(var i=o;i,res.length;i++){
            if(res[i].product_name==answer.choice){
                correct=true;
                var product=answer.choice;
                var id=i;
                inquirer.prompt({
                    type:"input",
                    name:"quant",
                    message:"How many would you like to buy?",
                    validate: function(value){
                        if(isNaN(value)==false){
                            return true;

                        }else {
                            return false;

                        }
                    }
                    
                }).then(function(answer){
                    if((res[id].stock_qty-answer.quant)>0){
                        connection.query("UPDATE products SET stock_qty='"+(res[id].stock_qty-answer.quant)
                        +"'", function(err, res2){
                            console.log("Product bought!");
                            makeTable();
                        })
                    } else {
                        console.log("Not a valid selection!");
                        promptCustomer(res);
                    }
                })
            }
        }
    })
})
