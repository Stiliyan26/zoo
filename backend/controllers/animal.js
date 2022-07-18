const router = require('express').Router();

const mapErrors = require('../util/mapErrors');
const { createAnimal, getAllAnimals, getAnimalById, updateAnimal } = require('../services/animalServiceBE');

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

router.post('/edit/:animalId', async (req, res) => {
    const animalId = req.params.animalId;
    const userId = req.body.userId;

    const currentAnimal = await getAnimalById(animalId);


    const animalData = {
        name: req.body.name,
        animal: req.body.animal,
        description: req.body.description,
        image: req.body.image
    }
    try {
        if (userId != currentAnimal.ownerId) {
            throw new Error('This user is has no premision to edit this post!');
        }

        const updatedAnimal = await updateAnimal(animalId, animalData);

        res.json(updatedAnimal);
    } catch (err){
        const errors = mapErrors(err);

        res.json(errors);
    }
});

module.exports = router;
