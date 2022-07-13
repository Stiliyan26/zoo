import styles from './Catalog.module.css';

import { Fragment } from 'react';
import { Link } from "react-router-dom";

const Catalog = () => {
    return (
        <Fragment>
            <h1 className={styles.catalog}>Catalog</h1>

            <div className={styles.container}>

                <div className={styles.card}>
                    <div className={styles['product-image']}>
                        <img src="/images/animals/monkey.jpg" />
                    </div>

                    <div className={styles['product-info']}>
                        <h4>Anial: Monkey</h4>
                        <h4>Weight: 70kg</h4>
                    </div>

                    <div className={styles.btn}>
                        <Link to="/details"><button type="button"><h2>Details</h2></button></Link>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles['product-image']}>
                        <img src="/images/animals/tiger.jpg" />
                    </div>

                    <div className={styles['product-info']}>
                        <h4>Animal: Tiger</h4>
                        <h4>Weight: 200kg</h4>
                    </div>

                    <div className={styles.btn}>
                        <Link to="/details"><button type="button"><h2>Details</h2></button></Link>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles['product-image']}>
                        <img src="/images/animals/lion.jpg" />
                    </div>

                    <div className={styles['product-info']}>
                        <h4>Animal: Lion</h4>
                        <h4>Weight: 210kg</h4>
                    </div>

                    <div className={styles.btn}>
                        <Link to="/details"><button type="button"><h2>Details</h2></button></Link>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default Catalog;