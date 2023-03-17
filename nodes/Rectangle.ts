import ConvertColors from "../utils/ConvertColor";
import ConvertEffect from "../utils/ConvertEffect";
import ConvertOpacity from "../utils/ConvertOpacity";
import ConvertRadius from "../utils/ConvertRadius";
import ConvertStroke from "../utils/ConvertStroke";

export default function Rectangle(node: SceneNode): string {
  const recNode = node as RectangleNode;
  const visable = recNode.visible ? '' : 'hidden';
  const opacity = ConvertOpacity(recNode.opacity);
  const effects = ConvertEffect(Array.from(recNode.effects));
  const radius = ConvertRadius(recNode.topLeftRadius, recNode.topRightRadius, recNode.bottomRightRadius, recNode.bottomLeftRadius, recNode.height)

  // 背景色填充
  let backgroundColor = '';
  if (recNode.fills !== figma.mixed) {
    if (recNode.fills[0].type === "SOLID") {
      backgroundColor = `bg-${ConvertColors(recNode.fills[0].color)}`
    }
  }

  // 边框
  let stroke = 'border-0';
  if (recNode.strokes && recNode.strokes.length > 0 && recNode.strokes[0].type === "SOLID") {
    stroke = ConvertStroke(recNode.strokes[0].color, recNode.strokeTopWeight, recNode.strokeRightWeight, recNode.strokeBottomWeight, recNode.strokeLeftWeight)
  } else {
    stroke = '';
  }

  return `${visable} ${opacity} ${effects} ${radius} ${backgroundColor} ${stroke}`
}