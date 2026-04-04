export default function cleanSet(set, startString) {
  // If startString is empty or not a string, return empty string
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  
  // Filter values that start with startString, extract the rest, and join with '-'
  const result = Array.from(set)
    .filter(value => typeof value === 'string' && value.startsWith(startString))
    .map(value => value.slice(startString.length))
    .join('-');
  
  return result;
}
