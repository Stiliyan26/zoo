import styles from './Register.module.css';

import { Link } from "react-router-dom";

const Register = () => {

    return (
        <div className={styles.center}>
            <h1>Register</h1>
            <form method="POST">
                <div className={styles.txt_field}>
                    <input type="text" name="email" />
                    <span></span>
                    <label>Email</label>
                </div>
                <div className={styles.txt_field}>
                    <input type="password" name="password" />
                    <span></span>
                    <label>Password</label>
                </div>
                <div className={styles.txt_field}>
                    <input type="password" name="repass" />
                    <span></span>
                    <label>Repeat Password</label>
                </div>
                <input type="submit" value="Register" />
                <div className={styles.signup_link}>
                    Already have an account? <Link to="/login">Login in</Link>
                </div>
            </form>
        </div>
    );
}

export default Register;

