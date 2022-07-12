import styles from './Login.module.css';

import { Link } from "react-router-dom";

const Login = () => {

    const onLoginHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { email, password } = Object.fromEntries(formData);

        console.log(email);
        console.log(password);
    }

    return (
        <div className={styles.center}>
            <h1>Login</h1>
            <form onSubmit={onLoginHandler} method="POST">
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

                <input type="submit" value="Login" />
                    <div className={styles.signup_link}>
                        Not a member? <Link to="/register">Signup</Link>
                    </div>
            </form>
        </div>
    );

    /*const onLogin = (e) => {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.currentTarget));
        console.log(formData);
    }

    return (
        <div className={styles.styles.center}>
            <h1>Login</h1>

            <form onSubmit={onLogin} method="POST">
                <div className={styles.styles.txt_field}>
                    <input type="text" name="email" />
                    <label>Email</label>
                </div>

                <div className={styles.styles.txt_field}>
                    <input type="password" name="password" />
                    <label>Password</label>
                </div>

                <input type="submit" value="Login" />

                <div className={styles.styles.signup_link}>
                    Not a member? <Link to="/register"> Sign up </Link>
                </div>
            </form>
        </div>
    );
    */
}

export default Login;