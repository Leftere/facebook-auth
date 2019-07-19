const passport = require('passport');
const keys = require('../config/keys');
const mongoose = require('mongoose');
const FaceBookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;


const User = mongoose.model('users');

passport.serializeUser((user,done) => {
    console.log('user id')
done(null, user.id)
})

passport.deserializeUser((id, done) => {
User.findById(id)
.then(user => {
    done(null, user.id);
})
})

// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.
passport.use(
    new GoogleStrategy({
    clientID: keys.googleClientId,
    clientSecret: keys.googleClientSecret,
    callbackURL: keys.callBackURI,
    
  },  (accessToken, tokenSecret, profile, done) => {
    console.log(profile)
        User.findOne({userId: profile.id})
        .then((existingUser) => {
            if(existingUser) {
                done(null, existingUser)
            } else {
                new User({ userId: profile.id}).save()
                .then(user => done(null, user))
            }
        } )
        
  }
));


passport.use(new FaceBookStrategy({
    clientID: '2403011983099999',
    clientSecret: '0743704abc7d85e0234bbef27e07b377',
    callbackURL: '/auth/facebook/callback',
}, (accessToken, tokenSecret, profile, done) => {
    console.log(profile)
    User.findOne({userId: profile.id})
    .then((existingUser) => {
        if(existingUser) {
            done(null, existingUser)
        } else {
            new User({ userId: profile.id}).save()
            .then(user => done(null, user));
        }
    } )
    
}))
