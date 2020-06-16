/**
 * @author Chris Caudill 
 */

const { interfaces } = require("mocha");


/**
 * Calculates the sum of all multiples of 3 and 5 up to the specified max
 * https://projecteuler.net/problem=1
 * @exports
 * @param {number} max - max number to iterate to
 * @returns {number} sum of all multiples of 3 and 5 below max
 */
exports.multOf3And5 = (max) => {
    let sum = 0;
    for (let i = 1; i < max; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

/**
 * Sums even fibonnacci numbers that are under the specified max
 * https://projecteuler.net/problem=2
 * @exports
 * @param {number} max - max value to sum fibonacci numbers to
 */
exports.evenFibNums = (max) => {
    let prev = 1;
    let curr = 2;
    let sum = 2;
    while (curr < max) {
        let temp = prev + curr;
        if (temp % 2 === 0 && temp < max) {
            sum += temp;
        }
        prev = curr;
        curr = temp;
    }
    return sum;
}

/**
 * Returns largest prime factor of input number n
 * https://projecteuler.net/problem=3
 * @param {number} n - number to find the largest prime factor of
 */
exports.largestPrimeFactor = (n) => {
    let i;
    for(i = 2; i <= n; i++){
        if(n%i === 0){
            n /= i;
            i--;
        }
    }
    return i;
}

