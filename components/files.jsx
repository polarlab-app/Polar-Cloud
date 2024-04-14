'use client';
import styles from '@css/home/files.module.css';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import getFiles from '@lib/getFiles';
import { useData } from '@/app/home/context';

export default function Files() {
    const { dir, setDir } = useData();
    console.log(dir);
    const [path, setPath] = useState('/common');
    const [directoryStructure, setDirectoryStructure] = useState([]);
    const [showContextMenu, setShowContextMenu] = useState(false);
    const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const fetchDirectoryStructure = async () => {
            const res = await getFiles(path);
            const data = JSON.parse(res);
            setDirectoryStructure(data);
        };

        fetchDirectoryStructure();
    }, [path]);

    const handleRightClick = (e, item) => {
        e.preventDefault();
        setShowContextMenu(true);
        setContextMenuPosition({ x: e.clientX, y: e.clientY });
    };

    const handleLeftClick = (e) => {
        setShowContextMenu(false);
    };

    const renderContextMenu = () => {
        if (!showContextMenu) return null;
        return (
            <div
                className={styles.contextMenu}
                style={{ top: `${contextMenuPosition.y}px`, left: `${contextMenuPosition.x}px` }}>
                <ul className={styles.contextMenuList}>
                    <li className={styles.contextMenuItem}>Open</li>
                    <li className={styles.contextMenuItem}>Rename</li>
                    <li className={styles.contextMenuItem}>Delete</li>
                </ul>
            </div>
        );
    };

    return (
        <div className={styles.files} onContextMenu={(e) => e.preventDefault()} onClick={handleLeftClick}>
            {directoryStructure.map((item) => {
                const Component = item.isDirectory ? 'folder' : 'file';
                const iconSrc = item.isDirectory
                    ? 'https://cdn.polarlab.app/src/icons/mono/mono_folder.png'
                    : 'https://cdn.polarlab.app/src/icons/mono/mono_file-word.png';
                return (
                    <div className={styles[Component]} key={item.name} onContextMenu={(e) => handleRightClick(e, item)}>
                        <Image alt='test' src={iconSrc} width='512' height='512' className={styles.icon} />
                        <div className={styles.itemtext}>
                            <h3 className={styles.filename}>{item.name}</h3>
                            <div className={styles.metadata}>
                                <p className={styles.meta}>9.5 KB</p>
                                <p className={styles.meta}>{item.isDirectory ? 'Directory' : 'JS File'}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
            {renderContextMenu()}
        </div>
    );
}
