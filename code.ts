import convertToTailwind from "./utils/ConvertClasses";

figma.showUI(__html__, { themeColors: true, width: 300, height: 240 });

figma.on("selectionchange", () => {
  const node = figma.currentPage.selection[0];

  if (node && node.type === "RECTANGLE") {
    const width = node.width;
    const height = node.height;
    const color = node.fills[0].color;
    const hexColor = `#${Math.round(color.r * 255).toString(16)}${Math.round(color.g * 255).toString(16)}${Math.round(color.b * 255).toString(16)}`;

    const tailwindClasses = convertToTailwind(width, height, hexColor);
    figma.ui.postMessage(tailwindClasses);
  } else {
    figma.ui.postMessage(null);
  }
});