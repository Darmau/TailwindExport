import getNumber from "./getNumber";

const Heights = {
  "h-0": "0",
  "h-px": "1",
  "h-0.5": "2",
  "h-1": "4",
  "h-1.5": "6",
  "h-2": "8",
  "h-2.5": "10",
  "h-3": "12",
  "h-3.5": "14",
  "h-4": "16",
  "h-5": "20",
  "h-6": "24",
  "h-7": "28",
  "h-8": "32",
  "h-9": "36",
  "h-10": "40",
  "h-11": "44",
  "h-12": "48",
  "h-14": "56",
  "h-16": "64",
  "h-20": "80",
  "h-24": "96",
  "h-28": "112",
  "h-32": "128",
  "h-36": "144",
  "h-40": "160",
  "h-44": "176",
  "h-48": "192",
  "h-52": "208",
  "h-56": "224",
  "h-60": "240",
  "h-64": "256",
  "h-72": "288",
  "h-80": "320",
  "h-96": "384",
}

export default function ConvertHeight(height: number): string {
  const heightClass = getNumber(height, Heights);

  return heightClass;
}