const sumAll = function (n1, n2) {
    if (n1 < 0 || n2 < 0 || Number.isInteger(n1) == false || Number.isInteger(n2) == false) {
        return "ERROR";
    }

    let min = n1;
    let max = n2;
    if (n1 > n2) {
        max = n1;
        min = n2;
    }

    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
