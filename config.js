var path = require('path');

// Users can also provide the testenv configuration at the root folder: https://www.npmjs.com/package/dotenv
require('dotenv').config({ path: path.join(__dirname, 'testenv') });
console.log('ISSUER', process.env.ISSUER);


var ISSUER = process.env.ISSUER || 'https://dev-554898.oktapreview.com/oauth2/default';
var CLIENT_ID = process.env.CLIENT_ID || '0oano2jhofhP0RkAH0h7';
var CLIENT_SECRET = process.env.CLIENT_SECRET || 'u6jiTq3KdZV6PD1Qlhb5-QLvwsT4WwN0FqjUiuyc';
var SPA_CLIENT_ID = process.env.SPA_CLIENT_ID || '0oanlu780h34uKTir0h7';
var OKTA_TESTING_DISABLEHTTPSCHECK = process.env.OKTA_TESTING_DISABLEHTTPSCHECK ? true : false;

module.exports = {
  webServer: {
    port: 8080,
    oidc: {
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      issuer: ISSUER,
      appBaseUrl: 'http://localhost:8080',
      scope: 'openid profile email',
      testing: {
        disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK
      }
    },
  },
  resourceServer: {
    port: 8000,
    oidc: {
      clientId: SPA_CLIENT_ID,
      issuer: ISSUER,
      testing: {
        disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK
      }
    },
    assertClaims: {
      aud: 'api://default',
      cid: SPA_CLIENT_ID
    }
  }
};
