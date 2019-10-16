const JwtStratergy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoos = require('mongoose');
const User = mongoos.model('users');
const keys = require('./keys');

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrkey;

module.exports = passport => {
    passport.use(
        new JwtStratergy(opts, (jwt_payload, done) => {
            User.findById(jwt_payload.id)
                .then(user => {
                    if(user)
                    {
                        return done(null, user);
                    }
                    else
                    {
                        return done (null, false);
                    }
                })
        })
    )
}


