const fs = require('fs');
const path = require('path');

const SSOToken = require('../lib/SSOToken');
const SSOTokenData = require('../lib/SSOTokenData');

const testTokenSecret = 'asdasd';
const wrongTokenData = 'testData';

const keyTokenPriv = fs.readFileSync(path.join(__dirname, '../../testKeyFiles/jwtRS256.key')).toString();
const keyTokenPub = fs.readFileSync(path.join(__dirname, '../../testKeyFiles/jwtRS256.pub')).toString();

let curTime = Math.floor(Date.now() / 1000);
let expTime = Math.floor(Date.now() / 1000) + (60 * 60);
let notBeforeTime = curTime - (1000 * 60);
let correctAudience = 'testPlugin';
let wrongAudience = 'wrongIssuer';

let tokenDataVals = {
    CLAIM_AUDIENCE: 'testPlugin',
    CLAIM_EXPIRE_AT: expTime,
    CLAIM_NOT_BEFORE: notBeforeTime,
    CLAIM_ISSUED_AT: curTime,
    CLAIM_ISSUER: 'api.staffbase.com',
    CLAIM_INSTANCE_ID: '55c79b6ee4b06c6fb19bd1e2',
    CLAIM_INSTANCE_NAME: 'Our locations',
    CLAIM_USER_ID: '541954c3e4b08bbdce1a340a',
    CLAIM_USER_EXTERNAL_ID: 'jdoe',
    CLAIM_USER_FULL_NAME: 'John Doe',
    CLAIM_USER_FIRST_NAME: 'John',
    CLAIM_USER_LAST_NAME: 'Doe',
    CLAIM_USER_ROLE: 'editor',
    CLAIM_ENTITY_TYPE: 'type',
    CLAIM_THEME_TEXT_COLOR: '#00ABAB',
    CLAIM_THEME_BACKGROUND_COLOR: '#FFAABB',
    CLAIM_USER_LOCALE: 'en-US',
    USER_ROLE_USER: 'user',
    USER_ROLE_EDITOR: 'editor',
};
let SSOTokenDataObj = new SSOTokenData(tokenDataVals);

let SSOExpTokenDataVals = Object.assign({}, tokenDataVals, {CLAIM_EXPIRE_AT: curTime});
let SSOExpTokenDataObj = new SSOTokenData(SSOExpTokenDataVals);

// let encodedToken = SSOTokenDataObj.getSigned(testTokenSecret);
let encodedTokenWrongAlgo = SSOTokenDataObj._getSignedWrong(testTokenSecret);
let encodedTokenExp = SSOExpTokenDataObj.getSigned(keyTokenPriv);

let encodedTokenWithKey = SSOTokenDataObj.getSigned(keyTokenPriv); // Get signed verison using private key

describe('Testing SSOToken Class', () => {
    describe('Testing SSOToken Constructor', () => {
      test('test token constructor with undefined params', () => {
          expect( () => {
              new SSOToken();
          }).toThrow('App Secret null or not specified');
      });

      describe('Testing Token constructor App Secret cases', () => {
          test('test token constructor with App Secret as null', () => {
              expect( () => {
                  new SSOToken(null, wrongTokenData, correctAudience);
              }).toThrowError('App Secret null or not specified');
          });
          test('test token constructor with non String value for App Secret', () => {
              expect( () => {
                  new SSOToken({test: 1}, wrongTokenData, correctAudience);
              }).toThrowError('App Secret must be a string value');
          });
          test('test token constructor with App Secret as empty string value', () => {
              expect( () => {
                  new SSOToken('', wrongTokenData, correctAudience);
              }).toThrowError('App Secret cannot be an empty string');
          });
      });

      describe('Testing Token Constructor TokenData cases', () => {
          test('test token constructor with token encoded by unsupported algorithm', () => {
            expect( () => {
              new SSOToken(keyTokenPub, encodedTokenWrongAlgo, correctAudience);
            }).toThrowError('Token Algorithm in not encoded in a supported format');
          });
          test('test token constructor with TokenData as null', () => {
              expect( () => {
                  new SSOToken(keyTokenPub, null, correctAudience);
              }).toThrowError('Token Data null or not specified');
          });
          test('test token constructor with non String value for Token Data', () => {
              expect( () => {
                  new SSOToken(keyTokenPub, {nonString: true}, correctAudience);
              }).toThrowError('Token Data must be a string value');
          });
          test('test token constructor with Token Data as empty string value', () => {
              expect( () => {
                  new SSOToken(keyTokenPub, '', correctAudience);
              }).toThrowError('Token Data cannot be an empty string');
          });
          test('test token constructor unable to decode token', () => {
              expect( () => {
                  new SSOToken(keyTokenPub, wrongTokenData, correctAudience);
              }).toThrow();
          });
          test('test token constructor with wrong jwt secret public key file', () => {
              expect( () => {
                  new SSOToken('bad secret', encodedTokenWithKey, correctAudience);
              }).toThrowError('Unable to read public key');
          });
          test('test token constructor with expired token', () => {
              expect( () => {
                  new SSOToken(testTokenSecret, encodedTokenExp, correctAudience);
              }).toThrow();
          });
      });
      describe('Testing Token Constructor Audience cases', () => {
        test('test token constructor with Audience as null', () => {
            expect( () => {
                new SSOToken(keyTokenPub, encodedTokenWithKey, null);
            }).toThrowError('Audience null or not specified');
        });
        test('test token constructor with non String value for Audience', () => {
            expect( () => {
                new SSOToken(keyTokenPub, encodedTokenWithKey, {nonStringAud: true});
            }).toThrowError('Audience must be a string value');
        });
        test('test token constructor with Audience as empty string value', () => {
            expect( () => {
                new SSOToken(keyTokenPub, encodedTokenWithKey, '');
            }).toThrowError('Audience cannot be an empty string');
        });
        test('test token constructor with wrong Audience valie', () => {
          expect( () => {
            new SSOToken(keyTokenPub, encodedTokenWithKey, wrongAudience);
          }).toThrowError('Incorrect audience value');
        });
      });
      test('test token constructor with token data correctly decoded', () => {
          expect( () => {
            // use public key to verify key
            let newToken = new SSOToken(keyTokenPub, encodedTokenWithKey, correctAudience);
            return newToken;
          }).not.toThrow();
      });
    });
});
