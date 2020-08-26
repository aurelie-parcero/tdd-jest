// Implement the sum function here

function getSum(a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw new Error('Parameter is not a number!');
    }
    return a + b;
}

module.exports = getSum;

//getSum('Hello', 5);