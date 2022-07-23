import styles from './Details.module.css';

import ConfirmDialog from '../ConfirmDialog/ConfirmDialog';

import { useAuthContext } from '../../contexts/AuthContext'
import { Link, useParams, useNavigate } from "react-router-dom";
import * as animalService from '../../services/animalService';
import { useState, useEffect, Fragment } from 'react';

const Details = () => {
    const { animalId } = useParams();
    const navigate = useNavigate();
    const { user, isAuthenticated } = useAuthContext();
    const userId = user._id

    const [animal, setAnimal] = useState(animalId);
    const [dialog, setDialog] = useState({
        isLoading: false
    });

    useEffect(() => {
        animalService.getAnimalById(animalId)
            .then((res) => {
                setAnimal(res);
            });
    }, [animalId]);

    const deleteClickHandler = (e) => {
        e.preventDefault();

        setDialog({
            isLoading: true
        })
    }

    const DialogDeleteHandler = (choosed) => {
        if (choosed) {
            animalService.deleteAnimal(animalId, userId)
                .then((res) => {
                    console.log(res);
                    setDialog({
                        isLoading: false
                    });
                    navigate('/catalog');
                });
        } else {
            setDialog({
                isLoading: false
            });
        }
    }

    const likeClickHanlder = (e) => {
        e.preventDefault();

        animalService.likeAnimalById(animalId, userId)
            .then((res) => {
                setAnimal(res);
            });
    }

    const ownerButtons =
        (
            <Fragment>
                <Link className={styles.button} to={`/edit/${animalId}`}>Edit</Link>
                <Link className={styles.button} to="#" onClick={deleteClickHandler}>Delete</Link>
            </Fragment>
        )

    const likeButton =
        (
            <Link className={styles.button} to="#" onClick={likeClickHanlder}>Like</Link>
        )

    const alreadyLikeButton =
        (
            <Link className={styles.button} to="#">You already liked</Link>
        )

    const usersButton = () => {
        return animal.likes &&
            (
                animal.likes.includes(userId)
                    ? alreadyLikeButton
                    : likeButton
            )
    }

    return (
        <Fragment>
            {dialog.isLoading && <ConfirmDialog onDialog={DialogDeleteHandler} animal={animal}/>}

            <section id="details-page" className={styles.details}>
                <div className={styles['animal-information']}>
                    <h3>Name: {animal.name}</h3>
                    <p className={styles.type}>Animal: {animal.animal}</p>
                    <p className={styles.img}>
                        <img className={styles.special} src={animal.image} />
                    </p>
                    <div className={styles.actions}>
                        {isAuthenticated &&
                            (user._id === animal.ownerId
                                ? ownerButtons
                                : usersButton()
                            )
                        }

                        <div className={styles.likes}>
                            <img className={styles.hearts} src="/images/heart.png" />
                            <p className={styles['total-likes']}>Likes: {animal.likes ? animal.likes.length : 0}</p>
                        </div>
                    </div>
                </div>
                <div className={styles['pet-description']}>
                    <h3>Description:</h3>
                    <p>{animal.description}</p>
                </div>
            </section>
        </Fragment>
    )
}

export default Details;