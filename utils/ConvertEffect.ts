export default function ConvertEffect(effects: Effect[]) {
  let effectClass = '';
  effects.forEach((effect) => {
    if (effect.type === 'INNER_SHADOW') {
      effectClass += `shadow-inner`;
    } else if (effect.type === 'DROP_SHADOW') {
      effectClass += getShadow(effect.radius);
    } else if (effect.type === 'LAYER_BLUR') {
      effectClass += getBlur(effect.radius);
    } else if (effect.type === "BACKGROUND_BLUR") {
      const bgBlur = effect.radius === 0 ? '' : `bg-${getBlur(effect.radius)}`;
      effectClass += bgBlur;
    }
  });
  return effectClass;
}

// 简单根据blur值返回相应名称
function getShadow(radius: number) {
  if (radius === 0) {
    return '';
  } else if (radius <= 2) {
    return 'shadow-sm';
  } else if (radius <= 3) {
    return 'shadow';
  } else if (radius <= 6) {
    return 'shadow-md';
  } else if (radius <= 15) {
    return 'shadow-lg';
  } else if (radius <= 25) {
    return 'shadow-xl';
  } else return 'shadow-2xl';
}

function getBlur(radius: number) {
  if (radius === 0) {
    return '';
  } else if (radius <= 4) {
    return `blur-sm`;
  } else if (radius <= 8) {
    return `blur`;
  } else if (radius <= 12) {
    return `blur-md`;
  } else if (radius <- 16) {
    return `blur-lg`;
  } else if (radius <= 24) {
    return `blur-xl`;
  } else if (radius <= 40) {
    return `blur-2xl`;
  } else return `blur-3xl`;
}