/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100])); // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt)); // 3

/*******************************************************************************/

let minValueCallback = function(array, cd) {
    if (cd === undefined) {
        let min1 = array[0]
        for (i = 0; i < array.length; i++) {
            if (array[i] < min1) {
                min1 = array[i]
            }
        }
        return min1
    } else {
        let min = cd(array[0])
        for (i = 0; i < array.length; i++) {
            if (cd(array[i]) < min) {
                min = cd(array[i])
            }
        }
        return min
    }

}





console.log(minValueCallback([64, 25, 49, 9, 100])); // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt)); // 3




/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
