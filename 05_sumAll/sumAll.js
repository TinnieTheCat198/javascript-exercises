const sumAll = function(firstNum,secondNum) {
    if (typeof firstNum !== 'number' || typeof secondNum !== 'number')
        return 'ERROR';
    if (firstNum < 0 || secondNum < 0)
        return 'ERROR';
    let upperBound, lowerBound;
    if (firstNum < secondNum){
        lowerBound = firstNum;
        upperBound = secondNum;
    }
    else {
        lowerBound = secondNum;
        upperBound = firstNum;
    }
    let sum = 0;
    for(let num = lowerBound; num <= upperBound; num++){
        sum += num;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
