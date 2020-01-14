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

test('Y is true', assert => {
    //Arrange    
    const input = 'Y';
    const expected = true;
    //Act
    const isTrue = isYes(input);
    //Assert
    assert.equal(isTrue, expected);
});

test('ya is true', assert => {
    //Arrange    
    const input = 'ya';
    const expected = true;
    //Act
    const isTrue = isYes(input);
    //Assert
    assert.equal(isTrue, expected);
});

test('yea is true', assert => {
    //Arrange    
    const input = 'yea';
    const expected = true;
    //Act
    const isTrue = isYes(input);
    //Assert
    assert.equal(isTrue, expected);
});

test('no is false', assert => {
    //Arrange    
    const input = 'no';
    const expected = false;
    //Act
    const isFalse = isYes(input);
    //Assert
    assert.equal(isFalse, expected);

});

test('nah is false', assert => {
    //Arrange    
    const input = 'nah';
    const expected = false;
    //Act
    const isFalse = isYes(input);
    //Assert
    assert.equal(isFalse, expected);

});

test('N is false', assert => {
    //Arrange    
    const input = 'N';
    const expected = false;
    //Act
    const isFalse = isYes(input);
    //Assert
    assert.equal(isFalse, expected);

});