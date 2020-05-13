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
    //console.log(anagramCounter1);
    //console.log(anagramCounter2);
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


// The instructors solution:
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm')
