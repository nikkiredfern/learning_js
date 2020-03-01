/*Frequency Counter Pattern*/

/*Create a function called same that takes two arrays as arguments and returns true
if all the items in the first array are squared in the second array. The number of times
(frequency) that a number is squared must also be taken into account. */

/*Two inputs go into the problem. I'll use 'arrOne' for the array to be squared and
'arrTwo' for the array with the squared result.*/

//The function should return true or false (as booleans).

//The method:
//Create a function called same that takes two arguments arrOne and arrTwo:
function same(arrOne, arrTwo) {
  //Check that the arrays are both of the same length or return false:
  if (arrOne.length != arrTwo.length) {
    return false;
  } else {
    //Sort the arrays so that the numbers can be compared.
    arrOne = arrOne.sort();
    arrTwo = arrTwo.sort();
    //Create a forLoop to loop through the array:
    for (i = 0; i <= arrOne.length; i++){
        if (arrOne[i] == Math.sqrt(arrTwo[i])) {
          continue;
        }
    return true;
    }
  }
  //Otherwise return false:
  return false;
}


/*Some examples to try:*/
console.log(same([1, 2, 3], [4, 1, 9])); //true
console.log(same([1, 2, 3], [1, 9])); //false
console.log(same([1, 2, 1], [4, 4, 1])); //false, must be same frequency

/*Things this I would clarify:
- Is the problem looking for a Boolean or a string to be returned. The casing is lower inspect
in the example, although commonsense says a Boolean rather than string.*/


/*for (i = 0; i <= arrOne.length; i++) {
  if (i != arrOne.length || arrTwo[i] != arrOne[i] ** 2) ? return False :
//Check if the ith item in arrTwo is equal to the square of arrOne[i]:
  if (arrTwo[i] != arrOne[i] ** 2) ? return False
//Or return True
: return True;
}*/
