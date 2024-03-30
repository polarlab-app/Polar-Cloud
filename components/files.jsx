'use client';

import path from 'path';
import styles from '@css/home/files.module.css';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import getFiles from '@lib/getFiles';
import { useData } from '@/app/home/context';

export default function Files() {
    const { dir, setDir } = useData();
    const [path, setPath] = useState('/personal');
    const [directoryStructure, setDirectoryStructure] = useState([]);

    useEffect(() => {
        const fetchDirectoryStructure = async () => {
            const res = await getFiles(path);
            const data = JSON.parse(res);
            setDirectoryStructure(data);
        };

        fetchDirectoryStructure();
    }, [path]);

    return (
        <div className={styles.files}>
            {directoryStructure.map((item) => {
                if (item.isDirectory) {
                    return (
                        <div className={styles.file} key={item.name}>
                            <Image
                                alt='test'
                                src='https://cdn.polarlab.app/src/icons/mono/mono_file-word.png'
                                width='512'
                                height='512'
                                className={styles.icon}
                            />
                            <div className={styles.itemtext}>
                                <h3 className={styles.filename}>{item.name}</h3>
                                <div className={styles.metadata}>
                                    <p className={styles.meta}>9.5 KB</p>
                                    <p className={styles.meta}>Directory</p>
                                </div>
                            </div>
                        </div>
                    );
                }
                return;
            })}
            {directoryStructure.map((item) => {
                if (!item.isDirectory) {
                    return (
                        <div className={styles.file} key={item.name}>
                            <Image
                                alt='test'
                                src='https://cdn.polarlab.app/src/icons/mono/mono_file-word.png'
                                width='512'
                                height='512'
                                className={styles.icon}
                            />
                            <div className={styles.itemtext}>
                                <h3 className={styles.filename}>{item.name}</h3>
                                <div className={styles.metadata}>
                                    <p className={styles.meta}>9.5 KB</p>
                                    <p className={styles.meta}>JS File</p>
                                </div>
                            </div>
                        </div>
                    );
                }
                return;
            })}
        </div>
    );
}
