'use client';

import { useState } from 'react';
import styles from '@css/home/panel.module.css';
import createFile from '@/lib/files/createFile';
import createFolder from '@/lib/files/createFolder';
import { useData } from '@/app/home/context';
export default function ControlPanel() {
    const { dir, setDir } = useData();

    const [folderName, setFolderName] = useState('');
    const [fileName, setFileName] = useState('');
    const [fileExtension, setFileExtension] = useState('');

    const handleCreateFolder = async () => {
        await createFolder(dir, folderName);
        alert(`Folder ${folderName} created successfully.`);
    };

    const handleCreateFile = async () => {
        await createFile(fileName, fileExtension, dir);
        alert(`File ${fileName}.${fileExtension} created successfully.`);
    };

    return (
        <div className={styles.panel}>
            <h2 className={styles.directory}>Testing My Ass</h2>
            <div className={styles.dropdown}>
                <div className={styles.selector}>
                    New
                    <ul className={styles.options}>
                        <li className={styles.option} onClick={() => setFolderName(prompt('Enter folder name:'))}>
                            <p className={styles.optiontext} onClick={handleCreateFolder}>
                                Create Folder
                            </p>
                        </li>
                        <li
                            className={styles.option}
                            onClick={() => {
                                setFileName(prompt('Enter file name:'));
                                setFileExtension(prompt('Enter file extension:'));
                            }}>
                            <p className={styles.optiontext} onClick={handleCreateFile}>
                                Create File
                            </p>
                        </li>
                        <li className={styles.option}>
                            <p className={styles.optiontext}>Upload Folder</p>
                        </li>
                        <li className={styles.option}>
                            <p className={styles.optiontext}>Upload File</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
