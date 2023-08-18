import { Link } from "react-router-dom";
import styles from './Header.module.css'
import { Fragment } from "react";

import { useAuthContext } from "../../contexts/AuthContext";

const Header = () => {
    const { isAuthenticated, user } = useAuthContext();

    const guestNav = (
        <Fragment>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
        </Fragment>
    )

    const userNav = (
        <Fragment>
            <li><Link to="/create">Create Animal</Link></li>
            <li><Link to="/profile"> Posts of {user.email}</Link></li>   
            <li><Link to="/logout">Logout</Link></li>
        </Fragment>
    )

    const showNavType = isAuthenticated
        ? userNav
        : guestNav;

    return (
        <header>
            <div className={styles.navbar}>
                <Link to="/"><img src="/images/logo2.png" className={styles.logo} /></Link>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/catalog">Catalog</Link></li>
                </ul>
            </div>
        </header>
    );
}


export default Header;