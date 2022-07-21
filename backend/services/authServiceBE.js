const User = require('../models/User');

async function returnAllUsers() {
    return await User.find({});
}

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

async function loginUser(email, password) {
    const user = await getUserByEmail(email);

    if (!user) {
        throw new Error('User does not exist!');
    }

    if (password.trim() != user.password.trim()) {
        throw new Error('Email or Password is inccorect!');
    }

    return user;
}

async function getUserByEmail(email) {
    return await User.findOne({ email: new RegExp(`^${email}$`, 'i') });
}

module.exports = {
    returnAllUsers,
    registerUser,
    loginUser
}

