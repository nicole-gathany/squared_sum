//Complete the square sum function so that it squares each number passed into it and then sums the results together.

//For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

//parameter: max length 100 integers, never be empty, always integers

function squareSum (arrNums) {
	//square each integer
  //add squares together
	//return integer
  return arrNums.reduce((a, b) => {
  	return a + Math.pow(b, 2)
  }, 0)
}
//time complexity: O(n)
//space complexity: memory O(n) because created new array
//test
console.log(squareSum([5, 2, 10]) === 129)
console.log(squareSum([2]) === 4)

