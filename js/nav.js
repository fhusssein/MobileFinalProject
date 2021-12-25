/* Final Project: Mobile Application
File Name: nav.js
Revision History: 
Created by: Faisal Hussein
Date: 04/14/2019 */
var page = ["home","home1","home2","home3","about"];
var opt = ["opt1","opt2","opt3","opt4","opt5"];
var myIndex = 0;
function change(x){
    clear();
    document.getElementById(page[x-1]).style.display = "block";
    document.getElementById(opt[x-1]).style.color = "lightblue";

    if(x ==2){
        loadItems();
    }else if( x == 4){
        data.loadCart();
    }
    else if(x == 1)
    {
        carousel();
    }
}
function clear(){
    for(var i=0; i<=4; i++){
        document.getElementById(page[i]).style.display = "none";
        document.getElementById(opt[i]).style.color = "white";
    }
}
function loadData(){
    data.dropTables();
    data.CreateTables();
    change(2);
}


function carousel() {
  var i;
  var x = document.getElementsByClassName("slideShow");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}