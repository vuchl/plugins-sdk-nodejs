After installation you just need to include the module in  your own Javascript Program. The  module can be included using the following syntax:

```javascript
const StaffBaseSSO = require('{{pluginNpmName}}').sso
```
## About secret token
Staffbase backend support only RS256 algorithm of JWT which means that the secret you should provide must be the content of public key in the `PKCS8` format.
This means your public key should start and end with tags:

```
-----BEGIN PUBLIC KEY-----
BASE64 ENCODED DATA
-----END PUBLIC KEY-----
```
Within the base64 encoded data the following DER structure is present:
```
PublicKeyInfo ::= SEQUENCE {
  algorithm       AlgorithmIdentifier,
  PublicKey       BIT STRING
}

AlgorithmIdentifier ::= SEQUENCE {
  algorithm       OBJECT IDENTIFIER,
  parameters      ANY DEFINED BY algorithm OPTIONAL
}
```

You can use the helper function to read and verify if your public key is in the supported format.
```javascript
	const helpers = require(`{{pluginNpmName}}`).helpers
	const publicKeyPath = '[[Your File Path]]'
	let keySecret;
	try {
		keySecret = helpers.readKeyFile(publicKeyPath);
	} catch (err) {
		console.log('Error Reading Key file', err);
	}
```

You can then use keySecret to get an instance of StaffBaseSSO class.

## Getting the SSOTokenData instance
You should have got your Secret key file from Staffbase. After receiving the token from the Staffbase backend, you can use the module to get the contents of the token.

```javascript
const secretToken = '[Your Secret Token Here]';
const jwtToken = '[Received JWT Token Here]';
let tokenData = null;
try {
	let SSOContents = new StaffBaseSSO(secretToken, jwtToken);
	tokenData = SSOContents.getTokenData();
} catch(tokenErr) {
	console.log('Error decoding token:', tokenErr);
}
```

If no exception is thrown, you would get a SSOTokenData instance in the tokenData variable which you can use to get contents of the SSO Token.

The following data can be retrieved from the token:

|Helper Name|Token Key| Fetch Function| Description|
| --- | --- | --- | --- |
|CLAIM_AUDIENCE|aud|getAudience()|Get targeted audience of the token.|
|CLAIM_EXPIRE_AT|exp|getExpireAtTime()|Get the time when the token expires.|
|CLAIM_NOT_BEFORE|nbf|getNotBeforeTime()|Get the time when the token starts to be valid.|
|CLAIM_ISSUED_AT|iat|getIssuedAtTime()|Get the time when the token was issued.|
|CLAIM_ISSUER|iss|getIssuer()|Get issuer of the token.|
|CLAIM_INSTANCE_ID|instance_id|getInstanceId()|Get the (plugin) instance id for which the token was issued.|
|CLAIM_INSTANCE_NAME|instance_name|getInstanceName()|Get the (plugin) instance name for which the token was issued.|
|CLAIM_USER_ID|sub|getUserId()|Get the id of the authenticated user.|
|CLAIM_USER_EXTERNAL_ID|external_id|getUserExternalId()|Get the id of the user in an external system.|
|CLAIM_USER_FULL_NAME|name|getFullName()|Get either the combined name of the user or the name of the token.|
|CLAIM_USER_FIRST_NAME|given_name|getFirstName()|Get the first name of the user accessing.|
|CLAIM_USER_LAST_NAME|family_name|getLastName()|Get the last name of the user accessing.|
|CLAIM_USER_ROLE|role|getRole()|Get the role of the accessing user.|
|CLAIM_ENTITY_TYPE|type|getType()|Get the type of the token.|
|CLAIM_THEME_TEXT_COLOR|theming_text|getThemeTextColor()|Get text color used in the overall theme for this audience.|
|CLAIM_THEME_BACKGROUND_COLOR|theming_bg|getThemeBackgroundColor()|Get background color used in the overall theme for this audience.|
|CLAIM_USER_LOCALE|locale|getLocale()|Get the locale of the requesting user in the format of language tags.|

It is not guaranteed that the token would contain information of all the keys. If there is no value for the corresponding field, the SDK would return a `null` value.
