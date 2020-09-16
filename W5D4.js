function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

/*
1-write the the filter function
*/

function filter() {
  // your code is here
    var acc=[];
  each(array,function(x){
    if(predicate(x)){
    acc.push(x);
  }
  })
  return acc;
}


/*
2-write the the new version of reduce function
*/
  function reduce(arr, f, start){
    // your code is here
  var acc=start;
  each(arr, function(x){
    acc=f(acc,x)
  })
  return acc;
}
// improved
function reduce(arr, f, acc) {
  // your code is here
  if(acc===undefined){
    acc=arr[0];
    arr=arr.slice(1);
  }
}