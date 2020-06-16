/**
 * @author Chris Caudill 
 */


/**
 * Calculates the sum of all multiples of 3 and 5 up to the specified max
 * https://projecteuler.net/problem=1
 * @exports
 * @param {number} max - max number to iterate to
 * @returns {number} - sum of all multiples of 3 and 5 below max
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