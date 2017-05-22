const helpers = require('../utils/helpers');
let filePath = './testKeyFiles/jwtRS256.key';

describe('Testing Utilitiy functions', () => {
  describe('Testing readKeyFile', () => {
    test('test emptry filePath string', () => {
      expect( () => {
        helpers.readKeyFile('');
      }).toThrowError('Path not specified or empty');
    });
    test('test null filePath string', () => {
      expect( () => {
        helpers.readKeyFile(null);
      }).toThrowError('Path not specified or empty');
    });
  });
});
