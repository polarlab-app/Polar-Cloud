'use client';

import { useState } from 'react';
import styles from '@css/home/panel.module.css';
import CreateFile from './modals/createFile';
import CreateFolder from './modals/createFolder';
import { useData } from '@/app/home/context';
export default function ControlPanel() {
    const { dir, setDir } = useData();
    const [modal, setModal] = useState(null);

    return (
        <>
            {modal ? modal : null}
            <div className={styles.panel}>
                <h2 className={styles.directory}>{dir}</h2>
                <div className={styles.dropdown}>
                    <div className={styles.selector}>New</div>
                    <ul className={styles.options}>
                        <li className={styles.option} onClick={() => setModal(<CreateFolder />)}>
                            <p className={styles.optiontext}>Create Folder</p>
                        </li>
                        <li className={styles.option} onClick={() => setModal(<CreateFile />)}>
                            <p className={styles.optiontext}>Create File</p>
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
        </>
    );
}
