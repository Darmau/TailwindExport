import getNumber from "./getNumber";

export default function ConvertRadius(topLeft: number, topRight: number, bottomRight: number, bottomLeft: number, height: number): string {
  let radiusClass = '';
  if (topLeft >= height / 2 && topRight >= height / 2 && bottomRight >= height / 2 && bottomLeft >= height / 2) { 
    // 圆角大于高度一半
    radiusClass = 'rounded-full';
  }
  else if (topLeft === topRight && topRight === bottomRight && bottomRight === bottomLeft) {
    // 四角相等
    radiusClass = getNumber(topLeft, Radius) === 'DEFAULT' ? 'rounded' : `rounded-${getNumber(topLeft, Radius)}`;
  } else if (topLeft === bottomLeft && topRight === bottomRight) {
    // 左边相等，右边相等
    radiusClass = getNumber(topLeft, Radius) === 'DEFAULT' ? 'rounded-l' : `rounded-l-${getNumber(topLeft, Radius)}`;
    radiusClass += getNumber(topRight, Radius) === 'DEFAULT' ? ' rounded-r' : ` rounded-r-${getNumber(topRight, Radius)}`;
  } else if (topLeft === topRight && bottomLeft === bottomRight) {
    // 上边相等，下边相等
    radiusClass = getNumber(topLeft, Radius) === 'DEFAULT' ? 'rounded-t' : `rounded-t-${getNumber(topLeft, Radius)}`;
    radiusClass += getNumber(bottomLeft, Radius) === 'DEFAULT' ? ' rounded-b' : ` rounded-b-${getNumber(bottomLeft, Radius)}`;
  } else {
    // 四边不相等
    radiusClass = getNumber(topLeft, Radius) === 'DEFAULT' ? 'rounded-tl' : `rounded-tl-${getNumber(topLeft, Radius)}`;
    radiusClass += getNumber(topRight, Radius) === 'DEFAULT' ? ' rounded-tr' : ` rounded-tr-${getNumber(topRight, Radius)}`;
    radiusClass += getNumber(bottomRight, Radius) === 'DEFAULT' ? ' rounded-br' : ` rounded-br-${getNumber(bottomRight, Radius)}`;
    radiusClass += getNumber(bottomLeft, Radius) === 'DEFAULT' ? ' rounded-bl' : ` rounded-bl-${getNumber(bottomLeft, Radius)}`;
  }

  return radiusClass;
}

const Radius = {
  "none": 0,
  "sm": 2,
  "DEFAULT": 4,
  "md": 6,
  "lg": 8,
  "xl": 10,
  "2xl": 12,
  "3xl": 16,
}