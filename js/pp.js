function checkStorage(available, ordered) {
  
  // Change code below this line
const message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
 

  // Change code above this line
  return message;
}

console.log(checkStorage(100, 50))
console.log(checkStorage(100, 130))
