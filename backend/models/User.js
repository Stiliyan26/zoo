const { Schema, model } = require('mongoose');

const EMAIL_PATTERN = /^([a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/;

const userSchema = new Schema({
    email: { type: String, required: true, validate: {
        validator(value){
            return EMAIL_PATTERN.test(value);
        },
        message: 'Inccorect email pattern!'
    } },
    password: { type: String, required: true}
});

const User = model('User', userSchema);

module.exports = User;