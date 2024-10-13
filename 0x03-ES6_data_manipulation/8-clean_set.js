export default function cleanSet(set, startString) {
  const strArr = [];
  if (startString === '') return '';
  for (const string of set) {
    if (string.startsWith(startString)) strArr.push(string.split(startString)[1]);
  }
  return String(strArr.join('-'));
}
