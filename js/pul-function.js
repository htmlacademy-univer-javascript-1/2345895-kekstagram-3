

function maxLineString(string, length) {
  return string.length <= length;
}
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export { getRandomNumber };
export { maxLineString };
