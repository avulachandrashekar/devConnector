const express = require('express');
const router = express.Router();
const user = require('../../models/User');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');


//@route GET /api/users/tests
//@desc test users route
//@access public
router.get('/tests', (req, res) => res.json({message : "users works"}));

//@route GET /api/users/register
//@desc register a user
//@access public
router.post('/register', (req, res) => {
    const email = req.body.email;
    user.findOne({email : email})
        .then(user => {
            if(user){
                return body.status(400)
                            .json({email : "Email already exists."})
            } else 
            {
                const avatar = gravatar.url(req.body.email, {
                    s : 200,
                    r : 'pg',
                    d : 'mm'
                })
                const newUser = new user({
                    name : req.body.name,
                    email : req.body.email,
                    avatar,
                    password : req.body.password,
                    date

                })

                bcrypt.getSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) =>
                    {
                        if (err) throw err
                        newUser.password = hash;
                        newUser.save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err))
                    })
                })
            }

        })
})

module.exports = router;
