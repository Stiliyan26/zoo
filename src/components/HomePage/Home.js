import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.content}>
            <h1>POST YOUR FAVORITE ANIMALS</h1>
            <p>Post all of your favorite animals you want to see in our zoo.</p>
            <div>
                <a href="/catalog"><button><span></span>GO TO CATALOG</button></a>
            </div>
        </div>
    );
}

export default Home;