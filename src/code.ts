import Ellipse from "../nodes/Ellipse";
import Frame from "../nodes/Frame";
import Rectangle from "../nodes/Rectangle";
import Text from "../nodes/Text";

figma.showUI(__html__, { themeColors: true, width: 300, height: 240 });

function getTailwindClasses() {
  const node = figma.currentPage.selection[0];
  let tailwindClasses = "No element selected"

  if (!node) {
    figma.ui.postMessage(tailwindClasses);
    return;
  }

  switch (node.type) {
    case "TEXT": tailwindClasses = Text(node); break;
    case "FRAME": tailwindClasses = Frame(node); break;
    case "RECTANGLE": tailwindClasses = Rectangle(node); break;
    case "ELLIPSE": tailwindClasses = Ellipse(node); break;
    default: tailwindClasses = "The selected element does not currently support"; break;
  }

  figma.ui.postMessage(tailwindClasses)

};

figma.on("selectionchange", getTailwindClasses);