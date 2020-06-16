var euler = require('../index');

var assert = require('assert');

describe("Project Euler",function () {
    describe("multOf3And5()", function () {
        it("#max=10; Should evaluate to 23", function () {
            assert.equal(euler.multOf3And5(10), 23);
        });
        it("#max=1000; Should evaluate to 233168", function () {
            assert.equal(euler.multOf3And5(1000), 233168);
        });
    });

    describe("evenFibNums()", function () {
        it("#max=10; Should evaluate to 10", function () {
            assert.equal(euler.evenFibNums(10), 10);
        });
        it("#max=50; Should evaluate to 44", function () {
            assert.equal(euler.evenFibNums(50), 44);
        });
        it("#max=100; Should evaluate to 44", function () {
            assert.equal(euler.evenFibNums(100), 44);
        });
    });

    describe("largestPrimeFactor()", function () {
        it("#n=10; Should evaluate to 7", function () {
            assert.equal(euler.largestPrimeFactor(10), 5);
        });
        it("#n=50; Should evaluate to 5", function () {
            assert.equal(euler.largestPrimeFactor(50), 5);
        });
        it("#n=13195; Should evaluate to 29", function () {
            assert.equal(euler.largestPrimeFactor(13195), 29);
        });
        it("#n=25698751364526; Should evaluate to 328513", function () {
            assert.equal(euler.largestPrimeFactor(25698751364526), 328513);
        });
    });
});