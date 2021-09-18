const express = require("express");
const router = express.Router();
const { User } = require("../../models");
const rounds = 10

const jwt = require('jsonwebtoken');
const tokenSecret = "my-token-secret";

router.get('/login', (req, res) =>{
    User.findOne({email: req.body.email})
    .then(User => {
        if(!User) res.status(404).json({error: 'no user with that email found'})
        else {
            bcrypt.compare(req.body.password, User.password, (error, match) => {
                if(error) res.status(500).json(error)
                else if (match) res.status(200).json({token: generateToken(User)})
                else res.status(403).json({error: 'password do not match'})
            })
        }
    })
});

function generateToken(User){
    return jwt.sign({data: User}, tokenSecret, {expiresIn: '24h'});
}

module.exports = router