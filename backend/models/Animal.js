const { Schema, model, Types: { ObjectId } } = require('mongoose');

const animalSchema = new Schema({
    name: { type: String, required: true, minlength: [4, 'The Name should be at least 4 characters long!'] },
    animal: { type: String, required: true, minlength: [4, 'The Animal type should be at least 4 characters long!'] },
    description: { type: String, required: true },
    image: { type: String, required: true },
    ownerId: { type: ObjectId, ref: 'User' },
    usersLiked: { type: [ObjectId], ref: 'User', default: [] },
    likes: { type: Number, default: 0 }
});

const Animal = model('Animal', animalSchema);

module.exports = Animal;