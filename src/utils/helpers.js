let fs = require('fs');

/**
 * Reads key file from the specified path and returns a string representation
 * of the key to be used to decode token.
 * @param  {string} path The path of the private key file.
 * @param  {function} cb Optional callback function to use this in an async way
 * @return {string}      String representation of the key file
 */
function readKeyFile(path, cb) {
  if (!path || path === '') {
    if (!cb) {
      throw new Error('Path not specified or empty');
    }
    cb('No path speified');
  }
  if(!cb) {
    try {
      return fs.readFileSync(path);
    } catch(err) {
      console.log(err);
    }
  }
}
module.exports.readKeyFile = readKeyFile;
