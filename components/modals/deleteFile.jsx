import { useState } from 'react';
import deleteFile from '@/lib/files/deleteFile';
import styles from '@css/home/modals.module.css';

export default function DeleteFile(dir) {

    async function submitDelete() {
        e.preventDefault();
        await deleteFile(dir);
    }

    return (
        <div className={styles.modal}>
            <h2 className={styles.header}>Delete File?</h2>
            <p className={styles.description}>Are you sure you want to delete selected file? This action is irreversible!</p>
            <button className={`${styles.button} ${styles.deletebutton} `} onClick={submitDelete}>
                Create
            </button>
        </div>
    );
}