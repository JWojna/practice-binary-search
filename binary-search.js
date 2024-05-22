 const linearSearch = (arr, target) => arr.indexOf(target);

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let high = arr.length - 1;
  let low = 0;


  // While high and low indices do not overlap...
  while (low <= high) {
      // Find the midpoint between high and low indices
      let midpoint = Math.floor((high + low) / 2)
      // Compare the target value to the midpoint value
      if (arr[midpoint] === target) {
        // If the target equals the midpoint...
        // Return the midpoint index
        return midpoint
      } else if (arr[midpoint] < target) {
        // If the target is higher than the midpoint...
        // Move the low pointer to midpoint + 1
        low = midpoint + 1;
      } else {
        // If the target is less than the midpoint...
        // Move the high pointer to midpoint - 1
        high = midpoint -1;
      }
    }

  // Return -1 if the loop exits with overlapping pointers
  return -1;
}

let arr;

const fillArr = () => {

  arr = [];

  for (let i = 0 ; i < 1000000 ; i++) {
    arr.push(i);
  }

}

fillArr(arr);

console.log(binarySearch(arr, 20));


module.exports = [linearSearch, binarySearch]
