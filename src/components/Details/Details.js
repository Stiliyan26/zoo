import styles from './Details.module.css';

import { useAuthContext } from '../../contexts/AuthContext'
import { Link, useParams } from "react-router-dom";
import * as animalService from '../../services/animalService';
import { useState, useEffect, Fragment } from 'react';

const Details = () => {
    const { animalId } = useParams();
    const { user, isAuthenticated } = useAuthContext();

    const [animal, setAnimal] = useState(animalId);

    useEffect(() => {
        animalService.getAnimalById(animalId)
            .then((res) => {
                setAnimal(res);
            });
    }, [animalId]);

    const ownerButtons = (
        <Fragment>
            <Link className={styles.button} to={`/edit/${animalId}`}>Edit</Link>
            <Link className={styles.button} to="/delete">Delete</Link>
        </Fragment>
    )

    const userButtons = (
        <Link className={styles.button} to="/like">Like</Link>
    )

    return (
        <section id="details-page" className={styles.details}>
            <div className={styles['animal-information']}>
                <h3>Name: {animal.name}</h3>
                <p className={styles.type}>Animal: {animal.animal}</p>
                <p className={styles.img}>
                    <img className={styles.special} src={animal.image} />
                </p>
                <div className={styles.actions}>
                    {isAuthenticated && 
                        (user._id == animal.ownerId
                            ? ownerButtons
                            : userButtons
                        )
                    }

                    <div className={styles.likes}>
                        <img className={styles.hearts} src="/images/heart.png" />
                        <p className={styles['total-likes']}>Likes: {animal.likes}</p>
                    </div>
                </div>
            </div>
            <div className={styles['pet-description']}>
                <h3>Description:</h3>
                <p>{animal.description}</p>
            </div>
        </section>
    )
}

export default Details;