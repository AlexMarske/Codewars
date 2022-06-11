// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

//Create the function 
function queueTime(customers, n) {
  //Creates an array with undefined slots up to n. All slots then filled with 0.
  let tills = Array(n).fill(0);
  //On the customers arr, run this function for every element:
  customers.forEach((customer) => {
    //Stores the index of the lowest # slot to come up in the tills arr. 
    //Spread operator to unpack tills arr to be passed into the Math.min
    let nextTill = tills.indexOf(Math.min(...tills))
    //Adds current customer (arr element) to lowest queue slot
    tills[nextTill] += customer;
  });
  //Returns greatest value from unpacked tills arr... weakest link = overall waitime 
  return Math.max(...tills);
}