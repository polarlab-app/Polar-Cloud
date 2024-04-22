'use client';
import { useState } from 'react';
import createFile from '@/lib/files/createFile';
import styles from '@css/home/modals.module.css';

export default function CreateFile(props) {
    const [fileName, setFileName] = useState('');

    async function submitFile() {
        e.preventDefault();
        await createFile(props.dir, fileName);
    }

    return (
        <div className={styles.modal}>
            <h2 className={styles.header}>Create File</h2>
            <div className={styles.inputcontainer}>
                <label className={styles.label}>File Name</label>
                <input type='text' placeholder='File Name' onChange={(e) => setFileName(e.target.value)}></input>
            </div>
            <button className={styles.button} onClick={submitFile}>
                Create
            </button>
        </div>
    );
}
