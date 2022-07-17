import styles from './Details.module.css';
import { Link } from "react-router-dom";

const Details = () => {
    return (
        <section id="details-page" className={styles.details}>
            <div className={styles['animal-information']}>
                <h3>Name: Milo</h3>
                <p className={styles.type}>Type: dog</p>
                <p className={styles.img}>
                    <img className='special' src="/images/animals/monkey.jpg" />
                </p>
                <div className={styles.actions}>
                    <Link className={styles.button} to="/edit">Edit</Link>
                    <Link className={styles.button} to="/delete">Delete</Link>

                    <Link className={styles.button} to="/like">Like</Link>

                    <div className={styles.likes}>
                        <img className={styles.hearts} src="/images/heart.png" />
                        <p className={styles['total-likes']}>Likes: 0</p>
                    </div>
                </div>
            </div>
            <div className={styles['pet-description']}>
                <h3>Description:</h3>
                <p>Today, some dogs are used as pets, others are used to help humans do their work. They are a popular
                    pet because they are usually playful, friendly, loyal and listen to humans. Thirty million dogs in
                    the United States are registered as pets.[5] Dogs eat both meat and vegetables, often mixed together
                    and sold in stores as dog food. Dogs often have jobs, including as police dogs, army dogs,
                    assistance dogs, fire dogs, messenger dogs, hunting dogs, herding dogs, or rescue dogs.</p>
            </div>
        </section>
    )
}

export default Details;