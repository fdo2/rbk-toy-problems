/*
1- Write a function called countNumOfStrings that takes an array of
mixed elements (different data types)
and returns the number of strings there are in the array.
Calling your function should result in:
countNumOfStrings(["hello", "world", 5, true, {}]); //2
countNumOfStrings(["foo", 2, 10, "bar", 5, false, {}, "baz"]); //3
countNumOfStrings(["There is only one string in this example"]); //1
Hint: Recall typeof? If not: check it out on MDN. :-)
*/
/*
2- Write a function called listLengthOfAllWords that takes an array
of words (strings),
and returns an array of numbers representing the length of each word.
Calling your function should result in:
listLengthOfAllWords(['hello', 'world', 'I', 'can', 'code']); //[5, 5,
1, 3, 4];
*/
/*
Write a function called flipPairs that takes a string a parameter
and returns the given string after Flip every pair of characters.
Example:
var input = 'check out how interesting this problem is, it\'s insanely
interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei
,si 't sniasenyli tnreseitgn!*/



//1
	function countNumOfStrings(arr){
		var sNum = 0;
		for(var i=0; i<arr.length; i++){
	   	 if(typeof (arr[i]) === 'string'){
	       sNum++
	    }
  	}
	    return sNum
	}
 countNumOfStrings(["foo", 2, 10, "bar", 5, false, {}, "baz"])

 	// resolving using each
 function each ( coll, f){
  if ( Array.isArray(coll)){
    for ( var i = 0; i < coll.lenght; i++){
      f ( coll[i], i)
    }
     
  }else {
    for (var key in coll){
      f(coll[key], key)
    }
    }
  }	

   function countNumOfStrings2(arr){
   	var countr 
   	each(arr, function(ele){
   		if ()
   	})
   }




 //2
 	
 	function listLengthOfAllWords(arr){
 		var sLength =[];
 		for(var i=0; i<arr.length; i++){
 		    sLength.push(arr[i].length);
     }
          return  sLength;
 	}
 	listLengthOfAllWords(['hello', 'world', 'I', 'can', 'code'])


//3
	function  flipPairs(str) {
		var strr="";
		var i;
	for (i=1; i<str.length; i+=2){
		strr+= str[i] + str[i-1]
	}
	if (str[i-1]!== undefined){
		strr+= str[i-1]
	}
	return strr		
	}
	flipPairs("hello world") 

