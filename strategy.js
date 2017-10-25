const config = require ('./config.js'),
    Auth0Strategy = require ('passport-auth0')
const {domain, clientID, clientSecret} = config

module.exports = new Auth0Strategy ({
    domain: domain,  //comes from config.js
    clientID: clientID, //comes from config.js
    clientSecret: clientSecret, //comes from config.js
    callbackURL: '/login'
}, function (accessToken, refreshToken, extraParams, profile, done){
    //accessToken is the Token to call Auth0 API (not needed in most cases)
    //refreshToken
    //extraParams.id_token has the JSON Web Token
    //profile has all the info from the user
    return done(null, profile)
});