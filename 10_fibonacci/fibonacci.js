const fibonacci = function (number) {
    if (number <= 0) {
        return "OOPS";
    }
    let n1 = 0;
    let n2 = 1;
    let nth = 0;
    let i = 1;
    let x = [n2];
    while (i < number) {
        nth = n1 + n2;
        x.push(nth);
        n1 = n2;
        n2 = nth;
        i++;
    }
    return x[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
