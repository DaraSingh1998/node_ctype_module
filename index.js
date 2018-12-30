function isAlpha(str) {
  if (str.length === 1 && str.match(/[a-z]/i)) {
    return true;
  }
  else {
    return false;
  }
};
function isBlank(str) {
  if (str.length === 1 && str.match(/\s/i)) {
    return true;
  }
  else if ((str.length === 0)) {
      return true;
  }
  else {
    return false;
  }
};
function isDigit(str){
  if (str.length === 1 && str.match(/\d/i)) {
    return true;
  }
  else {
    return false;
  }
};
function isNum(str){
  if (!isNaN(str)) {
    return true;
  }
  else {
    return false;
  }
};
function isStrUpper(str){
  if (str == str.toUpperCase()) {
    return true;
  }
  else {
    return false;
  }
};
function isStrLower(str){
  if (str == str.toLowerCase()){
    return true;
  }
  else {
    return false;
  }
};
function isUpper(str){
  if (str.length === 1 && str == str.toUpperCase()) {
    return true;
  }
  else {
    return false;
  }
};
function isLower(str){
  if (str.length === 1 && str == str.toLowerCase()){
    return true;
  }
  else {
    return false;
  }
};
function isAlNum(str) {
  if (str.match(/^[a-z0-9]+$/i)) {
    return true;
  }
  else {
    return false;
  }
};
function isStr(str) {
  if (str.match(/^[a-z]+$/i)) {
    return true;
  }
  else {
    return false;
  }
};
module.exports={
  isAlpha,
  isBlank,
  isDigit,
  isStrUpper,
  isStrLower,
  isUpper,
  isLower,
  isNum,
  isAlNum,
  isStr
};
