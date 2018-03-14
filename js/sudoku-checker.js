export function UserNumber(userInput) {
  let input = userInput;
  const availableNumbers = [1,2,3,4,5,6,7,8,9];
  for(let i = 0; i < availableNumbers.length; i++)
  {
    if (input == i + 1)
    {
      input = i + 1;
      return input;
    }
  }
  input = "NaN";
  return input;  
}
