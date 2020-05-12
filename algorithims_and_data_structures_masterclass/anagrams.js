//Anagrams Challenge
//
//Given two strings, write a function to determine if the
//second string is an anagram of the first. An anagram is a word,
//or phrase, or name formed by rearranging the letters of another, such as
//cinema formed from iceman.
//
//The method:
//Create a function:
function validAnagram(x, y) {
  //Check if the arrays are the same length or return false:
  if(x.length !== y.length){
    return false;
  } else {
    //Create an object to count the frequency of characters in x:
    anagramCounter1 = {};
    //Create an object to count the frequency of characters in y:
    anagramCounter2 = {};
    //Loop through x counting the number of each characters into anagramCounter1:
    for(let char of x) {
      anagramCounter1[char] = (anagramCounter1[char] || 0) + 1;
    }
    //Do the same with y and anagramCounter2:
    for(let char of y) {
      anagramCounter2[char] = (anagramCounter2[char] || 0) + 1;
    }
    //Check your outputs:
    console.log(anagramCounter1);
    console.log(anagramCounter2);
    //Check the characters from anagramCounter1 are in anagramCounter2 the required number of times:
    for(let val in anagramCounter1) {
      if(!(val in anagramCounter2)) {
        return false;
      }
      if((anagramCounter2[char] != anagramCounter1[char])) {
        return false;
      }
    }
  }
  return true;
}
//
//
//
// some examples to try:
validAnagram("", ""); //true
validAnagram('aaz', 'zza'); //false
validAnagram('anagram', 'nagaram'); //true
validAnagram('rat', 'car'); //false
validAnagram('awesome', 'awesom'); //false
validAnagram('qwerty', 'qertwy'); //true
validAnagram('texttwisttime', 'timetwisttext'); //true
