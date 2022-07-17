import { useState, useEffect, Fragment } from 'react';

import styles from './Register.module.css';
import { Link } from "react-router-dom";

import * as authService from '../../services/authService';

const Register = () => {
    const [errors, setErrors] = useState([]);

    const registerSubmitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { email, password, repass } = Object.fromEntries(formData);

        authService.register(email, password, repass)
            .then(res => {
                if (res.length > 0){
                    setErrors(res);
                } else {
                    setErrors([]);
                }
            });
    }

    return (
        <Fragment>
            <div className={styles["errorContainer"]}>
                {errors.map((e, index) => <p key={index}>{e.msg}</p>)}
            </div>
            <div className={styles.center}>
                <h1>Register</h1>
                <form method="POST" onSubmit={registerSubmitHandler}>
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
        </Fragment>
    );
}

export default Register;

