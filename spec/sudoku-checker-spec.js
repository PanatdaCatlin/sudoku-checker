import {UserNumber} from './../js/sudoku-checker.js';

describe('isNumber', function() {

  it('should test that all inputs are numbers', function() {
    let input = UserNumber(9);
    console.log(input);
    expect(input).toEqual(9);
  });
});
describe('isNotNumber', function() {

  it('should test that all inputs are numbers', function() {
    let input = UserNumber("r");
    console.log(input);
    expect(input).toEqual('NaN');
  });
});
