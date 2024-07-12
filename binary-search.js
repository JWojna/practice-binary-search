const linearSearch = (arr, target) => arr.indexOf(target);
  // Can you solve this in one line?


const binarySearch =(arr, target) => {
  // Set integers pointing to the high and low range of possible indices
  let high = arr.length - 1;
  let low = 0;

  // While high and low indices do not overlap...
  while (low <= high) {
    // Find the midpoint between high and low indices
    let midpoint = Math.floor((high + low) / 2); //! have to floor in order to handle odd sized arr
    // Compare the target value to the midpoint value
    // If the target equals the midpoint...
      // Return the midpoint index
    if (target === arr[midpoint]) return midpoint;

    // If the target is higher than the midpoint...
    if (target > midpoint) {
      // Move the low pointer to midpoint + 1
      low = midpoint + 1;
      // If the target is less than the midpoint...
    } else {
      // Move the high pointer to midpoint - 1
      high = midpoint -  1;
    }

  }
  // Return -1 if the loop exits with overlapping pointers
  return -1;
}


module.exports = [linearSearch, binarySearch]
