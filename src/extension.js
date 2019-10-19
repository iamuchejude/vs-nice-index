const { window } = require('vscode');
const { isValidIndexFile, getNewFileName } = require('./util');

/**
 * @description rename index files to parent directory names
 */
function renameTab() {
  const activeEditor = window.activeTextEditor;

  if (window.activeTextEditor && isValidIndexFile(activeEditor.document)) {
    const fileName = activeEditor.document.fileName;
    const newFileName = getNewFileName(fileName);

    window.showInformationMessage(`'vs-nice-index' should rename tab to '${newFileName}'
      Unforturnately, 'fileName' is currently immutable 😔. This extension will be updated once there is a way to set the 'fileName' for the 'activeTextEditor' 🙂.
    `);
  }
}

/**
 * @description runs once extension is installed and activated
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  renameTab();

  context.subscriptions.push(
    window.onDidChangeActiveTextEditor(() => {
      renameTab();
    })
  );
}

/**
 * @description runs once extension is uninstalled and deactivated
 */
function deactivate() { }

module.exports = {
  activate,
  deactivate
}
