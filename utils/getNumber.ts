export default function getNumber(number: number, preset: Object): string {
  let minDifference = Infinity;
  let nearestKey: string = '';
  for(const [key, value] of Object.entries(preset)) {
    const difference = Math.abs(number - Number(value));
    if (difference < minDifference) {
      minDifference = difference;
      nearestKey = key;
    }
  }
  return nearestKey;
}