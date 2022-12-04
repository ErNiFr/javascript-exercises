const repeatString = function(word, num) {
    if (num < 0) {
        return "ERROR";
    }

    let completeString = "";

    for (let i = 0; i < num; i++) {
        completeString += word;
    }
    
    return completeString;
};

// Do not edit below this line
module.exports = repeatString;
