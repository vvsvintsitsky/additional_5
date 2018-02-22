module.exports = function check(str, bracketsConfig) {
  var bracketStack = [];
  var currentChar;
  
  for(let i = 0; i < str.length; i++) {
    currentChar = str.charAt(i);
    for(let j = 0; j < bracketsConfig.length; j++) {

      if(currentChar == bracketsConfig[j][0] && bracketsConfig[j][0] == bracketsConfig[j][1]) {
        if(currentChar == bracketStack[bracketStack.length -1]) {
          bracketStack.pop();
        } else {
          bracketStack.push(currentChar);
        }
      } else {
        if(currentChar == bracketsConfig[j][0]) {
          bracketStack.push(currentChar);
        } else if(currentChar == bracketsConfig[j][1]) {
          if(bracketStack.pop() != bracketsConfig[j][0]) {
            return false;
          }
        }
      }
    }
  }
  if(bracketStack.length != 0) {
    return false;
  }
  return true;
}
