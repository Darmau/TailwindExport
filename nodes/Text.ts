import ConvertFontSize from "../utils/ConvertFontSize";
import ConvertFontWeight from "../utils/ConvertFontWeight";
import ConvertTextAlign from "../utils/ConvertTextAlign";
import ConvertOpacity from "../utils/ConvertOpacity";
import ConvertColors from "../utils/ConvertColor";

export default function Text(node: SceneNode): string {
  const textNode = node as TextNode;

  let fontSize = 'text-base';
  let fontWeight = 'font-normal';
  let fontColor = 'text-black';

  const textAlign = ConvertTextAlign(textNode);

  if (textNode.fontSize !== figma.mixed) {
    fontSize = ConvertFontSize(textNode.fontSize);
  }

  if (textNode.fontWeight !== figma.mixed) {
    fontWeight = ConvertFontWeight(textNode.fontWeight);
  }

  const opacity = ConvertOpacity(textNode.opacity);

  if (textNode.fills !== figma.mixed) {
    if (textNode.fills[0].type === "SOLID") {
      fontColor = `text-${ConvertColors(textNode.fills[0].color)}`
    }
  }
  
  return `${textAlign} ${fontSize} ${fontWeight} ${opacity} ${fontColor}`;
}