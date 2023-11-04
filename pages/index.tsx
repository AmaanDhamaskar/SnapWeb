import { useEffect } from "react";
import grapesjs from "grapesjs";
import editorSettings from "../helper/editor";

export default function Home() {
  useEffect(() => {
    // @ts-ignore
    const editor = grapesjs.init(editorSettings);

    editor.Panels.addPanel({
      id: 'panel-top',
      el: '.panel__top',
    });
    editor.Panels.addPanel({
      id: 'basic-actions',
      el: '.panel__basic-actions',
      buttons: [
        {
          id: 'visibility',
          active: true, // active by default
          className: 'btn-toggle-borders',
          label: '<b>B</b>',
          command: 'sw-visibility', // Built-in command
        }, {
          id: 'export',
          className: 'btn-open-export',
          label: '<b>View</b>',
          command: 'export-template',
          context: 'export-template', // For grouping context of buttons from the same panel
        },
      ],
    });
    //Device Panel
    editor.Panels.addPanel({
      id: 'panel-devices',
      el: '.panel__devices',
      buttons: [{
          id: 'device-desktop',
          label: '<i class="fa fa-television"></i>',
          command: 'set-device-desktop',
          active: true,
          togglable: false,
        }, {
          id: 'device-mobile',
          label: '<i class="fa fa-mobile"></i>',
          command: 'set-device-mobile',
          togglable: false,
      }],
    });

    //Editor Buttons
    editor.Panels.addPanel({
      id: "editor-actions",
      el: ".panel__editor",
      buttons: [
        {
          id: "saveDb",
          className: "fa fa-paper-plane btn-save",
          command: "saveDb",
        },
        {
          id: "cmd-clear",
          className: "fa fa-trash",
          command: "cmd-clear",
        },
        {
          id: "undo",
          className: "fa fa-undo",
          command: "undo",
        },
        {
          id: "redo",
          className: "fa fa-repeat",
          command: "redo",
        },
        {
          id: "export",
          className: "fa fa-download",
          command: "export",
        },
        {
          id: "preview",
          className: "fa fa-eye",
          command: "preview",
        },
      ],
    });


    editor.Commands.add('set-device-desktop', {
      run: editor => editor.setDevice('Desktop')
    });
    editor.Commands.add('set-device-mobile', {
      run: editor => editor.setDevice('Mobile')
    });

    editor.Commands.add("saveDb", {
      run: (editor, sender) => {
        sender && sender.set("active");
        editor.store();
      },
    });
  
    //Clear Button
    editor.Commands.add("cmd-clear", {
      run: (editor) => {
        editor.DomComponents.clear();
        editor.CssComposer.clear();
      },
    });
  
    //Undo
    editor.Commands.add("undo", {
      run: (editor) => editor.UndoManager.undo(),
    });
  
    // Redo
    editor.Commands.add("redo", {
      run: (editor) => editor.UndoManager.redo(),
    });
  
    editor.Commands.add("export", {
      run: (editor) => editor.runCommand("gjs-export-zip"),
    });
  
    editor.Commands.add("new-tool-cmd", {
      run: (editor) => console.log("Checking New Toolbar"),
    });
    // destroy on exit
    return () => {
      editor.destroy();
    };
  });



  return (
    <>
    <div className="panel__top">
      <div className="panel__devices"></div>
      <div className="panel__editor"></div>
      <div className="panel__basic-actions"></div>
      
    </div>
    <div className="row" style={{ minHeight: "90svh" }}>
        <div id="layers" className="column" style={{ flexBasis: "500px" }}>
          <p>Layers</p>
          <div id="layers-container"></div>
          <p>Components</p>
          <div id="blocks"></div>
        </div>

        <div className="column editor-clm">
          <div id="gjs" style={{ overflow: "hidden" }}></div>
        </div>

        <div id="style-manager" className="column" style={{ flexBasis: "500px" }}>
          <p>Style Manager</p>
          <br />
          <div id="selectors-container"></div>
          <div id="traits-container"></div>
          <div id="style-manager-container"></div>
        </div>
      </div>
    </>
  );
}
