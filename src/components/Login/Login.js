import styles from './Login.module.css';

import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className={styles.center}>
            <h1>Login</h1>

            <form method='POST'>
                <div className={styles.txt_field}>
                    <input type="text" name="email" />
                    <label>Email</label>
                </div>

                <div className={styles.txt_field}>
                    <input type="password" name="password" />
                    <label>Password</label>
                </div>

                <input type="submit" value="Login"/>

                <div className={styles.signup_link}>
                   Not a member? <Link to="/register"> Sign up </Link>
                </div>
            </form>
        </div>
    );
}

export default Login;