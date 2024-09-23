
// -------------- Arrays --------------------------------------------
var example =[1, 2, 3, "hey", true, function(){}, []];

var arr =[1, 2, 3, 4, 5,];

//foreach, map, filter, find, indexOf

//forEach
arr.forEach(function(val){
    console.log(val + "Hello");
})

//map
var mappedArray = arr.map(function(val){
return val *2;
})
console.log(mappedArray);

//filter
var filteredArray = arr.filter(function(val){
    return val > 3;
})
console.log(filteredArray);

var filteredArray2 = arr.filter(function(val){
    if(val>3){return true}
    else {return false};
})
console.log(filteredArray2);

//find
var found = arr.find(function(val){
    return val == 4;
})
console.log(found);

var found2 = arr.find(function(val){
    if(val == 8){return true}    //Output-- undefined
    else {return false}
})
console.log(found2);

//indexOf
var index = arr.indexOf(4);
console.log(index);




//--------------Ojects--------------------------

{} //Blank Object

{
    name: "John"  //object
}

var object = {
    name: "John",
}
console.log(object.name)
console.log(object['name'])


var object2 = {
    name: "John2",
    age : 10
}
object2.name= 15;   //can change the value of object keys

Object.freeze(object2);  //freeze the object 
//object2.name = 20;    //error



//-------------function---------------

function fun1(){
    return 12;
}
console.log(fun1());


//---------Async js coding-----------------

// line by line code chaleo isey kahte h Synchronous

//jo bhi code async nature ka ho , usey side stack mein bhej do and agle code ko chaleo jo ki sync nature ka ho, jab bhi saraa sync code chal jaayee, tab check kro ki async code complete hua ki nahi, agar wo complete ho gya ho to usey main stack mein la kar chala do

async function abcd(params) {
    var blob = await fetch(`https://randomuser.me/api/`)  
    var ans = await blob.json();  
    console.log(ans.results[0].name);
}
 abcd();  




