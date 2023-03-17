import getNumber from "./getNumber";

const Weights = {
  'font-thin': 100,
  'font-extralight': 200,
  'font-light': 300,
  'font-normal': 400,
  'font-medium': 500,
  'font-semibold': 600,
  'font-bold': 700,
  'font-extrabold': 800,
  'font-black': 900,
}

export default function ConvertFontWeight(weight: number): string {
  const fontWeightClass = getNumber(weight, Weights);
  return fontWeightClass;
}