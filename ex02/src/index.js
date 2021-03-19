var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61],
];

function myArrayFunction(arr) {
    var newTemps = [...arr];
    var averageDayTemp = [];
    var i;
    var j;
    for (i = 0; i < 5; i++) {
        var tmp = 0;
        for (j = 0; j < 4; j++) {
            tmp += newTemps[i][j];
        }
        averageDayTemp.push(tmp / 4);
    }

    return averageDayTemp;
}

console.log(myArrayFunction(temps));
module.exports = myArrayFunction;