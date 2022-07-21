const Animal = require('../models/Animal');

const getAllAnimals = async () => {
    const allAnimals = await Animal.find({}).lean();

    return allAnimals;
}

const getAnimalById = async (animalId) => {
    const animal = await Animal.findById(animalId).lean();

    return await animal;
}

const createAnimal = async (animalData) => {
    const newAnimal = new Animal(animalData);

    return await newAnimal.save();
}

const updateAnimal = async (animalId, animalData) => {
    const existing = await Animal.findById(animalId);

    existing.name = animalData.name;
    existing.animal = animalData.animal;
    existing.description = animalData.description;
    existing.image = animalData.image;

    return await existing.save();
}

const deleteAnimalById = async (animalId) => {
    await Animal.findByIdAndDelete(animalId);
}

const likeAnimal = async (animalId, userId) => {
    const existing = await Animal.findById(animalId);

    if (existing.likes.includes(userId)) {
        throw new Error('This user already liked this post!');
    }

    existing.likes.push(userId);

    return await existing.save();
}

const getPostsByOwner = async (userId) => {
    const myPosts = await Animal.find({ ownerId: userId }).lean();

    return myPosts;
}

module.exports = {
    getAllAnimals,
    createAnimal,
    getAnimalById,
    updateAnimal,
    deleteAnimalById,
    likeAnimal,
    getPostsByOwner
}