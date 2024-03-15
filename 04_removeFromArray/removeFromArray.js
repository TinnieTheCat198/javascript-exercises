const removeFromArray = function(array) {
    let lengthArray = array.length;
    let argumentsLength = arguments.length;

    for(let deletedNumIndex = 1; deletedNumIndex < argumentsLength; deletedNumIndex++){
        let deletedNum = arguments[deletedNumIndex];
        for(let i = 0; i < lengthArray; i++){
            if (deletedNum === array[i]){
                for(let j = i; j < lengthArray - 1; j++){
                    array[j] = array[j+1];
                }
                array.pop();
                --lengthArray;
                --i;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
