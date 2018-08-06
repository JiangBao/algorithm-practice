const toLowerCase = (str) => {
  let res = '';

  for (let i = 0, len = str.length; i < len; i++) {
    if (/[A-Z]/.test(str[i])) {
      res += str[i].toLowerCase();
    } else {
      res += str[i];
    }
  }

  return res;
}