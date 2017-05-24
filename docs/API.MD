
## Classes
Global | Description
------ | -----------
SSOToken | SSOToken Class. Used as an interface to decode the Staffbase SSO Token.
SSOTokenData : SSOTokenData | SSOTokenData Class used to host the token data values and provide getter functions to extract correspinding values.

## Functions
Global | Description
------ | -----------
readKeyFile(path, cb) ⇒ string | Reads public key file from the specified path and returns a string representation
of the key to be used to decode token.

## SSOToken
SSOToken Class. Used as an interface to decode the Staffbase SSO Token.

**Kind**: global class  

* [SSOToken](#markdown-header-ssotoken)
    * [new SSOToken(appSecret, tokenData)](#markdown-header-new-ssotokenappsecret-tokendata)
    * [.getTokenData()](#markdown-header-ssotokengettokendata-ssotokendata) ⇒ SSOTokenData

### new SSOToken(appSecret, tokenData)
Create an instance of SSOToken to parse signed token data received from StaffBase backend.


| Param | Type | Description |
| --- | --- | --- |
| appSecret | string | App Secret used to decode the token data |
| tokenData | string | Signed Token Data to be decoded |

### ssoToken.getTokenData() ⇒ SSOTokenData
Get  TokenData Object parsed by the SSOToken class.

**Kind**: instance method of [SSOToken](#markdown-header-new-ssotokenappsecret-tokendata)  
**Returns**: SSOTokenData - a TokenData object which can be used  to get SSO Token inforamtion.  
## SSOTokenData : SSOTokenData
SSOTokenData Class used to host the token data values and provide getter functions to extract correspinding values.

**Kind**: global class  

* [SSOTokenData](#markdown-header-ssotokendata-ssotokendata) : [SSOTokenData](#markdown-header-ssotokendata-ssotokendata)
    * [new SSOTokenData(tokenVals)](#markdown-header-new-ssotokendatatokenvals)
    * [.getSigned(secret, cb)](#markdown-header-ssotokendatagetsignedsecret-cb-string) ⇒ String
    * [.getSignedWrong(secret, cb)](#markdown-header-ssotokendatagetsignedwrongsecret-cb-string) ⇒ String
    * [.toJSObj()](#markdown-header-ssotokendatatojsobj-object) ⇒ Object
    * [.toJSObjPretty()](#markdown-header-ssotokendatatojsobjpretty-object) ⇒ Object
    * [._getClaim(claimName)](#markdown-header-ssotokendata_getclaimclaimname-stringnumbernull) ⇒ String ⎮ number ⎮ null
    * [.getAudience()](#markdown-header-ssotokendatagetaudience-nullstring) ⇒ null ⎮ string
    * [.getExpireAtTime()](#markdown-header-ssotokendatagetexpireattime-number) ⇒ number
    * [.getNotBeforeTime()](#markdown-header-ssotokendatagetnotbeforetime-number) ⇒ number
    * [.getIssuedAtTime()](#markdown-header-ssotokendatagetissuedattime-number) ⇒ number
    * [.getIssuer()](#markdown-header-ssotokendatagetissuer-nullstring) ⇒ null ⎮ string
    * [.getInstanceId()](#markdown-header-ssotokendatagetinstanceid-string) ⇒ string
    * [.getInstanceName()](#markdown-header-ssotokendatagetinstancename-nullstring) ⇒ null ⎮ string
    * [.getUserId()](#markdown-header-ssotokendatagetuserid-nullstring) ⇒ null ⎮ string
    * [.getUserExternalId()](#markdown-header-ssotokendatagetuserexternalid-nullstring) ⇒ null ⎮ string
    * [.getFullName()](#markdown-header-ssotokendatagetfullname-nullstring) ⇒ null ⎮ string
    * [.getFirstName()](#markdown-header-ssotokendatagetfirstname-nullstring) ⇒ null ⎮ string
    * [.getLastName()](#markdown-header-ssotokendatagetlastname-nullstring) ⇒ null ⎮ string
    * [.getRole()](#markdown-header-ssotokendatagetrole-nullstring) ⇒ null ⎮ string
    * [.getType()](#markdown-header-ssotokendatagettype-nullstring) ⇒ null ⎮ string
    * [.getThemeTextColor()](#markdown-header-ssotokendatagetthemetextcolor-nullstring) ⇒ null ⎮ string
    * [.getThemeBackgroundColor()](#markdown-header-ssotokendatagetthemebackgroundcolor-nullstring) ⇒ null ⎮ string
    * [.getLocale()](#markdown-header-ssotokendatagetlocale-nullstring) ⇒ null ⎮ string
    * [.isEditor()](#markdown-header-ssotokendataiseditor-boolean) ⇒ boolean

### new SSOTokenData(tokenVals)
SSO Token Data


| Param | Type | Description |
| --- | --- | --- |
| tokenVals | Object | TokenVals object wit keys representing possible SSO token values. |

### ssoTokenData.getSigned(secret, cb) ⇒ String
Get signed string representation of the token data

**Kind**: instance method of [SSOTokenData](#markdown-header-new-ssotokendatatokenvals)  
**Returns**: String - Signed representation of the token data. Returns
if no callback is specified.  

| Param | Type | Description |
| --- | --- | --- |
| secret | String | The Secret to be used for signing the token. The supported algorithm is RS256 so it is important that the secret is read from a private key file. |
| cb | function | Optional callback function to get the signed data in a callback pattern. |

### ssoTokenData.getSignedWrong(secret, cb) ⇒ String
Get signed string representation of the token data with a non supported
(by Staffbase) Algotirhm.

**Kind**: instance method of [SSOTokenData](#markdown-header-new-ssotokendatatokenvals)  
**Returns**: String - Signed representation of the token data. Returns
if no callback is specified.  

| Param | Type | Description |
| --- | --- | --- |
| secret | String | The Secret to be used for signing the token |
| cb | function | Optional callback function to get the signed data in a callback pattern. |

### ssoTokenData.toJSObj() ⇒ Object
Convert Token Data to an internally used keys for Claims

**Kind**: instance method of [SSOTokenData](#markdown-header-new-ssotokendatatokenvals)  
**Returns**: Object - With internally  represented values for the jwt  
### ssoTokenData.toJSObjPretty() ⇒ Object
Convert Token  Data to a CLAIM Represented JS Object

**Kind**: instance method of [SSOTokenData](#markdown-header-new-ssotokendatatokenvals)  
**Returns**: Object - with possible Claim Values.  
### ssoTokenData._getClaim(claimName) ⇒ String ⎮ number ⎮ null
Internally used to get value against the client param string.

**Kind**: instance method of [SSOTokenData](#markdown-header-new-ssotokendatatokenvals)  
**Returns**: String ⎮ number ⎮ null - The  correspinding value of the Specified claim name.  

| Param | Type | Description |
| --- | --- | --- |
| claimName | String | The claim name as defined in the tokenDataConsts |

### ssoTokenData.getAudience() ⇒ null ⎮ string
Get targeted audience of the token.

**Kind**: instance method of [SSOTokenData](#markdown-header-new-ssotokendatatokenvals)  
### ssoTokenData.getExpireAtTime() ⇒ number
Get the time when the token expires.

**Kind**: instance method of [SSOTokenData](#markdown-header-new-ssotokendatatokenvals)  
### ssoTokenData.getNotBeforeTime() ⇒ number
Get the time when the token starts to be valid.

**Kind**: instance method of [SSOTokenData](#markdown-header-new-ssotokendatatokenvals)  
### ssoTokenData.getIssuedAtTime() ⇒ number
Get the time when the token was issued.

**Kind**: instance method of [SSOTokenData](#markdown-header-new-ssotokendatatokenvals)  
### ssoTokenData.getIssuer() ⇒ null ⎮ string
Get issuer of the token.

**Kind**: instance method of [SSOTokenData](#markdown-header-new-ssotokendatatokenvals)  
### ssoTokenData.getInstanceId() ⇒ string
Get the (plugin) instance id for which the token was issued.

The id will always be present.

**Kind**: instance method of [SSOTokenData](#markdown-header-new-ssotokendatatokenvals)  
### ssoTokenData.getInstanceName() ⇒ null ⎮ string
Get the (plugin) instance name for which the token was issued.

**Kind**: instance method of [SSOTokenData](#markdown-header-new-ssotokendatatokenvals)  
### ssoTokenData.getUserId() ⇒ null ⎮ string
Get the id of the authenticated user.

**Kind**: instance method of [SSOTokenData](#markdown-header-new-ssotokendatatokenvals)  
### ssoTokenData.getUserExternalId() ⇒ null ⎮ string
Get the id of the user in an external system.

Example use case would be to map user from an external store
to the entry defined in the token.

**Kind**: instance method of [SSOTokenData](#markdown-header-new-ssotokendatatokenvals)  
### ssoTokenData.getFullName() ⇒ null ⎮ string
Get either the combined name of the user or the name of the token.

**Kind**: instance method of [SSOTokenData](#markdown-header-new-ssotokendatatokenvals)  
### ssoTokenData.getFirstName() ⇒ null ⎮ string
Get the first name of the user accessing.

**Kind**: instance method of [SSOTokenData](#markdown-header-new-ssotokendatatokenvals)  
### ssoTokenData.getLastName() ⇒ null ⎮ string
Get the last name of the user accessing.

**Kind**: instance method of [SSOTokenData](#markdown-header-new-ssotokendatatokenvals)  
### ssoTokenData.getRole() ⇒ null ⎮ string
Get the role of the accessing user.

If this is set to “editor”, the requesting user may manage the contents
of the plugin instance, i.e. she has administration rights.
The type of the accessing entity can be either a “user” or a “editor”.

**Kind**: instance method of [SSOTokenData](#markdown-header-new-ssotokendatatokenvals)  
### ssoTokenData.getType() ⇒ null ⎮ string
Get the type of the token.

The type of the accessing entity can be either a “user” or a “token”.

**Kind**: instance method of [SSOTokenData](#markdown-header-new-ssotokendatatokenvals)  
### ssoTokenData.getThemeTextColor() ⇒ null ⎮ string
Get text color used in the overall theme for this audience.

The color is represented as a CSS-HEX code.

**Kind**: instance method of [SSOTokenData](#markdown-header-new-ssotokendatatokenvals)  
### ssoTokenData.getThemeBackgroundColor() ⇒ null ⎮ string
Get background color used in the overall theme for this audience.

The color is represented as a CSS-HEX code.

**Kind**: instance method of [SSOTokenData](#markdown-header-new-ssotokendatatokenvals)  
### ssoTokenData.getLocale() ⇒ null ⎮ string
Get the locale of the requesting user in the format of language tags.

**Kind**: instance method of [SSOTokenData](#markdown-header-new-ssotokendatatokenvals)  
### ssoTokenData.isEditor() ⇒ boolean
Check if the user is an editor.

The user will always have a user role to prevent a bug class
on missing values. Only when the editor role is explicitly
provided the user will be marked as editor.

**Kind**: instance method of [SSOTokenData](#markdown-header-new-ssotokendatatokenvals)  
## readKeyFile(path, cb) ⇒ string
Reads public key file from the specified path and returns a string representation
of the key to be used to decode token.

**Kind**: global function  
**Returns**: string - String representation of the key file  

| Param | Type | Description |
| --- | --- | --- |
| path | string | The path of the private key file. |
| cb | function | Optional callback function to use this in an async way |

