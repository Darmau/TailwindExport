export default function ConvertFlexLayout(layout: string): string {
  switch (layout) {
    case 'HORIZONTAL':
      return 'flex';
    case 'VERTICAL':
      return 'flex-col';
    default:
      return '';
  }
}