const palindromes = function (str) {
    let re = /[^A-Za-z0-9]/g;
    let lowRegString = str.toLowerCase().replace(re, "");
    let reverseString = lowRegString.split("").reverse().join("");

    return lowRegString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
