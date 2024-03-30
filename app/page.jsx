import styles from '@css/core/login.module.css';
import Image from 'next/image';
import LoginForm from '@components/loginForm.jsx';
import { cookies } from 'next/headers';

export default function Page() {
    if (cookies().get('cloudToken')) {
        window.location.assign('/home');
    }

    return (
        <div className={styles.main}>
            <div className={styles.modal}>
                <h1 className={styles.header}>Login To Polar Cloud</h1>
                <div className={styles.innermodal}>
                    <LoginForm />
                    <Image
                        className={styles.image}
                        src='https://cdn.polarlab.app/src/icons/blue/blue_terminal.png'
                        width='512'
                        height='512'
                        alt='image'
                    />
                </div>
            </div>
        </div>
    );
}
