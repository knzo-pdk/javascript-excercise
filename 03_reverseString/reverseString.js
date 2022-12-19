const reverseString = function(string) {
    let i = string.length;
    let returningStr = '';
    while(i >= 0) {
        let ch = string.charAt(i);
        returningStr += ch;
        i--;
    }
    return returningStr;

};

// Do not edit below this line
module.exports = reverseString;
