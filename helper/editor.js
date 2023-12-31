import blockBasic from "grapesjs-blocks-basic";
import FormPlugin from "grapesjs-plugin-forms";
import grapesjsPluginExport from "grapesjs-plugin-export";
import {panels, deviceManager, addEditorCommand} from "./editorutils"

const editorSettings = {
  container: "#gjs",
  height: "100%",
  fromElement: true,
  plugins: [blockBasic, FormPlugin, grapesjsPluginExport,],
  layerManager: {
    appendTo: "#layers-container",
  },
  blockManager: {
    appendTo: "#blocks",
  },

  deviceManager: {
    devices: [{
        name: 'Desktop',
        width: '', // default size
      }, {
        name: 'Mobile',
        width: '320px', // this value will be used on canvas width
        widthMedia: '480px', // this value will be used in CSS @media
    }]
  },
  styleManager: {
    appendTo: "#style-manager-container",
    sectors: [
      {
        name: "General",
        open: false,
        buildProps: [
          "float",
          "display",
          "position",
          "top",
          "right",
          "left",
          "bottom",
        ],
      },
      {
        name: "Dimension",
        open: false,
        buildProps: [
          "width",
          "height",
          "max-width",
          "min-height",
          "margin",
          "padding",
        ],
      },
      {
        name: "Typography",
        open: false,
        buildProps: [
          "font-family",
          "font-size",
          "font-weight",
          "letter-spacing",
          "color",
          "line-height",
          "text-align",
          "text-shadow",
        ],
      },
      {
        name: "Decorations",
        open: false,
        buildProps: [
          "border-radius-c",
          "background-color",
          "border-radius",
          "border",
          "box-shadow",
          "background",
        ],
      },
      {
        name: "Extra",
        open: false,
        buildProps: ["opacity", "transition", "perspective", "transform"],
        properties: [
          {
            type: "slider",
            property: "opacity",
            defaults: 1,
            step: 0.01,
            max: 1,
            min: 0,
          },
        ],
      },
    ],
  },
  selectorManager: {
    appendTo: "#selectors-container",
  },
  traitManager: {
    appendTo: "#traits-container",
  },
  panels: {
    defaults: [
      {
        id: "layers",
        el: "#layers",
        resizable: {
          tc: 0,
          cr: 1,
          bc: 0,
          keyWidth: "flex-basis",
        },
      },
      {
        id: "styles",
        el: "#style-manager",
        resizable: {
          tc: 0,
          cr: 0,
          cl: 1,
          bc: 0,
          keyWidth: "flex-basis",
        },
      },
    ],
  },
};

export default editorSettings;
