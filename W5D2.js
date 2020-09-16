/*
1) implement the last version of each 
*/

function each(coll, func) {
 //write your code here 
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      func(coll[i], i);
    }
  } else {
    for (var key in coll) {
      func(coll[key], key);
    }
  }
}
	

/*
1) implement map function
*/
  function map(arr, f) {
    var acc = [];
    each(arr,function(value,i){
      acc.push(f(value,i))
    })
    return acc;
  }

/*
1) implement the improved map 
*/



  function map(coll, f) {
    var acc = [];

     if (!Array.isArray(coll)) {
    acc = {};
  }
  each(coll, function (element, key) {
    acc[key] = f(element, key);
  });
    
    return acc;
  }
