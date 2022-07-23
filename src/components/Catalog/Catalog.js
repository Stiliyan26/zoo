import styles from './Catalog.module.css';
import AnimalCard from '../AnimalCard/AnimalCard';

import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import * as animalService from '../../services/animalService';

const Catalog = () => {
    const [loading, setLoading] = useState(false);
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            animalService.getAllAnimals()
                .then((res) => {
                    setAnimals(res);
                    setLoading(false);
                });
        }, 500);
    }, []);

    const noPosts =
        (
            <h3 className={styles['no-articles']}>No posts yet</h3>
        );

    const posts =
        (
            <div className={styles.container}>
                {animals.map(animal => <AnimalCard key={animal._id} animal={animal} />)}
            </div>
        );

    const content = animals.length !== 0
        ? posts
        : noPosts

    return (
        <Fragment>
            <h1 className={styles.catalog}>Catalog</h1>
            {loading
                ? <h1 className={styles.loading}>Loading...</h1>
                : content
            }
        </Fragment>
    )
}

export default Catalog;