'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// referring to the given examples find out the pattern used and
// Write a function that takes 2 integers and prints the patterns using recursion
// 
// Input: 16, 5
// Output: [16, 11, 6, 1, -4, 1, 6, 11, 16]
//
// Input: 50, 9
// Output: [50, 41, 32, 23, 14, 5, -4, 5, 14, 23, 32, 41, 50]
//

const recursionPattern = (int1, int2) => {
    if (int1 <= 0) { 
        return [int1];
      }
      
      let pattern = [int1];
      
     
      pattern = pattern.concat(recursionPattern(int1 - int2, int2));
      
      pattern.push(int1);
      
      return pattern;
    
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
// 
// Write a function that takes a string (HTML tag)
// and extracts the link from the HTML tag
//
// Ex: <a href="http://www.hackerrank.com"><h1><b>HackerRank</b></h1></a> ==> "www.hackerrank.com"
// Ex: <a href="http://www.something.org"><h1><b>HackerRank</b></h1></a> ==> "www.something.org"
//
// Note:
//  Assume that links end with .com, .org or .net
// 

const filterLinks = (str) => {
    const start = str.indexOf('"'); 
    const end = str.indexOf('"', start + 1);
    const result = str.substring(start + 1, end);
    const nohttp = result.indexOf('w')
    return result.slice(nohttp);
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
// 
// A phrase is considered palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// 
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// as you can see "amanaplanacanalpanama" is a palindrome.
//

const isPalindrome = (str) => {
    let res = str.replace(/,/g, '').replace(/\s/g, '').replace(/:/g,'')
   res = res.toLowerCase();
   let j =1;
   let result = true;
   for(let i = 0; i<=res.length;i++){
    if(i !== res.length-j){
         if(res[i]==res[res.length-j]){
            j++
         }else{
            i=res.length;
            result = false;
         }
        }else{
            i=res.length;
            result = true;
        }
   }
   return result;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
// 
//  Write a function that takes 2 arguments, one is a string and the other is an array
//  the function should return a boolean than indicates if both have the same pattern
//
//  EX: 
//  Input: "abba", ['cat', 'dog', 'dog', 'cat']
//  output: true
//
//  as you can see the a acted as the cat in the array, and b as the dog, and the pattern was the same
//
//  Input: "cda", ['cat', 'dog', 'cat']
//  output: false
//
//  here if the pattern had three different things so the array should had 3 different things to be true
//

const samePattern = (str, arr) => {
     
     const arrduplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
     const arrnumDuplicates = arrduplicates.length;

    //  const strduplicates = [...str.toLowerCase()].filter((letter, index) => str.toLowerCase().indexOf(letter) !== index);

    //   const strnumDuplicates = strduplicates.length;
    
    let newarr =[];
      for(let i =0; i<arr.length; i++){
        newarr.push(arr[i] + str[i]);
      }

     const newarrduplicates = newarr.filter((item, index) => newarr.indexOf(item) !== index);
     const newarrnumDuplicates = newarrduplicates.length;

     if(arrnumDuplicates == newarrnumDuplicates ){
        return true;
     }else{
        return false
     }

}
// -------------------------------------------------------------------------------------------------------


module.exports = { recursionPattern, filterLinks, isPalindrome, samePattern };