const baseUrl = 'http://localhost:3000/animals';

export const createAnimal = async (animalData) => {
    const res = await fetch(`${baseUrl}/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(animalData)
    });
    const data = await res.json();

    return data;
}

export const getAllAnimals = async () => {
    const res = await fetch(`${baseUrl}/catalog`);
    const data = await res.json();

    return data;
}

export const getAnimalById = async (animalId) => {
    const res = await fetch(`${baseUrl}/details/${animalId}`);
    const data = await res.json();

    return data;
}

export const updateAnimal = async (animalData, animalId, userId) => {
    const res = await fetch(`${baseUrl}/edit/${animalId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({...animalData, userId})
    });
    const data = await res.json();

    return data;
}
