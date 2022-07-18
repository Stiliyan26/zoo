import styles from './Catalog.module.css';
import { Link } from "react-router-dom";

const AnimalCard = ({
    animal
}) => {
    return (
        <div className={styles.card}>
            <div className={styles['product-image']}>
                <img src={animal.image} />
            </div>

            <div className={styles['product-info']}>
                <h4>Name: {animal.name}</h4>
                <h4>Animal: {animal.animal}</h4>
            </div>

            <div className={styles.btn}>
                <Link to={`/details/${animal._id}`}><button type="button"><h2>Details</h2></button></Link>
            </div>
        </div>
    );
}

export default AnimalCard;