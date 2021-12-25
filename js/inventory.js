/* Final Project: Mobile Application
File Name: inventory.js
Revision History: 
Created by: Faisal Hussein
Date: 04/14/2019 */
var itemName = ["Gust Blaster Dragon","Dueling Dragon King, ZANGEKI","Waving Deletor, Greidhol", "King of Masks, Dantarian", 
                "Gun Salute Dragon, End of Stage", "Dark Bond Trumpeter", "Black-winged Swordbreaker", "Fantasy Petal Storm, Shirayuki", "Schwarzschild Dragon", 
                "Lie-down Deletor, Given", "Opener of Dark Gates", "Dimension Creeper"];
var cost = [19.99,10.99, 23,99, 5.69, 3.99, 5.99, 3.99, 4.99, 2.99, 3.99, 3.99, 2.99];
var amt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function loadItems(){
    document.getElementById("showList").innerHTML = "";
    for(var i=0; i < 12; i++){
        document.getElementById("showList").innerHTML += '<div id="card">'+
        '<img src="img/item' +(i+1) + '.png"/>' +
        '<div class="Result">' +itemName[i]+ ': $' + cost[i] + '</div>' +
        '<div id="itemAmt'+i+'">' +amt[i]+ '</div>'+
        '<button onclick="vote('+i+', 0)" class="btn" style="float:left">Add</button>'+
        '<button onclick="vote('+i+', 1)" class="btn" style="float:left">Lower</button></div>';
    }
}

function vote(x, y)
{
    if(y == 0){
        if(amt[x] < 10)
        {
            amt[x]++;
            document.getElementById("itemAmt"+x).innerHTML = amt[x];
        }
    }else{
        if(amt[x] > 0)
        {
            amt[x]--;
            document.getElementById("itemAmt"+x).innerHTML = amt[x];
        }
    }  
}

function AddToCart(){
    var found = false;
    for(var i =0 ; i< 12; i++){
        if(amt[i] != 0){
            found = true;
        }
    }
    if(found == true){
        data.dropTables();
        data.CreateTables();
        for(var k=0; k < 12; k++){
            if(amt[k] != 0){
                data.createValues(itemName[k], cost[k], amt[k]);
            }
        change(4);
    }
    }else{
        alert("no cards selected");
    }
}

function ClearCart(){
    data.dropOrders();
    for(var i =0 ; i< 12; i++){
        amt[i] = 0;
    }
    loadItems();
}

function makeAccount(){
    var nam1 = document.getElementById("fname").value;
    var nam2 = document.getElementById("lname").value;
    var nam3 = document.getElementById("email").value;
    var allgood = false;
    var vals = [nam1, nam2, nam3];

    for(var k=0; k<=vals.length;k++){
        if(vals[k] == ""){
            allgood = true;
        }
    }
    if(allgood == true){
        alert("not all feilds are filled");
    }else{
        data.makeAcc(nam1, nam2, nam3);
        alert("account created");
    }
}
function cancelAcc(){
    data.dropAccount();
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
}