import styles from '@css/home/nav.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function SideNav() {
    return (
        <div className={styles.nav}>
            <p className={styles.section}>Workspaces</p>
            <div className={styles.options}>
                <div className={styles.option}>
                    <Image
                        className={styles.image}
                        alt='navImage'
                        src='https://cdn.polarlab.app/src/icons/green/green_terminal.png'
                        width='512'
                        height='512'
                    />
                    <p className={styles.optiontext} href='/home/personal'>
                        Personal Files
                    </p>
                </div>
                <div className={styles.option}>
                    <Image
                        className={styles.image}
                        alt='navImage'
                        src='https://cdn.polarlab.app/src/icons/green/green_terminal.png'
                        width='512'
                        height='512'
                    />
                    <p className={styles.optiontext} href='/home/personal'>
                        Common Files
                    </p>
                </div>
            </div>
            <p className={styles.section}>Management</p>
            <div className={styles.options}>
                <div className={styles.option}>
                    <Image
                        className={styles.image}
                        alt='navImage'
                        src='https://cdn.polarlab.app/src/icons/green/green_terminal.png'
                        width='512'
                        height='512'
                    />
                    <p className={styles.optiontext} href='/home/personal'>
                        Settings
                    </p>
                </div>
                <div className={styles.option}>
                    <Image
                        className={styles.image}
                        alt='navImage'
                        src='https://cdn.polarlab.app/src/icons/green/green_terminal.png'
                        width='512'
                        height='512'
                    />
                    <p className={styles.optiontext} href='/home/personal'>
                        Logout
                    </p>
                </div>
            </div>
            <div className={styles.themeselector}></div>
        </div>
    );
}
