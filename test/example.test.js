// IMPORT MODULES under test here:
// import example from '../src/example.js';
import isYes from '../src/isYes.js';
const test = QUnit.test;

QUnit.module('testing out isYes');

test('yes is true', assert => {
    //Arrange
    // Set up your parameters and expectations
    const input = 'Yes';
    const expected = true;
    //Act 
    // Call the function you're testing and set the result to a const
    const isTrue = isYes(input);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(isTrue, expected);
});

test('no is false', assert => {
    const input = 'no';
    const expected = false;

    const isTrue = isYes(input);

    assert.equal(isTrue, expected);

});

test('N is false', assert => {
    const input = 'N';
    const expected = false;

    const isTrue = isYes(input);

    assert.equal(isTrue, expected);

});

test('Y is true', assert => {
    const input = 'Y';
    const expected = true;

    const isTrue = isYes(input);

    assert.equal(isTrue, expected);
});