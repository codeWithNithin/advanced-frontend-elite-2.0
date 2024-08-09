const arr = [1, 2, 3, 4, 5, 6];

// a function, that takes another function as an argument and returns another function
// arr.map((ele) => {})
// map is a higher order function, because it is accepting callback as an argument
// (ele) => {} this is a callback function, since it is the function that is passd as argument

// 2 disadvantages
// 1. callback hell (readbility problem, minor disadvantages)
// 2. inversion of control

// check callbackhell.com

// Asynchronous programming

// 2 types of programming
// 1. synchronous programming
// - sequence by sequence code will execute
// - line by line code gets executed
// - current line code execution takes time, then its next set of code will have to wait
// 2. asynchronous programming
// - code doesnt wait for its current line to execute, that task will be sent to background
// - here all the other takss will be executed.

// Default nature of JS?
// - any native piece of JS code, is always synchronous in nature
// - because it is single threaded.
