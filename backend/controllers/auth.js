const router = require('express').Router();
const User = require('../models/User');

const { isGuest } = require('../middleware/guards');

const mapErrors = require('../util/mapErrors');

const { registerUser, loginUser, returnAllUsers } = require('../services/authServiceBE');

router.get('/', async (req, res) => {
    returnAllUsers()
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log('Error:', error);
        });;
});

router.post('/login', isGuest(), async (req, res) => {
    try {
        const user = await loginUser(req.body.email, req.body.password);
        req.session.user = user;

        res.json(user);
    } catch (err) {
        const errors = mapErrors(err);
        res.json(errors);
    }
});

router.post('/register', isGuest(), async (req, res) => {
    try {
        if (req.body.password.trim().length < 3) {
            throw new Error('Password should be at least 3 characters long!');
        }
        if (req.body.password.trim() != req.body.repass.trim()) {
            throw new Error('The repeat password should be equal to the password!');
        }

        const user = await registerUser(req.body.email, req.body.password);
        req.session.user = user;

        res.json(user);

    } catch (err) {
        const errors = mapErrors(err);
        res.json(errors);
    }
});

router.get('/logout', (req, res) => {
    delete req.session.user;

    res.json('You logged out');
});


module.exports = router;