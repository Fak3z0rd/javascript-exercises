const removeFromArray = function (array) {
    newArray = [...array];

    for (j = 1; j < arguments.length; j++) {
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i] === arguments[j]) {
                newArray.splice(i, 1);
            }
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
