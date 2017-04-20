## Classes

<dl>
<dt><a href="#SSOToken">SSOToken</a></dt>
<dd></dd>
<dt><a href="#SSOTokenData">SSOTokenData</a></dt>
<dd></dd>
</dl>

<a name="SSOToken"></a>

## SSOToken
**Kind**: global class  

* [SSOToken](#SSOToken)
    * [new SSOToken(String, String)](#new_SSOToken_new)
    * [.getTokenData()](#SSOToken+getTokenData) ⇒ <code>[SSOTokenData](#SSOTokenData)</code>

<a name="new_SSOToken_new"></a>

### new SSOToken(String, String)
Create an instance of SSOToken to parse signed toden data received from StaffBase backend.

**Returns**: SSOToken 	A SSOToken instance  

| Param | Description |
| --- | --- |
| String | appSecret	App Secret used to decode the token data |
| String | tokenData 	Signed Token Data to be decoded |

<a name="SSOToken+getTokenData"></a>

### ssoToken.getTokenData() ⇒ <code>[SSOTokenData](#SSOTokenData)</code>
Get  TokenData Object parsed by the SSOToken class.

**Kind**: instance method of <code>[SSOToken](#SSOToken)</code>  
**Returns**: <code>[SSOTokenData](#SSOTokenData)</code> - a TokenData object which can be used  to get SSO Token inforamtion.  
<a name="SSOTokenData"></a>

## SSOTokenData
**Kind**: global class  

* [SSOTokenData](#SSOTokenData)
    * [new SSOTokenData(tokenVals)](#new_SSOTokenData_new)
    * [.getSigned(secret, cb)](#SSOTokenData+getSigned) ⇒ <code>String</code>
    * [.toJSObj()](#SSOTokenData+toJSObj) ⇒
    * [.toJSObjPretty()](#SSOTokenData+toJSObjPretty) ⇒
    * [.getAudience()](#SSOTokenData+getAudience) ⇒
    * [.getExpireAtTime()](#SSOTokenData+getExpireAtTime) ⇒
    * [.getNotBeforeTime()](#SSOTokenData+getNotBeforeTime) ⇒
    * [.getIssuedAtTime()](#SSOTokenData+getIssuedAtTime) ⇒
    * [.getIssuer()](#SSOTokenData+getIssuer) ⇒
    * [.getInstanceId()](#SSOTokenData+getInstanceId) ⇒
    * [.getInstanceName()](#SSOTokenData+getInstanceName) ⇒
    * [.getUserId()](#SSOTokenData+getUserId) ⇒
    * [.getUserExternalId()](#SSOTokenData+getUserExternalId) ⇒
    * [.getFullName()](#SSOTokenData+getFullName) ⇒
    * [.getFirstName()](#SSOTokenData+getFirstName) ⇒
    * [.getLastName()](#SSOTokenData+getLastName) ⇒
    * [.getRole()](#SSOTokenData+getRole) ⇒
    * [.getType()](#SSOTokenData+getType) ⇒
    * [.getThemeTextColor()](#SSOTokenData+getThemeTextColor) ⇒
    * [.getThemeBackgroundColor()](#SSOTokenData+getThemeBackgroundColor) ⇒
    * [.getLocale()](#SSOTokenData+getLocale) ⇒
    * [.isEditor()](#SSOTokenData+isEditor) ⇒

<a name="new_SSOTokenData_new"></a>

### new SSOTokenData(tokenVals)
SSO Token Data

**Returns**: <code>[SSOTokenData](#SSOTokenData)</code> - An Instance of  SSOTokenData Class.  

| Param | Type | Description |
| --- | --- | --- |
| tokenVals | <code>Object</code> | TokenVals object wit keys representing possible SSO token values. |

<a name="SSOTokenData+getSigned"></a>

### ssoTokenData.getSigned(secret, cb) ⇒ <code>String</code>
Get signed string representation of the token data

**Kind**: instance method of <code>[SSOTokenData](#SSOTokenData)</code>  
**Returns**: <code>String</code> - Signed representation of the token data. Returns if no callback is specified.  

| Param | Type | Description |
| --- | --- | --- |
| secret | <code>String</code> | The Secret to be used for signing the token |
| cb | <code>function</code> | Optional callback function to get the signed data in a callback pattern. |

<a name="SSOTokenData+toJSObj"></a>

### ssoTokenData.toJSObj() ⇒
Convert Token Data to an internally used keys for Claims

**Kind**: instance method of <code>[SSOTokenData](#SSOTokenData)</code>  
**Returns**: Object With internally  represented values for the jwt  
<a name="SSOTokenData+toJSObjPretty"></a>

### ssoTokenData.toJSObjPretty() ⇒
Convert Token  Data to a CLAIM Represented JS Object

**Kind**: instance method of <code>[SSOTokenData](#SSOTokenData)</code>  
**Returns**: Object with possible Claim Values.  
<a name="SSOTokenData+getAudience"></a>

### ssoTokenData.getAudience() ⇒
Get targeted audience of the token.

**Kind**: instance method of <code>[SSOTokenData](#SSOTokenData)</code>  
**Returns**: null|string  
<a name="SSOTokenData+getExpireAtTime"></a>

### ssoTokenData.getExpireAtTime() ⇒
Get the time when the token expires.

**Kind**: instance method of <code>[SSOTokenData](#SSOTokenData)</code>  
**Returns**: number  
<a name="SSOTokenData+getNotBeforeTime"></a>

### ssoTokenData.getNotBeforeTime() ⇒
Get the time when the token starts to be valid.

**Kind**: instance method of <code>[SSOTokenData](#SSOTokenData)</code>  
**Returns**: number  
<a name="SSOTokenData+getIssuedAtTime"></a>

### ssoTokenData.getIssuedAtTime() ⇒
Get the time when the token was issued.

**Kind**: instance method of <code>[SSOTokenData](#SSOTokenData)</code>  
**Returns**: number  
<a name="SSOTokenData+getIssuer"></a>

### ssoTokenData.getIssuer() ⇒
Get issuer of the token.

**Kind**: instance method of <code>[SSOTokenData](#SSOTokenData)</code>  
**Returns**: null|string  
<a name="SSOTokenData+getInstanceId"></a>

### ssoTokenData.getInstanceId() ⇒
Get the (plugin) instance id for which the token was issued.The id will always be present.

**Kind**: instance method of <code>[SSOTokenData](#SSOTokenData)</code>  
**Returns**: string  
<a name="SSOTokenData+getInstanceName"></a>

### ssoTokenData.getInstanceName() ⇒
Get the (plugin) instance name for which the token was issued.

**Kind**: instance method of <code>[SSOTokenData](#SSOTokenData)</code>  
**Returns**: null|string  
<a name="SSOTokenData+getUserId"></a>

### ssoTokenData.getUserId() ⇒
Get the id of the authenticated user.

**Kind**: instance method of <code>[SSOTokenData](#SSOTokenData)</code>  
**Returns**: null|string  
<a name="SSOTokenData+getUserExternalId"></a>

### ssoTokenData.getUserExternalId() ⇒
Get the id of the user in an external system.Example use case would be to map user from an external storeto the entry defined in the token.

**Kind**: instance method of <code>[SSOTokenData](#SSOTokenData)</code>  
**Returns**: null|string  
<a name="SSOTokenData+getFullName"></a>

### ssoTokenData.getFullName() ⇒
Get either the combined name of the user or the name of the token.

**Kind**: instance method of <code>[SSOTokenData](#SSOTokenData)</code>  
**Returns**: null|string  
<a name="SSOTokenData+getFirstName"></a>

### ssoTokenData.getFirstName() ⇒
Get the first name of the user accessing.

**Kind**: instance method of <code>[SSOTokenData](#SSOTokenData)</code>  
**Returns**: null|string  
<a name="SSOTokenData+getLastName"></a>

### ssoTokenData.getLastName() ⇒
Get the last name of the user accessing.

**Kind**: instance method of <code>[SSOTokenData](#SSOTokenData)</code>  
**Returns**: null|string  
<a name="SSOTokenData+getRole"></a>

### ssoTokenData.getRole() ⇒
Get the role of the accessing user.If this is set to “editor”, the requesting user may manage the contentsof the plugin instance, i.e. she has administration rights.The type of the accessing entity can be either a “user” or a “editor”.

**Kind**: instance method of <code>[SSOTokenData](#SSOTokenData)</code>  
**Returns**: null|string  
<a name="SSOTokenData+getType"></a>

### ssoTokenData.getType() ⇒
Get the type of the token.The type of the accessing entity can be either a “user” or a “token”.

**Kind**: instance method of <code>[SSOTokenData](#SSOTokenData)</code>  
**Returns**: null|string  
<a name="SSOTokenData+getThemeTextColor"></a>

### ssoTokenData.getThemeTextColor() ⇒
Get text color used in the overall theme for this audience.The color is represented as a CSS-HEX code.

**Kind**: instance method of <code>[SSOTokenData](#SSOTokenData)</code>  
**Returns**: null|string  
<a name="SSOTokenData+getThemeBackgroundColor"></a>

### ssoTokenData.getThemeBackgroundColor() ⇒
Get background color used in the overall theme for this audience.The color is represented as a CSS-HEX code.

**Kind**: instance method of <code>[SSOTokenData](#SSOTokenData)</code>  
**Returns**: null|string  
<a name="SSOTokenData+getLocale"></a>

### ssoTokenData.getLocale() ⇒
Get the locale of the requesting user in the format of language tags.

**Kind**: instance method of <code>[SSOTokenData](#SSOTokenData)</code>  
**Returns**: null|string  
<a name="SSOTokenData+isEditor"></a>

### ssoTokenData.isEditor() ⇒
Check if the user is an editor.The user will always have a user role to prevent a bug classon missing values. Only when the editor role is explicitly provided the user will be marked as editor.

**Kind**: instance method of <code>[SSOTokenData](#SSOTokenData)</code>  
**Returns**: boolean  
