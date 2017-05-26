const StaffBaseSSO = require('../lib/SSOToken');
const helpers = require('./helpers');
const TOKEN_QUERY_PARAM = 'jwt';

/**
 * Mountable express middleware functions
 * @param  {string} secret The secret public provided by StaffBase
 * @return {function}        Calls the next() handler in the roule handlers chain
 */
function ssoMiddleWare(secret) {
  secret = secret || process.env.STAFFBASE_SSO_SECRET;
  // Convert key under the hood
  let formattedSecret;
  try {
    formattedSecret = helpers.transformKeyToFormat(secret);
  } catch (err) {
    console.log('Unable to transform key to right format.', err);
    formattedSecret = null;
  }
  console.log('Formatted key is:', formattedSecret);
  return function(req, res, next) {
    if (!formattedSecret) {
      console.log('Unsupported secret.');
      return next();
    }
    if (req.query[TOKEN_QUERY_PARAM]) {
      let token = req.query[TOKEN_QUERY_PARAM];
      try {
        let SSOContents = new StaffBaseSSO(formattedSecret, token);
        let tokenData = SSOContents.getTokenData();
        req.sbSSO = tokenData;
        console.log('TokenData:', tokenData);
        return next();
      } catch(tokenErr) {
        console.log('Error decoding token:', tokenErr);
        return next();
      }
    }
    next();
  };
}

module.exports = ssoMiddleWare;
