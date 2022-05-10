const add = function () {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (Number.isNaN(arguments[i])) {
            return "Only numbers allowed";
        }
        sum += arguments[i];
    }
    return sum;
};

const subtract = function () {
    let sub = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (Number.isNaN(arguments[i])) {
            return "Only numbers allowed";
        }
        sub -= arguments[i];
    }
    return sub;
};

const sum = function (array) {
    let arr = [...array];
    let sum = arr.reduce(function (total, num) {
        return total + num;
    }, 0);
    return sum;
};

const multiply = function (array) {
    let arr = [...array];
    let mult = arr.reduce(function (total, num) {
        return total * num;
    }, 1);
    return mult;
};

const power = function (base, power) {
    return base ** power;
};

const factorial = function (number) {
    if (number === 0) {
        return 1;
    }
    let arr = [];
    for (let i = 1; i <= number; i++) {
        arr.push(i);
    }

    return arr.reduce(function (total, num) {
        return total * num;
    });
};


// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
