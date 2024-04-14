'use client';
import styles from '@css/home/files.module.css';
import { extensions, images } from '@data/files.json';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import getFiles from '@lib/getFiles';
import { useData } from '@/app/home/context';

export default function Files() {
    const { dir, setDir } = useData();
    console.log(dir);
    const [directoryStructure, setDirectoryStructure] = useState([]);
    const [showContextMenu, setShowContextMenu] = useState(false);
    const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });
    const [activeItem, setActiveItem] = useState(null);

    useEffect(() => {
        const fetchDirectoryStructure = async () => {
            const res = await getFiles(dir);
            const data = JSON.parse(res);
            const sortedData = data.sort((a, b) => {
                if (a.isDirectory && !b.isDirectory) return -1;
                if (!a.isDirectory && b.isDirectory) return 1;
                return a.name.localeCompare(b.name);
            });
            setDirectoryStructure(sortedData);
        };

        fetchDirectoryStructure();
    }, [dir]);
    /*useEffect(() => {
        if (activeItem) {
            const selectedItem = directoryStructure.find((item) => item.name === activeItem);
            if (selectedItem && selectedItem.isDirectory) {
                setDir(`${dir}/${activeItem}`);
                setActiveItem(null);
            }
        }
    }, [activeItem, directoryStructure, dir]);*/

    const handleRightClick = (e, item) => {
        e.preventDefault();
        setShowContextMenu(true);
        setContextMenuPosition({ x: e.clientX, y: e.clientY });
        setActiveItem(item.name);
    };

    const handleLeftClick = (e, item) => {
        e.stopPropagation();
        e.preventDefault();
        setShowContextMenu(false);
        if (activeItem == item.name && directoryStructure.find((item) => item.name === activeItem).isDirectory) {
            setDir(`${dir}/${activeItem}`);
            setActiveItem(null);
        } else {
            setActiveItem(item.name);
        }
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

    const isSubdirectory = dir.split('/').length > 2;

    return (
        <div className={styles.files} onContextMenu={(e) => e.preventDefault()} onClick={() => handleLeftClick()}>
            {isSubdirectory && (
                <div
                    className={`${styles.folder} ${styles.parentDirectory}`}
                    key='parent-dir:D'
                    onClick={() => setDir(dir.substring(0, dir.lastIndexOf('/') + 1).slice(0, -1))}>
                    <Image
                        alt='Parent Directory'
                        src='https://cdn.polarlab.app/src/icons/mono/mono_folder.png'
                        width='512'
                        height='512'
                        className={styles.icon}
                    />
                    <div className={styles.itemtext}>
                        <h3 className={styles.filename}>Parent Directory</h3>
                    </div>
                </div>
            )}
            {directoryStructure.map((item) => {
                const Component = item.isDirectory ? 'folder' : 'file';
                const iconSrc = item.isDirectory
                    ? 'https://cdn.polarlab.app/src/icons/mono/mono_folder.png'
                    : 'https://cdn.polarlab.app/src/icons/mono/mono_file-word.png';
                const itemParts = item.name.split('.');
                const isActive = activeItem === item.name;
                const displayName = item.isDirectory ? item.name : itemParts.slice(0, -1).join('.');
                const extension = item.isDirectory ? '' : `.${itemParts.slice(-1)}`;
                return (
                    <div
                        className={`${styles[Component]} ${isActive ? styles.activefile : ''}`}
                        key={item.name}
                        onContextMenu={(e) => handleRightClick(e, item)}
                        onClick={(e) => handleLeftClick(e, item)}>
                        <Image alt='File Icon' src={iconSrc} width='512' height='512' className={styles.icon} />
                        <div className={styles.itemtext}>
                            <h3 className={styles.filename}>
                                {displayName}
                                <span className={styles.extension}>{extension}</span>
                            </h3>
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
