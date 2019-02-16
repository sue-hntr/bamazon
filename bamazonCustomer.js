require("dotenv").config();

var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: process.env.PASSWORD,
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  startIt();
  
});

function startIt(){
  console.log("\n\nWelcome to Tween Attitude T-shirts");
  console.log("-- a BAMAZON store.");
  console.log("\n------- CURRENT INVENTORY-------");
      connection.query("SELECT * FROM products", function(err, res) {
        // if (error) throw error;
        for (var i = 0; i < res.length; i++) {
          console.log("Item ID " + res[i].id + 
                      " | Product: " + res[i].product_name +
                      " | Dept: " + res[i].department_name + 
                      " | Price($): " + res[i].price +
                      " | Stock Available: " + res[i].stock_quantity);
        }  //close for
        console.log("-----------------------------------");
        wantIt();
      });
    }

function wantIt(){
  inquirer.prompt([
    {
      name: "id",
      type: "input",
      message: "Please enter the ItemID of the product you are interested in: "
    },
    {
      name: "stock_quantity",
      type: "input",
      message: "How many unit(s) do you want to buy?: "
    }
  ])
  .then(function(answers) {
    var query = "SELECT id, product_name, price, stock_quantity FROM products WHERE ?";
    connection.query(query, { id: answers.id }, function(err, res) {
      if(err) throw err;
      var unitsWanted = answers.stock_quantity;
      for (var i = 0; i < res.length; i++) {
        console.log("Item ID: " + res[i].id + " || Product: " + res[i].product_name + " || Units In Stock: " + res[i].stock_quantity);
        var idNum = res[i].id;
        var idPrice = res[i].price;
        var idStock = res[i].stock_quantity;
      }
      if (unitsWanted > idStock){
        console.log("Sorry. Insufficient quantity in stock. Please try again.");
        connection.end();
      }else{
        console.log("Calculating...");
        updateStock(idNum, unitsWanted, idPrice, idStock);
      } 
    });
  });
} 

function updateStock(idNum, unitsWanted, idPrice, idStock) {
    var newNum = idStock - unitsWanted;
    var totalPrice = idPrice * unitsWanted;

  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: newNum
      },
      {
        id: idNum
      }
    ],
    function(err, res) {
      if(err) throw error;
      console.log(res.affectedRows + " Tween Attitude Stock updated!\n");
      console.log ("\n\n+++++++FINAL COST++++++++++");
      console.log("Total Price: $" + totalPrice + " for " + unitsWanted);
      console.log ("\n\n");
      connection.end();
    }
  );
}

