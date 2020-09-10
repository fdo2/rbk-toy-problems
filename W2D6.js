/*
1-Write a function called loopAString that takes one parameter, a string of characters, 
and logs all of its characters (one at a time) to the console. 
Your function should use a while loop to log each character 
from the beginning to the end of the string, then return nothing. 
Below is an example of the code running.

loopAString('nodeJS');
// console output:
  // n
  // o
  // d
  // e
  // J
  // S

loopAString('abcd');
// console output:
  // a
  // b
  // c
  // d

*/
    function loopAString(string) {
      // create an index variable
      // create a loop which iterates over the input string
      // log current string character to the console
      // increment value of index variable
       var i = 0;
      while (i<string.length){
        console.log(string[i]);
        i++;
      }
    }
    loopAString('Fidaa');


// 2-Write a function called reverseStr that takes a string as an parameter 
//and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// reverseStr('hello'); "o1l2l3e4h"
// Your code is here

  
    function reverseStr(s){
      var x = '';
      var i = s.length-1;
      var j=0;
      while (i>=0 && j<s.length){
        x+=(s[i]) + [j+1];
        i--;
        j++;
      } return x.slice(0,-1);
    }
    reverseStr('hello');

// resolving using recursion by Qamar
// the function will reverse a string 
    function reverseStr2(str, res){
      var res =  res || ""
      if (str.length === 0 ){
        return res;
      }
      res += str[str.length - 1]
       return reverseStr2(str.slice(0, -1), res)
    }
reverseStr2("str")
