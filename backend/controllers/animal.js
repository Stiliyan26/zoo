const router = require('express').Router();

const mapErrors = require('../util/mapErrors');
const { createAnimal, getAllAnimals, getAnimalById } = require('../services/animalServiceBE');

router.get('/', async (req, res) => {
    const allAnimals = await getAllAnimals();

    res.json(allAnimals);
});

router.get('/catalog', async (req, res) => {
    const allAnimals = await getAllAnimals();

    res.json(allAnimals);
});

router.get('/details/:animalId', async (req, res) => {
    const animalId = req.params.animalId;
    const animal = await getAnimalById(animalId);
    
    res.json(animal);
});

router.post('/create', async (req, res) => {
    const animalData = {
        name: req.body.name,
        animal: req.body.animal,
        description: req.body.description,
        image: req.body.image,
        ownerId: req.body.userId
    };

    try {
        const animal = await createAnimal(animalData);

        res.json(animal);
    } catch (err) {
        const errors = mapErrors(err);

        res.json(errors);
    }
});

module.exports = router;
