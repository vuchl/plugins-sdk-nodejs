

class SSOTokenData {
	constructor(tokenVals) {
		this.aud 			= tokenVals.CLAIM_AUDIENCE;
		this.exp			= tokenVals.CLAIM_EXPIRE_AT;
		this.nbf			= tokenVals.CLAIM_NOT_BEFORE;
		this.iat			= tokenVals.CLAIM_ISSUED_AT;
		this.iss			= tokenVals.CLAIM_ISSUER;
		this.instanceId		= tokenVals.CLAIM_INSTANCE_ID;
		this.instanceName	= tokenVals.CLAIM_INSTANCE_NAME;
		this.sub 			= tokenVals.CLAIM_USER_ID;
		this.externamId 	= tokenVals.CLAIM_USER_EXTERNAL_ID;
		this.name 			= tokenVals.CLAIM_USER_FULL_NAME;
		this.givenName		= tokenVals.CLAIM_USER_FIRST_NAME;
		this.familyName		= tokenVals.CLAIM_USER_LAST_NAME;
		this.role 			= tokenVals.CLAIM_USER_ROLE;
		this.type 			= tokenVals.CLAIM_ENTITY_TYPE;
		this.themingText 	= tokenVals.CLAIM_THEME_TEXT_COLOR;
		this.themingBg 		= tokenVals.CLAIM_THEME_BACKGROUND_COLOR;
		this.locale 		= tokenVals.CLAIM_USER_LOCALE;
		this.user 			= tokenVals.USER_ROLE_USER;
		this.editor 		= tokenVals.USER_ROLE_EDITOR;
	}

	getSigned() {

	}

	toJSObj() {
		return {
			aud: this.aud,
			exp: this.exp,
			nbf: this.nbf,
			iat: this.iat,
			iss: this.iss,
			instanceId: this.instanceId,
			instanceName: this.instanceName,
			sub: this.sub,
			externamId: this.externamId,
			name: this.name,
			givenName: this.givenName,
			familyName: this.familyName,
			role: this.role,
			type: this.type,
			themingText: this.themingText,
			themingBg: this.themingBg,
			locale: this.locale,
			user: this.user,
			editor: this.editor,
		}
	}
}

module.exports = SSOTokenData;