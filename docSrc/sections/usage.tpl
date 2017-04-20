After installation you just need to include the module in  your own Javascript Program. The  module can be included using the following syntax:

```javascript
const StaffBaseSSO = require('{{pluginNpmName}}')
```

You should have got your Secret from Staffbase. After receiving the token from the Staffbase backend, you can use the module to get the contents of the token.

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

If there is not exception thrown, you would get a SSOTokenData instance in the tokenData variable which you can use to get contents of the SSO Token.

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