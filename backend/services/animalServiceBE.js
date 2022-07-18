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

module.exports = {
    getAllAnimals,
    createAnimal,
    getAnimalById,
    updateAnimal
}