import ConvertColors from "./ConvertColor";
import getNumber from "./getNumber";

export default function ConvertStroke(color: RGB, top: number, right: number, bottom: number, left: number): string {
  const strokeColor = ConvertColors(color);
  let strokeWidth = ''
  if(top === right && right === bottom && bottom === left) {
    strokeWidth = getNumber(top, borderWidths) === 'DEFAULT' ? 'border' : `border-${getNumber(top, borderWidths)}`;
  } else if (top === bottom && left === right) {
    strokeWidth = `border-y-${getNumber(top, borderWidths)} border-x-${getNumber(left, borderWidths)}`;
  } else if (top === bottom) {
    strokeWidth = `border-y-${getNumber(top, borderWidths)} border-l-${getNumber(left, borderWidths)} border-r-${getNumber(right, borderWidths)}`;
  } else if (left === right) {
    strokeWidth = `border-x-${getNumber(left, borderWidths)} border-t-${getNumber(top, borderWidths)} border-b-${getNumber(bottom, borderWidths)}`;
  } else {
    strokeWidth = `border-t-${getNumber(top, borderWidths)} border-r-${getNumber(right, borderWidths)} border-b-${getNumber(bottom, borderWidths)} border-l-${getNumber(left, borderWidths)}`
  }
  return `border-${strokeColor} ${strokeWidth}`
}

const borderWidths = {
  "0": 0,
  "DEFAULT": 1,
  "2": 2,
  "4": 4,
  "8": 8,
}