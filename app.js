console.log('function that sum all the number with best performance');

function sumThemUp(listOfNumber) {
    // so here is the simple solution (not the best)
    var result = 0;
   for(let i = 0; i < listOfNumber.length; i++) {
    result += listOfNumber[i];// this is O(N)
   }

   return result;
}

function sumThemInOneLine(listOfNumber) {
  return listOfNumber.reduce((num1, num2) => {return num1 + num2}, 0);
}

function sumThemRecursively(listOfNumber) {
    var result = 0;
    if(listOfNumber.length > 0) {
        result += listOfNumber[0];
        listOfNumber.shift();
        return result += sumThemBetter(listOfNumber);
    }
    return result;
}

console.log('here is the result using for loop');
console.log(sumThemUp([2,3,4,5]));

console.log('here is the resultusing recursive function');
console.log(sumThemRecursively([2,3,4,5]));

console.log('here is the result using reduce 1 liner function');
console.log(sumThemInOneLine([2,3,4,5]));
