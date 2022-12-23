const removeFromArray = function(array, ...theArgs){
    let i = 0;
    let length = array.length-1;
    var returnArr = new Array(length);
    while (i < length) {
        for (let j = 0; j < theArgs.length-1; j++) {
            if (array[i] === theArgs[j]) {
                returnArr[i] = theArgs[j];
            }
        }
        i++;
    }
    return returnArr;
};

// Do not edit below this line
module.exports = removeFromArray;
