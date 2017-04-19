const SSOToken = require('../lib/SSOToken');
const SSOTokenData = require('../lib/SSOTokenData');
let jwt = require('jsonwebtoken');

const testTokenSecret = 'asdasd';
const wrongTokenData = 'testData';

let curTime = Math.floor(Date.now() / 1000);
let expTime = Math.floor(Date.now() / 1000) + (60 * 60);
let notBeforeTime = curTime - (1000 * 60);

let SSOTokenDataObj = new SSOTokenData({
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
});

let encodedToken = jwt.sign(SSOTokenDataObj.toJSObj(), testTokenSecret);

describe('Testing SSOToken Class', () => {
	describe('Testing SSOToken Constructor', () => {
		test('test token constructor with undefined params', () => {
			expect( () => {
				let newToken = new SSOToken();
			}).toThrow('App Secret null or not specified');
		});

		describe('Testing Token constructor App Secret cases', () => {
			test('test token constructor with App Secret as null', () => {
				expect( () => {
					let newToken = new SSOToken(null,  wrongTokenData);
				}).toThrowError('App Secret null or not specified');
			});
			test('test token constructor with non String value for App Secret', () => {
				expect( () => {
					let newToken = new SSOToken({test: 1}, wrongTokenData);
				}).toThrowError('App Secret must be a string value');
			});
			test('test token constructor with App Secret as empty string value', () => {
				expect( () => {
					let newToken = new SSOToken('', wrongTokenData);
				}).toThrowError('App Secret cannot be an empty string');
			});
		});

		describe('Testing Token Constructor TokenData cases', () => {
			test('test token constructor with TokenData as null', () => {
				expect( () => {
					let newToken = new SSOToken(testTokenSecret, null);
				}).toThrowError('Token Data null or not specified');
			});
			test('test token constructor with non String value for Token Data', () => {
				expect( () => {
					let newToken = new SSOToken(testTokenSecret,  {nonString: true});
				}).toThrowError('Token Data must be a string value');
			});
			test('test token constructor with Token Data as empty string value', () => {
				expect( () => {
					let newToken = new SSOToken(testTokenSecret, '');
				}).toThrowError('Token Data cannot be an empty string');
			});
			test('test token constructor unable to decode token', () => {
				expect( () => {
					let newToken = new SSOToken(testTokenSecret, wrongTokenData);
				}).toThrow();
			})
			test('test token constructor with wrong jwt secret',  () => {
				expect( () => {
					let newToken = new SSOToken('bad secret', encodedToken);
				}).toThrow();
			})
			test('test token constructor with token data correctly decoded', () => {
				expect( () => {
					let newToken = new SSOToken(testTokenSecret, encodedToken);
					return newToken;
				}).not.toThrow();
			})
		})
	})
})	