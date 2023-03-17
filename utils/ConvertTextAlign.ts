export default function ConvertTextAlign(node: TextNode) {
  switch (node.textAlignHorizontal) {
    case 'LEFT': return 'text-left';
    case 'CENTER': return 'text-center';
    case 'RIGHT': return 'text-right';
    case 'JUSTIFIED': return 'text-justify';
  }
}