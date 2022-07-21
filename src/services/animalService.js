const baseUrl = 'http://localhost:3000/animals';

export const createAnimal = async (animalData) => requester(`${baseUrl}/create`, 'POST', animalData);


export const getAllAnimals = async () => requester(`${baseUrl}/catalog`, 'GET');


export const getAnimalById = async (animalId) => requester(`${baseUrl}/details/${animalId}`, 'GET')


export const updateAnimal = async (animalData, animalId, userId) => requester(`${baseUrl}/edit/${animalId}`, 'PUT', { ...animalData, userId });


export const deleteAnimal = async (animalId, userId) => requester(`${baseUrl}/delete/${animalId}`, 'DELETE', { userId });


export const likeAnimalById = async (animalId, userId) =>  requester(`${baseUrl}/likes/${animalId}`, 'PUT', { userId });


export const getMyPosts = async (userId) => requester(`${baseUrl}/profile`, 'POST', { userId });


export const requester = async (url, method = 'GET', body) => {
    const res = await fetch(url, createOptions(method, body));
    const data = await res.json();

    return data;
}

const createOptions = (method = 'GET', body) => {
    const options = {
        method
    }

    if (method == 'GET') {
        return options;
    }
    options.headers = {
        'Content-Type': 'application/json'
    };

    options.body = JSON.stringify(body);

    return options;
}
