const router = require('express').Router();
const User = require('../models/User');

const mapErrors = require('../util/mapErrors');

const { registerUser, loginUser } = require('../services/authServiceBE');

router.get('/', (req, res) => {
    User.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log('Error:', error);
        });
});

router.post('/login', async (req, res) => {
    try {
        const user = await loginUser(req.body.email, req.body.password);
        
        res.json(user);
    } catch (err) {
        const errors = mapErrors(err);
        res.json(errors);
    }
});

router.post('/register', async (req, res) => {
    try {
        if (req.body.password.trim().length < 3) {
            throw new Error('Password should be at least 3 characters long!');
        }
        if (req.body.password.trim() != req.body.repass.trim()) {
            throw new Error('The repeat password should be equal to the password!');
        }

        const user = await registerUser(req.body.email, req.body.password);

        res.json(user);

    } catch (err) {
        const errors = mapErrors(err);
        res.json(errors);
    }
});


module.exports = router;