export const panels = {
    defaults: [
      {
        id: "basic-actions",
        el: ".panel__basic-actions",
        buttons: [
          {
            id: "visibility",
            active: true, // active by default
            className: "btn-toggle-borders",
            label: '<i class="fa fa-clone"></i>',
            command: "sw-visibility", // Built-in command
          },
        ],
      },


      {
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
      },


      {
        id: "panel-devices",
        el: ".panel__devices",
        buttons: [
          {
            id: "device-desktop",
            label: '<i class="fa fa-television"></i>',
            command: "set-device-desktop",
            active: true,
            togglable: false,
          },
          {
            id: "device-mobile",
            label: '<i class="fa fa-mobile"></i>',
            command: "set-device-mobile",
            togglable: false,
          },
        ],
      },
    ],
  };

  
  export const deviceManager = {
    devices: [
      {
        name: "Desktop",
        width: "",
      },
      {
        name: "Mobile",
        width: "320px",
        widthMedia: "480px",
      },
    ],
  };
  
  export const addEditorCommand = (editor) => {
    // Commands
    editor.Commands.add("set-device-desktop", {
      run: (editor) => editor.setDevice("Desktop"),
    });
    editor.Commands.add("set-device-mobile", {
      run: (editor) => editor.setDevice("Mobile"),
    });
  
    // Save Button
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
  };