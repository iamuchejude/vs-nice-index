const { existsSync } = require('fs');

/**
 * @description check if a directory is a valid index file and is valid for rename
 * @param {string} fileName fileName for activeTextEditor
 * @returns {boolean} true if directory is a valid index file, else false
 */
module.exports.isValidIndexFile = document => {
  const fileName = document.fileName;
  const directories = fileName.split(/\//gi);

  const directoryExists = !existsSync(fileName);
  const hasNoUsableParent = directories.length < 2;
  const isNotIndex = !directories[directories.length - 1].startsWith('index');
  const isUntitled = document.isUntitled;

  if (directoryExists || isUntitled || isNotIndex || hasNoUsableParent) {
    return false;
  }

  return true;
};

/**
 * @description get name of parent directory for an index file
 * @param {string} fileName fileName for activeTextEditor
 * @returns {string} parent Direcory name for activeTextEditor
 */
module.exports.getNewFileName = fileName => {
  const directories = fileName.split(/\//gi);

  return '/' + directories[directories.length - 2];
}
