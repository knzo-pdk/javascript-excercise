const removeFromArray = function(array, number) {
    let i = 0;
    let length = array.length-1;
    let returnArr = [length];
    while (i < length) {
        if (array[i] === number) {
            returnArr[i] = array[i+1];
        } else {
            returnArr[i] = array[i];
        }
        i++;
    }
    return returnArr;
};

// Do not edit below this line
module.exports = removeFromArray;
