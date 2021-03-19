function myBouncer(arr) {
    var falsyValues;
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        falsyValues = Boolean(arr[i]);

        if (falsyValues === true) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(myBouncer([7, "ate", "", false, 9]));
console.log(myBouncer(["a", "b", "c"]));
console.log(myBouncer([false, null, 0, NaN, undefined]));
console.log(myBouncer([null, NaN, 1, 2, undefined]));
module.exports = myBouncer;