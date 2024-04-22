'use client';
import { useState } from 'react';
import createFolder from '@/lib/files/createFolder';
import styles from '@css/home/modals.module.css';

export default function CreateFolder(props) {
    const [folderName, setFolderName] = useState('');

    async function submitFolder() {
        e.preventDefault();
        await createFolder(props.dir, folderName);
    }

    return (
        <div className={styles.modal}>
            <h2 className={styles.header}>Create Folder</h2>
            <div className={styles.inputcontainer}>
                <label className={styles.label}>Folder Name</label>
                <input type='text' placeholder='Folder Name' onChange={(e) => setFolderName(e.target.value)}></input>
            </div>
            <button className={styles.button} onClick={submitFolder}>
                Create
            </button>
        </div>
    );
}
