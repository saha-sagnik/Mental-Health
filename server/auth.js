const express = require('express');
const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Auth = require('./models/authentication.js');
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.CRYPTR_SECRET_KEY);

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  },
  async function(accessToken, refreshToken, profile, done) {
    console.log("Google Authentication Profile:", profile);
    const newUser = {
      googleId: profile.id,
      displayName: profile.displayName,
      firstName: profile.name.givenName,
      lastName: profile.name.familyName,
      profileImage: profile.photos[0].value
  };

    try{
        let user = await Auth.findOne({googleId: profile.id});
        if(user)
        done(null,user);
        else{
        newUser.firstName = cryptr.encrypt(newUser.firstName);  
        user = await Auth.create(newUser);
        done(null,user);
        }
    }
    catch(error){
        console.log(error);
    }
  }
));

router.get('/google',
  passport.authenticate('google', { scope: ['email','profile'] }));
router.get('/google/callback', 
  passport.authenticate('google',{successRedirect: '/', failureRedirect: '/login-failure'}),
  (req, res) => {
    // If authentication is successful, this callback will be executed
    res.redirect('/');
  }
);

router.get('/login-failure',(req,res)=>{
    res.send('Something went wrong!');
});

router.get('/logout', (req, res) => {
  // Optionally, you may want to destroy the session
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      res.status(500).send('Internal Server Error');
    } else {
      // Session destroyed successfully
      res.redirect('/');
    }
  });
});


passport.serializeUser(function(user,done){
    done(null,user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await Auth.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

module.exports = router;