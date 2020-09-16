/*
1- Using map, Write a function called uppercaseValues that, given an object as a parameter,
 returns a new object with all of its string values converted to uppercase. 
Also, ensure that you only attempt to convert strings to uppercase.
*/

function each(coll,f){
  if ( Array.isArray ( coll ) ){
    for (var i = 0; i < coll.length; i++){
    f ( coll[i], i );  
    }
  }
  else for ( var key in coll){
    f ( coll[key], key)
  }
}

function map(coll,f){
  var acc=[]
  if ( !Array.isArray(coll) ){
    acc = {}
  }
 each ( coll, function (value,key){
   acc[key] = f(value,key)
 })
 return acc
  }

function upperCase(obj){
	var res = {};
	return map (obj, function(val, k){
		if ( typeof ( val ) === "string"){
			val =  val.toUpperCase()
			return val;
		}
	})

}
 var obj = {
 	name: "fidaa",
 	hoppy: "drawing"
 }
 upperCase(obj)




/*
2- Using reduce, write a function that sums the squared values of an array of numbers and returns the sum result.
*/

function reduce( arr, f, acc){
  if ( acc === undefined )
  {
    acc = arr[0];
    arr = arr.slice(1);
  }
  each ( arr,function(x){
  acc = f(acc,x);
 })
 return acc;
}

function sum(nums) {
	//your code is here 
	return reduce ( nums, function( res, val){
		return res+(val**2)
	},0)

}
var arr=[2,3]
sum(arr) 
