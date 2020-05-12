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
          return true;
        }
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

/*So with a bit more looking my solution above doesn't work. If arrOne[0] is the sq.rt of arrTwo[0]
then it will automatically evaluate to true, regardless of whether arrOne[1] or over has the correct result.
I didn't work this out until after I had seen the instructors solution which I've copied out below: */

//The method:
function same(arr1, arr2) {
  //Check if the arrays are the same length, if not return false.
  if(arr1.length !== arr2.length) {
    return false;
  }
  //Create an object to keep track of the frequencies of the numbers in the first array.
  let frequencyCounter1 = {};
  //Create an object to keep track of the frequencies of the number in the second array.
  let frequencyCounter2 = {};
  //Create a loop through the first array and if the val isn't in the object add it with a value of 1
  //Or add one to it's value.
  for(let val of arr1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  //Do the same with the second array and object.
  for(let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  //Console log the frequency objects, so you can see it's working.
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  //Time to compare the objects:
  //If the key in frequencyCounter1 is not in frequencyCounter2**2 return false.
  for(let key in frequencyCounter1){
    if(!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    //If the key in in frequencyCounter2 is not in frequencyCounter1 return false.
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
      return false;
    }
  }
  return true;
}

/*Some examples to try:*/
console.log(same([1, 2, 3], [4, 1, 9])); //true
console.log(same([1, 2, 3], [1, 9])); //false
console.log(same([1, 2, 1], [4, 4, 1])); //false, must be same frequency
