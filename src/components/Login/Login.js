import { Fragment, useState } from 'react';

import styles from './Login.module.css';
import { Link, useNavigate } from "react-router-dom";
import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';

const Login = () => {
    const [errors, setErrors] = useState([]);
    const { login } = useAuthContext();
    const navigate = useNavigate();

    const loginSubmitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { email, password } = Object.fromEntries(formData);

        authService.login(email, password)
            .then(res => {
                if (res.length > 0) {
                    setErrors(res);
                } else {
                    login(res);
                    setErrors([]);
                    navigate('/');
                }
            });
    }

    const index = () => {
        return Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 5);
    }

    return (
        <Fragment>
            <div className={styles["errorContainer"]}>
                {errors.map((e) => <p key={index()}>{e.msg}</p>)}
            </div>

            <div className={styles.center}>
                <h1>Login</h1>
                <form onSubmit={loginSubmitHandler} method="POST">
                    <div className={styles.txt_field}>
                        <input type="text" name="email" placeholder='Type your email...'/>
                        <span></span>
                        <label>Email</label>
                    </div>
                    <div className={styles.txt_field}>
                        <input type="password" name="password" placeholder='Type your password...' />
                        <span></span>
                        <label>Password</label>
                    </div>

                    <input type="submit" value="Login" />
                    <div className={styles.signup_link}>
                        Not a member? <Link to="/register">Signup</Link>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default Login;