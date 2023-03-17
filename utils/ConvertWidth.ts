import getNumber from "./getNumber";

const Widths = {
  "w-0": 0,
  "w-px": 1,
  "w-0.5": 2,
  "w-1": 4,
  "w-1.5": 6,
  "w-2": 8,
  "w-2.5": 10,
  "w-3": 12,
  "w-3.5": 14,
  "w-4": 16,
  "w-5": 20,
  "w-6": 24,
  "w-7": 28,
  "w-8": 32,
  "w-9": 36,
  "w-10": 40,
  "w-11": 44,
  "w-12": 48,
  "w-14": 56,
  "w-16": 64,
  "w-20": 80,
  "w-24": 96,
  "w-28": 112,
  "w-32": 128,
  "w-36": 144,
  "w-40": 160,
  "w-44": 176,
  "w-48": 192,
  "w-52": 208,
  "w-56": 224,
  "w-60": 240,
  "w-64": 256,
  "w-72": 288,
  "w-80": 320,
  "w-96": 384,
}

export default function ConvertHeight(height: number): string {
  const widthClass = getNumber(height, Widths);

  return widthClass;
}