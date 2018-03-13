export function UserNumber(input) {
  this.number = input;
  this.isNumber = function(){
    if (typeof input == typeof 5)
    {
      return input;
    }else{
      input = "NaN";
      return input;
    }
  }
}
