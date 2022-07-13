import { Link } from "react-router-dom";

import styles from './Create.module.css';

const Create = () => {

    const onCreateHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        
    }

    return (
        <div className={styles.center}>
            <h1>Create</h1>
            <form onSubmit={onCreateHandler} method="POST">
                <div className={styles.txt_field}>
                    <input type="text" name="name" />
                    <span></span>
                    <label>Name</label>
                </div>
                <div className={styles.txt_field}>
                    <input type="text" name="animal" />
                    <span></span>
                    <label>Animal</label>
                </div>

                <div className={styles.txt_field}>
                    <input type="text" name="description" />
                    <span></span>
                    <label>Description</label>
                </div>

                <div className={styles.txt_field}>
                    <input type="text" name="image" />
                    <span></span>
                    <label>Image</label>
                </div>

                <input type="submit" value="Create" />
            </form>
        </div>
    );
}

export default Create;