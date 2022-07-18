const Animal = require('../models/Animal');

const getAllAnimals = async () => {
    const allAnimals = await Animal.find({}).lean();

    return allAnimals;
}

const getAnimalById = async (animalId) => {
    const animal = await Animal.findById(animalId).lean();

    return animal; 
}

const createAnimal = async (animalData) => {
    const newAnimal = new Animal(animalData);

    return await newAnimal.save();
}

module.exports = {
    getAllAnimals,
    createAnimal,
    getAnimalById
}