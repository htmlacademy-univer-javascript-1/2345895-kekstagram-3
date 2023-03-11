function randNumber (a, b) {

    const first = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const second = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    const result = Math.random() * (second - first + 1) + lower;

    return Math.floor(result);
  }
  
  function maxLineString (string, length) {
    return string.length <= length;
  }