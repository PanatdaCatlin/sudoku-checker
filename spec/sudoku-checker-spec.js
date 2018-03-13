import {UserNumber} from './../js/userNumber.js';

describe('isNumber', function() {

  it('should test that all inputs are numbers', function() {
    var input = new UserNumber(3);
    expect(input.number).toEqual(3);
  });
});
