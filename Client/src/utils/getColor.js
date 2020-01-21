/* eslint-disable */
export const getColorFromString = (str) => {
  let num = 0, arr = str.split(''), c, hash;
  arr.forEach((a, i) => num = str.charCodeAt(i) + ((num << 5) - num));
  c = (num & 0x00FFFFFF).toString(16).toUpperCase();
  hash = '00000'.substring(0, 6 - c.length) + c;
  return '#' + hash;
}