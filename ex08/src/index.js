function myMutation(arr) {
    var newString1;
    var newString2;
    newString1 = arr[0].toLowerCase();
    newString2 = arr[1].toLowerCase();

    for (i = 0; i < newString2.length; i++) {
        if (newString1.indexOf(newString2[i]) < 0) return false;
    }

    return true;
}

console.log(myMutation(["hello", "hey"]));
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["Marry", "Amy"]));
console.log(myMutation(["Marry", "Aarmy"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["voodoo", "no"]));
console.log(myMutation(["ate", "date"]));
console.log(myMutation(["Tiger", "Zebra"]));
console.log(myMutation(["Noel", "Ole"]));
module.exports = myMutation;