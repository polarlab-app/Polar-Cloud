'use client';

import { useState } from 'react';
import styles from '@/src/css/login/buttons.module.css';
import Image from 'next/image';

export default function JoinButtons() {
    const [modal, setModal] = useState(null);

    function joinWorkspace() {}

    function createWorkspace() {}

    return (
        <div className={styles.buttoncontainer}>
            {modal ? modal : null}
            <div className={styles.button} onClick={createWorkspace}>
                <Image
                    className={styles.image}
                    alt='join_image'
                    src='https://cdn.polarlab.app/src/icons/blue/blue_terminal.png'
                    width='256'
                    height='256'
                />
                <p className={styles.buttontext}>Create Workspace</p>
            </div>
            <p className={styles.middletext}>or</p>
            <div className={styles.button} onClick={joinWorkspace}>
                <Image
                    className={styles.image}
                    alt='join_image'
                    src='https://cdn.polarlab.app/src/icons/blue/blue_terminal.png'
                    width='256'
                    height='256'
                />
                <p className={styles.buttontext}>Join Workspace</p>
            </div>
        </div>
    );
}
