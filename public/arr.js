window.onload = function() {
    var accounts = [
{
    id:1, name:'alex', deposit:5
},
{
    id:2, name:'sarah', deposit:5
},
{
    id:3, name:'jim', deposit:15
}

]
var parsed = "";
for (i = 0; i< accounts.length; i++) {
    var myobj=  accounts[i];
    for (var property in myobj) {
        parsed += property + ": " + myobj[property] + "\t";          
    }
    parsed += "\n";
   //document.write("\n");
}   
console.log(parsed);
document.getElementById("display").innerHTML = parsed;


// var one = document.getElementById(1);
// console.log(one);
// one.innerHTML = accounts[0].id;
// var two = document.getElementById('2');
// two.innerHTML = accounts[0].name;
// var h = document.getElementById('3');
// h.innerHTML = accounts[0].deposit;
}
