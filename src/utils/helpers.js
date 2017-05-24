const fs = require('fs');
const NodeRSA = require('node-rsa');

/**
 * Reads public key file from the specified path and returns a string representation
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
    return cb('Path not specified or empty');
  }
  if(!cb) {
    try {
      let fileContent = fs.readFileSync(path);
      let key = new NodeRSA(fileContent.toString(), 'pkcs8-public');
      return key.exportKey('pkcs8-public-pem');
    } catch(err) {
      if (err.message.indexOf('ENOENT: no such file or directory') !== -1) {
        throw new Error('Invalid file path');
      }
      if (err.message === 'encoding too long') {
        throw new Error('Invalid key file');
      }
      throw err;
      console.log(err);
    }
  } else {
    fs.readFile(path, (err, res) => {
      if (err) {
        if (err.message.indexOf('ENOENT: no such file or directory') !== -1) {
          return cb('Invalid file path');
        }
        return cb(err);
      }
      try {
        let key = new NodeRSA(res.toString(), 'pkcs8-public');
        return cb(null, key.exportKey('pkcs8-public-pem'));
      } catch (err) {
        if (err.message === 'encoding too long') {
          return cb('Invalid key file');
        }
        return cb(err);
      }
    });
  }
}

module.exports.readKeyFile = readKeyFile;
