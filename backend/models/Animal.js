const { Schema, model, Types: { ObjectId } } = require('mongoose');

const animalSchema = new Schema({
    name: { type: String, required: true, minlength: [4, 'The Name should be at least 4 characters long!'] },
    animal: { type: String, required: true, minlength: [3, 'The Animal type should be at least 3 characters long!'] },
    description: { type: String, required: true, minlength: [10, 'The Description should be at least 10 characters long!']},
    image: { type: String, required: true },
    ownerId: { type: ObjectId, ref: 'User' },
    likes: { type: [ObjectId], ref: 'User', default: [] },
});

const Animal = model('Animal', animalSchema);

module.exports = Animal;