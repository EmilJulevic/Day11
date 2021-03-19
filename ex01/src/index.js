var myArray = [2, 4, 0, 8, 10]
myArray[0];
myArray[1];
myArray[2];
myArray[3];
myArray[4];

function myArrayFunction(arr) {
    var myItems = [...arr];
    myItems[2] = 6;
    return myItems;
}

console.log(myArrayFunction(myArray));
module.exports = myArrayFunction;
