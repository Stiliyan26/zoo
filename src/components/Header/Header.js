import { Link } from "react-router-dom";
import styles from './Header.module.css'


const Header = () => {
    return (
        <header>
            <div className={styles.navbar}>
                <Link to="/"><img src="images/logo2.png" className={styles.logo} /></Link>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/catalog">Catalog</Link></li>
                    <li><Link to="/create">Create Animal</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </div>
        </header>
    );
}


export default Header;