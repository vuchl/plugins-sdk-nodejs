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

/**
 * asCert converts a binary encoded key to PKCS8 format
 * @param  {string} cert the binary endoded key string
 * @param  {string} type the type of key 'PUBLIC KEY'|'PRIVATE KEY'
 * @return {string}      the PKCS8 representation of the key
 */
function asCert(cert, type='PUBLIC KEY') {
  const result = [`-----BEGIN ${type}-----`];
  Array.prototype.push.apply(result, cert.match(/.{1,64}/g));
  result.push(`-----END ${type}-----`);
  return result.join('\n');
}

/**
 * Transforms the provided key to PKCS8 format for supported jwt algorithm.
 * @param  {string} key The public key file string.
 * @param  {string} type the type of key 'PUBLIC KEY'|'PRIVATE KEY'
 * @return {string}     The public key in PKCS8 format.
 */
function transformKeyToFormat(key, type='PUBLIC KEY') {
  // @TODO Write tests
  if (!key) {
    throw new Error('No Secret Specified');
  }
  // Convert key to PKCS8 if the key is just a single line binary format.
  if(key.indexOf('\n' === -1)) {
    return asCert(key);
  }
  // else check out if the key is alreadt in the right format
  if ( (key.indexOf('-----BEGIN ${type}-----') !== -1) && (key.indexOf(`-----END ${type}-----`) !== -1) ) {
    throw new Error('Secret in Unsupported Format');
  }
  return key;
}
module.exports = {
  readKeyFile: readKeyFile,
  transformKeyToFormat: transformKeyToFormat,
};
