const { existsSync } = require('fs');

/**
 * @description check if a directory is a valid index file and is valid for rename
 * @param {string} fileName fileName for activeTextEditor
 * @returns {boolean} true if directory is a valid index file, else false
 */
module.exports.isValidIndexFile = document => {
  const fileName = document.fileName;
  const directories = fileName.split(/\//gi);

  // Conditions to check index file validity
  const directoryExists = existsSync(fileName);
  const hasNoUsableParent = directories.length < 2;
  const isIndex = !directories[directories.length - 1].startsWith('index');
  const isUntitled = document.isUntitled;

  // console.log('Directory Exist', directoryExists);
  // console.log('Has No Usable Parent', !hasNoUsableParent);
  // console.log('isNotIndex', isIndex);
  // console.log('isUntitled', !isUntitled);

  

  if (!directoryExists || isNotIndex || !hasNoUsableParent || !isUntitled) {
    return false;
  }

  return true;
};

/**
 * @description get name of parent directory for an index file
 * @param {string} fileName fileName for activeTextEditor
 * @returns {string} parent Direcory name for activeTextEditor
 */
module.exports.getParentDirectoryForIndex = fileName => {
  const directories = fileName.split(/\//gi);

  return '/' + directories[directories.length - 2];
}
