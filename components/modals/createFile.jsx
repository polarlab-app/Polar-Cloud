import styles from '@css/home/modals.module.css';

export default function createFile() {
    return (
        <div className={styles.modal}>
            <h2 className={styles.header}>Delete File</h2>
            <p className={styles.description}>Are you sure you want to permanently delete this file?</p>
            <button className={styles.button}>Delete File</button>
        </div>
    );
}
