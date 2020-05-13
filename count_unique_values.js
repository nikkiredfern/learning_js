//Count Unique Values
//
//Implement a function called countUniqueValues, which accepts
//a sorted array, and counts the unique values in the array.
//There can be negative numbers in the array, but it will always
//be sorted.
//
//Create the function:
function countUniqueValues(arr) {
  //create a counter for the unique values:
  let unique = 1;
  //create position counters:
  let left = 0;
  let right = 1;
  // if the arr is empty, set unique to 0.
  if (arr.length === 0) {
    unique = 0
  } else {
    //while right is less than the lenght of the array, minus 1
    while (right <= arr.length - 1) {
      //if the arr is empty return 0
      //if right is equal to left move the right counter on one
      if (arr[right] === arr[left]) {
        //console.log(left);
        //console.log(right);
        right++;
      }
      //if the right is not equal to left increase the unique counter by one,
      //set the left to be the right position in the array, and increment right
      //by one.
      else if (arr[right] !== arr[left]) {
        //console.log('here')
        unique++;
        left = right;
        right++;
      }
    }
  }
  //Once the loop has run, return the unique variable.
  console.log(unique);
}

//Examples to try:
countUniqueValues([1, 1, 1, 1, 1, 1, 2]); //2
countUniqueValues([1, 2, 3, 4, 4, 4, 3, 3, 12, 12, 13]); //7
countUniqueValues([]); //0
countUniqueValues([-2, -1, -1, 0, 1]); //4

//The instructors solution:
function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
