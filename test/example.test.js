// IMPORT MODULES under test here:
// import example from '../src/example.js';
import isYes from /src/isYes.js
const test = QUnit.test;

test('testing the isYes function', function (assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const
    const isTrue = isYes('yes');

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(isYes, true);
});
