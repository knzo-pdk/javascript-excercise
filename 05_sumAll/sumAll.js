const sumAll = function(a,b) {
    let sum = 0

    if((a>0 && b>0) && 
    ( (parseInt(a) === a)&& (parseInt(b)=== b)) ){
       
            for (let i = a; i <= b; i++) {
            sum += i;
            }
            //console.log(sum);
        
    } else sum = "ERROR";

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
