import styles from './Home.module.css';

import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className={styles.content}>
            <h1>POST YOUR FAVORITE ANIMALS</h1>
            <p>Post all of your favorite animals you want to see in our zoo.</p>
            <div>
                <Link to="/catalog"><button><span></span>GO TO CATALOG</button></Link>
            </div>
        </div>
    );
}

export default Home;