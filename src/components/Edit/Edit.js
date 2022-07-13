
import styles from './Edit.module.css';

const Edit = () => {

    const onEditHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
    }

    return (
        <div className={styles.center}>
            <h1>Edit</h1>
            <form onSubmit={onEditHandler} method="POST">
                <div className={styles.txt_field}>
                    <input type="text" name="name" value="Bogdan"/>
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

                <input type="submit" value="Save changes" />
            </form>
        </div>
    );
}

export default Edit;