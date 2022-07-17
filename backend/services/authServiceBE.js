const User = require('../models/User');

async function registerUser(email, password) {
    const existing = await getUserByEmail(email);

    if (existing) {
        throw new Error('Email is already taken!');
    }

    const user = new User({
        email,
        password
    });

    await user.save();

    return user;
}

async function getUserByEmail(email) {
    return await User.findOne({ email: new RegExp(`^${email}$`, 'i') });
}

module.exports = {
    registerUser
}

