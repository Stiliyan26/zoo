import styles from './ErrorPage.module.css';

import { Link } from 'react-router-dom';

const errorPage = () => {

    return (
        <div className={styles["not-found"]}>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The Page you are looking for doesn't exist or another error occurred. Go to <Link to="/">Home Page.</Link></p>
        </div>
    )
}

export default errorPage;