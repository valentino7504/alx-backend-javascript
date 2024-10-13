export default function cleanSet(set, startString) {
  if (startString.length === 0 || !startString) return '';
  return [...set].filter((str) => (str ? str.startsWith(startString) : ''))
    .map((str) => (str ? str.slice(startString.length) : ''))
    .join('-');
}
