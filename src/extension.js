const { window } = require('vscode');
const { isValidIndexFile, getParentDirectoryForIndex } = require('./util');

/**
 * @description rename index files to parent directory names
 */
function renameTab() {
  const activeEditor = window.activeTextEditor;

  if (window.activeTextEditor && isValidIndexFile(activeEditor.document)) {
    const fileName = activeEditor.document.fileName;
    const newFileName = getParentDirectoryForIndex(fileName);

    console.log(activeEditor);

    window.showInformationMessage(`'vs-nice-index' should change name '${newFileName}'`);
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
