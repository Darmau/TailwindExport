export default function convertToTailwind(width: number, height: number, color: string): string {
  // 宽度和高度转换
  const widthClass = `w-${Math.round(width / 4)}`;
  const heightClass = `h-${Math.round(height / 4)}`;

  // 颜色转换
  const colorClass = `bg-${color.replace('#', '')}`;

  return `${widthClass} ${heightClass} ${colorClass}`;
}