import styles from './Edit.module.css';

import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useState, Fragment, useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import * as animalService from '../../services/animalService';


const Edit = () => {
    const { animalId } = useParams();
    const { user } = useAuthContext();
    const userId = user._id;
    const navigate = useNavigate();

    const [animal, setAnimal] = useState(animalId);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        animalService.getAnimalById(animalId)
            .then((res) => {
                setAnimal(res);
            });
    }, [animalId]);

    const editSubmitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { name, animal, description, image } = Object.fromEntries(formData);
        const data = { name, animal, description, image };

        animalService.updateAnimal(data, animalId, userId)
            .then(res => {
                if (res.length > 0){
                    setErrors(res);
                } else {
                    setAnimal(res);
                    setErrors([]);
                    navigate(`/details/${animalId}`);
                }
            });
    }

    const index = () => {
        return Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 5);
    }

    return (
        <Fragment>
            <div className={styles["errorContainer"]}>
                {errors.map((e) => <p key={index()}>{e.msg}</p>)}
            </div>

            <div className={styles.center}>
                <h1>Edit</h1>
                <form method="POST" onSubmit={editSubmitHandler}>
                    <div className={styles.txt_field}>
                        <input type="text" name="name" defaultValue={animal.name} placeholder="Type animal name..." />
                        <span></span>
                        <label>Name</label>
                    </div>
                    <div className={styles.txt_field}>
                        <input type="text" name="animal" defaultValue={animal.animal} placeholder="Type animal type..." />
                        <span></span>
                        <label>Animal</label>
                    </div>

                    <div className={styles.txt_field}>
                        <input type="text" name="description" defaultValue={animal.description} placeholder="Type description of the animal..." />
                        <span></span>
                        <label>Description</label>
                    </div>

                    <div className={styles.txt_field}>
                        <input type="text" name="image" defaultValue={animal.image} placeholder="/images/animals/..." />
                        <span></span>
                        <label>Image</label>
                    </div>

                    <input type="submit" value="Save changes" />

                    <div className={styles.signup_link}>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default Edit;