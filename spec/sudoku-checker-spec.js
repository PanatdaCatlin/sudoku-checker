import {UserNumber} from './../js/sudoku-checker.js';

describe('isNumber', function() {

  it('should test that all inputs are numbers', function() {
    var input = new UserNumber(3);
    expect(input.number).toEqual(3);
  });
});
describe('isNotNumber', function() {

  it('should test that all inputs are numbers', function() {
    var input = new UserNumber("r");
    expect(input.isNumber()).toEqual("NaN");
  });
});
