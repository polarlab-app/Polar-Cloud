import styles from '@css/home/panel.module.css';

export default function ControlPanel() {
    return (
        <div className={styles.panel}>
            <h2 className={styles.directory}>Testing My Ass</h2>
            <div className={styles.dropdown}>
                <p className={styles.selector}>
                    New
                    <ul className={styles.options}>
                        <li className={styles.option}>
                            <p className={styles.optiontext}>Create Folder</p>
                        </li>
                        <li className={styles.option}>
                            <p className={styles.optiontext}>Create File</p>
                        </li>
                        <li className={styles.option}>
                            <p className={styles.optiontext}>Upload Folder</p>
                        </li>
                        <li className={styles.option}>
                            <p className={styles.optiontext}>Upload File</p>
                        </li>
                    </ul>
                </p>
            </div>
        </div>
    );
}
