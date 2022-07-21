import styles from './Profile.module.css';
import AnimalCard from '../AnimalCard/AnimalCard';

import { useAuthContext } from '../../contexts/AuthContext';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import * as animalService from '../../services/animalService';

const Profile = () => {
    const [loading, setLoading] = useState(false);
    const [animals, setAnimals] = useState([]);

    const { user } = useAuthContext();

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            animalService.getMyPosts(user._id)
                .then((res) => {
                    setAnimals(res);
                    setLoading(false);
                });
        }, 500);
    }, [user._id]);

    const content = animals.length !== 0
        ?
            (
                <div className={styles.container}>
                    {animals.map(animal => <AnimalCard key={animal._id} animal={animal} />)}
                </div>
            )
        :
            (
                <Fragment>
                    <h3 className={styles['no-articles']}>No posts yet.</h3>
                    <h3 className={styles['navigate']}>Go to <Link to="/create">Create Page.</Link></h3>
                </Fragment>
            )

    return (
        <Fragment>
            <h1 className={styles.catalog}>My Posts</h1>
            {loading
                ? <h1 className={styles.loading}>Loading...</h1>
                : content
            }
        </Fragment>
    )
}
export default Profile;