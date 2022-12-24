const removeFromArray = function(array, ...theArgs){
    var k = 0;
    while(k < theArgs.length){
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j <= theArgs.length; j++) {
                if (theArgs[j]) {
                    if (theArgs[j] === array[i]) {
                        array.splice(i,1);
                    }
                }
            }
        }
        k++;
    }
    return array;


};

// Do not edit below this line
module.exports = removeFromArray;

