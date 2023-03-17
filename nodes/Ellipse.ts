import ConvertColors from "../utils/ConvertColor";
import ConvertEffect from "../utils/ConvertEffect";
import ConvertOpacity from "../utils/ConvertOpacity";

export default function Ellipse(node: SceneNode): string {
  const ellipseNode = node as EllipseNode;
  const visable = ellipseNode.visible ? '' : 'hidden';
  const opacity = ConvertOpacity(ellipseNode.opacity);
  const effects = ConvertEffect(Array.from(ellipseNode.effects));

  // 背景色填充
  let backgroundColor = '';
  if (ellipseNode.fills !== figma.mixed) {
    if (ellipseNode.fills[0].type === "SOLID") {
      backgroundColor = `bg-${ConvertColors(ellipseNode.fills[0].color)}`
    }
  }

  return `${visable} ${opacity} ${effects} ${backgroundColor}`
}