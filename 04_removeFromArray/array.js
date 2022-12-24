const removeFromArray = function(array, ...theArgs){

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < theArgs.length; j++) {
            if (theArgs[j] >= 0) {
                if (theArgs[j] === array[i]) {
                    console.log(array[i]);
                    console.log(theArgs[j]);

                    array.splice(i,1);
                    console.log(array);
                }
            }
        }
    }
    return array;


};


removeFromArray([1, 2, 3, 4], 3, 2);

