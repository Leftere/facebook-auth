const passport = require('passport');
const keys = require('../config/keys');
const FaceBookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.
passport.use(new GoogleStrategy({
    clientID: keys.googleClientId,
    clientSecret: keys.googleClientSecret,
    callbackURL: keys.callBackURI,
    
  },  (accessToken, tokenSecret, profile, done) => {
        console.log(accessToken, )
  }
));


passport.use(new FaceBookStrategy({
    clientID: '2403011983099999',
    clientSecret: '0743704abc7d85e0234bbef27e07b377',
    callbackURL: '/auth/facebook/callback',
}, (accessToken, tokenSecret, profile, done) => {
    console.log(accessToken, profile)
}))
