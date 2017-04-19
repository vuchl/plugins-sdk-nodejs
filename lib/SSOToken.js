let TokenData = require('./SSOTokenData');
let jwt = require('jsonwebtoken');

class SSOToken {
	/**
	 * @param  {String 	appSecret	App Secret used to decode the token data}
	 * @param  {String 	tokenData 	Signed Token Data to be decoded}
	 * @return {SSOToken 	A SSOToken instance}
	 */
	constructor(appSecret, tokenData) {
		// Check  Validity of appSecret
		if (appSecret === undefined || appSecret === null) {
			// App secret not specified
			throw new Error('App Secret null or not specified');
		}
		if (typeof appSecret !== 'string') {
			throw new Error('App Secret must be a string value');
		}
		if (!appSecret.trim()) {
			throw new Error('App Secret cannot be an empty string');
		}

		// Check Validity of tokenData
		if (tokenData === undefined || tokenData === null) {
			throw new Error('Token Data null or not specified');
		}
		if (typeof tokenData !== 'string') {
			throw new Error('Token Data must be a string value');
		}
		if (!tokenData.trim()) {
			throw new Error('Token Data cannot be an empty string');
		}

		let TimesCalled = 0;
		// Verify token
		console.log(tokenData);
		let decoded = jwt.verify(tokenData, appSecret);
		let tokenDataInst =  new TokenData({
			CLAIM_AUDIENCE: 				decoded.aud || null,
			CLAIM_EXPIRE_AT: 				decoded.exp || null,
			CLAIM_NOT_BEFORE: 				decoded.nbf || null,
			CLAIM_ISSUED_AT: 				decoded.iat || null,
			CLAIM_ISSUER: 					decoded.iss || null,
			CLAIM_INSTANCE_ID: 				decoded.instanceId || null,
			CLAIM_INSTANCE_NAME: 			decoded.instanceName || null,
			CLAIM_USER_ID: 					decoded.sub || null,
			CLAIM_USER_EXTERNAL_ID: 		decoded.externamId || null,
			CLAIM_USER_FULL_NAME: 			decoded.name || null,
			CLAIM_USER_FIRST_NAME: 			decoded.givenName || null,
			CLAIM_USER_LAST_NAME: 			decoded.familyName || null,
			CLAIM_USER_ROLE: 				decoded.role || null,
			CLAIM_ENTITY_TYPE: 				decoded.type || null,
			CLAIM_THEME_TEXT_COLOR: 		decoded.themingText || null,
			CLAIM_THEME_BACKGROUND_COLOR: 	decoded.themingBg || null,
			CLAIM_USER_LOCALE: 				decoded.locale || null,
			USER_ROLE_USER: 				decoded.user || null,
			USER_ROLE_EDITOR: 				decoded.editor || null,
		});

		// Decode Token Data
		if (tokenDataInst instanceof TokenData === false) {
			throw new Error('Token Data is not an instance of TokenData class');
		}

		this.appSecret = appSecret;
		this.tokenData = tokenData;
	}
}

module.exports = SSOToken;