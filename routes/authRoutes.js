const passport = require('passport');

module.exports = app => {

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}))

app.get('/auth/google/callback', passport.authenticate('google'))

app.get('/', (req, res) => { 
    res.send("hello world");
})

app.get('/auth/facebook',
  passport.authenticate('facebook', { authType: 'reauthenticate', scope: ['user_friends'] }));

app.get('/auth/facebook/callback', passport.authenticate('facebook'));


}

