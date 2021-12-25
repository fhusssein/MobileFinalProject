/* Final Project: Mobile Application
File Name: database.js
Revision History: 
Created by: Faisal Hussein
Date: 04/14/2019 */
var DATABASE = openDatabase('database', '1.0', 'local views', 2 * 1024 * 1024);
var table = "CREATE TABLE IF NOT EXISTS orders(id unique, itemName, price NUMBER, amount NUMBER)";
var table2 = "CREATE TABLE IF NOT EXISTS account(id unique, fname, lname, email)";

function errorHandler(tx, error) {
     console.error("SQL error: " + tx + " (" + error.code + ") : " + error.message);
}

var data = {
    dropTables: function (){
        DATABASE.transaction(function (tx) {
            tx.executeSql('DROP TABLE IF EXISTS orders');
            tx.executeSql('DROP TABLE IF EXISTS account');
        });
    },
    dropOrders: function(){
        DATABASE.transaction(function (tx) {
            tx.executeSql('DROP TABLE IF EXISTS orders');
        });
    },
    dropAccount: function(){
        DATABASE.transaction(function (tx) {
            tx.executeSql('DROP TABLE IF EXISTS account');
        });
    },
    CreateTables: function(){
        DATABASE.transaction(function (tx) {
            tx.executeSql(table);
            tx.executeSql(table2);
        });
    },
    createValues: function(name, price, amount){
        DATABASE.transaction(function (tx) {
            // alert(name + price + amount);
            tx.executeSql('INSERT INTO orders (itemName, price, amount) VALUES ("'+name+'", '+price+', '+amount+')');
            
        });
    },
    clearOrders: function(){
        DATABASE.transaction(function (tx) {
            tx.executeSql('SELECT * FROM orders', [], function(tx, results){
                var len = results.rows.length;
                alert(len);
                if(len> 0)
                    tx.executeSql('DELETE FROM orders');                                 
            });
        });
    },
    loadCart: function(){
        DATABASE.transaction(function (tx) {
            tx.executeSql('SELECT * FROM orders', [], function(tx, results){
                var len = results.rows.length;
                var total = 0;
                var taxRte = .13;
                var taxAmt = 0;
                var trueTotal = 0;

                var print = "<table border='1px' style='padding: 10px;'>"+
                "<tr>"+
                "<th>Name</th>"+   
                "<th>Price</th>"+  
                "<th>Amount</th>"+   
                "</tr>";

                if(len > 0){
                    for(i =0;i< len;i++){
                        print += "<tr>"+
                        "<td>"+results.rows.item(i).itemName+"</td>"+
                        "<td>"+results.rows.item(i).price+"</td>"+
                        "<td>"+results.rows.item(i).amount+"</td>";
                        total += (amt[i] * cost[i]);     
                    }
                
                    taxAmt = (total * taxRte);
                    trueTotal = (total + taxAmt );
                
                    print += "<tr><td>Subtotal: </td><td colspan='2'>$"+total.toFixed(2)+"</td></tr>" +
                        "<tr><td>Tax: </td><td colspan='2'>$"+taxAmt.toFixed(2)+"</td></tr>" +
                        "<tr><td>Total: </td><td colspan='2'>$"+trueTotal.toFixed(2)+"</td></tr>";
                    print += "</table>";
                    document.getElementById("cartCScan").innerHTML =  print;   
                }else{
                    document.getElementById("cartCScan").innerHTML =  "<font color='white'>Cart is empty</font>";   
                }                         
            });
        });
    },
    makeAcc: function(x,y,z){
        DATABASE.transaction(function (tx) {
            tx.executeSql('INSERT INTO account (fname, lname, email) VALUES ("'+x+'", "'+y+'","'+z+'")');
        });
    }
}

