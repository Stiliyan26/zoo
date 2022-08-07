import styles from './Create.module.css';

import { useNavigate } from "react-router-dom";
import { useState, Fragment } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import * as animalService from '../../services/animalService';

const Create = () => {
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate(); 
    const { user } = useAuthContext();

    const createSubmitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { name, animal, description, image } = Object.fromEntries(formData);
        const data = { name, animal, description, image, userId: user._id};

        animalService.createAnimal(data)
            .then((res) => {
                if (res.length > 0) {
                    setErrors(res);
                } else {
                    setErrors([]);
                    navigate('/catalog');
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
                <h1>Create</h1>
                <form method="POST" onSubmit={createSubmitHandler}>
                    <div className={styles.txt_field}>
                        <input type="text" name="name" placeholder="Type animal name..." />
                        <span></span>
                        <label>Name</label>
                    </div>
                    <div className={styles.txt_field}>
                        <input type="text" name="animal" placeholder="Type animal type..."/>
                        <span></span>
                        <label>Animal</label>
                    </div>

                    <div className={styles.txt_field}>
                        <input type="text" name="description" placeholder="Type description of the animal..."/>
                        <span></span>
                        <label>Description</label>
                    </div>

                    <div className={styles.txt_field}>
                        <input type="text" name="image" placeholder="/images/animals/..."/>
                        <span></span>
                        <label>Image</label>
                    </div>

                    <input type="submit" value="Create" />

                    <div className={styles.signup_link}>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default Create;