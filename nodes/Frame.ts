import ConvertOpacity from "../utils/ConvertOpacity";
import ConvertFlexLayout from "../utils/ConvertFlexLayout";
import ConvertWidth from "../utils/ConvertWidth";
import ConvertHeight from "../utils/ConvertHeight";
import ConvertPadding from "../utils/ConvertPadding";
import ConvertSpace from "../utils/ConvertSpace";
import ConvertColors from "../utils/ConvertColor";
import ConvertStroke from "../utils/ConvertStroke";
import ConvertRadius from "../utils/ConvertRadius";
import ConvertEffect from "../utils/ConvertEffect";

//导出frame的宽高、背景颜色、圆角、边框、阴影、padding
export default function Frame(node: SceneNode): string {
  const frameNode = node as FrameNode;

  const visable = frameNode.visible ? '' : 'hidden';
  const opacity = ConvertOpacity(frameNode.opacity);
  const layout = ConvertFlexLayout(frameNode.layoutMode);
  let backgroundColor = '';
  let stroke = 'border-0';
  let width = 'w-auto';
  let height = 'h-auto';

  // 针对autolayout的对齐方式
  const justify = frameNode.primaryAxisAlignItems === 'MIN' ? 'justify-start' : frameNode.primaryAxisAlignItems === 'MAX' ? 'justify-end' : 'justify-center';
  const align = frameNode.counterAxisAlignItems === 'MIN' ? 'items-start' : frameNode.counterAxisAlignItems === 'MAX' ? 'items-end' : 'items-center';

  // 针对autolayout的宽高
  if (layout === 'flex') {
    width = frameNode.primaryAxisSizingMode === 'AUTO' ? 'w-fit' : ConvertWidth(frameNode.width);
    height = frameNode.counterAxisSizingMode === 'AUTO' ? 'h-fit' : ConvertHeight(frameNode.height);
  }
  else {
    height = frameNode.primaryAxisSizingMode === 'AUTO' ? 'h-fit' : ConvertHeight(frameNode.width);
    width = frameNode.counterAxisSizingMode === 'AUTO' ? 'w-fit' : ConvertWidth(frameNode.height);
  }

  //padding
  const padding = ConvertPadding(frameNode.paddingLeft, frameNode.paddingRight, frameNode.paddingTop, frameNode.paddingBottom)

  //items spcing
  const itemsSpacing = ConvertSpace(frameNode.itemSpacing)

  //背景色
  if (frameNode.fills !== figma.mixed) {
    if (frameNode.fills[0].type === "SOLID") {
      backgroundColor = `bg-${ConvertColors(frameNode.fills[0].color)}`
    }
  }

  // 边框
  if (frameNode.strokes && frameNode.strokes.length > 0 && frameNode.strokes[0].type === "SOLID") {
    stroke = ConvertStroke(frameNode.strokes[0].color, frameNode.strokeTopWeight, frameNode.strokeRightWeight, frameNode.strokeBottomWeight, frameNode.strokeLeftWeight)
  } else {
    stroke = '';
  }

  // 圆角
  const radius = ConvertRadius(frameNode.topLeftRadius, frameNode.topRightRadius, frameNode.bottomRightRadius, frameNode.bottomLeftRadius, frameNode.height)

  //阴影和模糊
  const effect = ConvertEffect(Array.from(frameNode.effects))

  return `${layout} ${visable} ${opacity} ${width} ${height} ${align} ${justify} ${padding} ${itemsSpacing} ${backgroundColor} ${stroke} ${radius} ${effect}`
}