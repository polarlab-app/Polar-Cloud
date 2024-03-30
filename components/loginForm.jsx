'use client';

import { useState } from 'react';

import styles from '@css/core/login.module.css';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    async function handleLogin() {
        if (!password || !username) {
            setError('Both values are required!');
        }
    }
    return (
        <div className={styles.leftside}>
            <div className={styles.inputs}>
                {error && <p className={styles.error}>{error}</p>}
                <div className={styles.inputcontainer}>
                    <p className={styles.inputlabel}>Username</p>
                    <input
                        type='test'
                        placeholder='Username'
                        className={styles.input}
                        onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div className={styles.inputcontainer}>
                    <p className={styles.inputlabel}>Username</p>
                    <input
                        type='password'
                        placeholder='Password'
                        className={styles.input}
                        onChange={(e) => setPassword(e.target.value)}></input>
                </div>
            </div>
            <button className={styles.submit} onClick={handleLogin}>
                Login
            </button>
        </div>
    );
}
