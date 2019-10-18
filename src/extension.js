const {
  window,
} = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log('Congratulations, your extension "vs-nice-index" is now active!');
  window.showInformationMessage('VSCode Nice Index is now active');
}

exports.activate = activate;

function deactivate() { }

module.exports = {
  activate,
  deactivate
}
