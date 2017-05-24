const helpers = require('../utils/helpers');
const path = require('path');

let invalidFilePath = path.resolve(__dirname, '../../testKeyFiles/missingfile.key');
let filePathInvKey = path.resolve(__dirname, '../../testKeyFiles/jwtRS256.key.pub');
let filePathValidKey = path.resolve(__dirname, '../../testKeyFiles/jwtRS256.pub');

describe('Testing Utilitiy functions', () => {
  describe('Testing readKeyFile', () => {
    describe('testing sync calls', () => {
      test('test empty filePath string', () => {
        expect( () => {
          helpers.readKeyFile('');
        }).toThrowError('Path not specified or empty');
      });
      test('test null filePath string', () => {
        expect( () => {
          helpers.readKeyFile(null);
        }).toThrowError('Path not specified or empty');
      });
      test('test invalid filepath', () => {
        expect( () => {
          helpers.readKeyFile(invalidFilePath);
        }).toThrowError('Invalid file path');
      });
      test('test reading invalid public key file', () => {
        expect( () => {
          helpers.readKeyFile(filePathInvKey);
        }).toThrowError('Invalid key file');
      });
      test('test reading valid public key file', () => {
        expect( () => {
          let key = helpers.readKeyFile(filePathValidKey);
          // @TODO find regexp for PKCS8 Key format
          // expect(key).toMatch(/-----BEGIN PUBLIC KEY-----*-----END PUBLIC KEY-----/)
          // console.log('GOT KEY:', key);
          expect(key).toBeDefined();
        }).not.toThrow();
      });
    });
    describe('testing cb pattern', () => {
      test('test emptry filePath string', (done) => {
        helpers.readKeyFile('', (err, res) => {
          expect(err).toMatch(/Path not specified or empty/);
          done();
        });
      });
      test('test null filePath string', (done) => {
        helpers.readKeyFile(null, (err, res) => {
          expect(err).toMatch(/Path not specified or empty/);
          done();
        });
      });
      test('test invalid filepath', (done) => {
        helpers.readKeyFile(invalidFilePath, (err, res) => {
          expect(err).toMatch(/Invalid file path/);
          done();
        });
      });
      test('test reading invalid public key file', (done) => {
        helpers.readKeyFile(filePathInvKey, (err, res) => {
          expect(err).toMatch(/Invalid key file/);
          done();
        });
      });
      test('test reading valid public key file', (done) => {
        helpers.readKeyFile(filePathValidKey, (err, key) => {
          // console.log('GOT KEY:', key);
          expect(err).toBeFalsy();
          expect(key).toBeDefined();
          done();
        });
      });
    });
  });
});
