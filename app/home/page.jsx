import Files from '@/components/files';
import styles from '@css/home/controls.module.css';

import { DataProvider } from './context';
import ControlPanel from '@/components/controlPanel';

export default function Page() {
    return (
        <div className={styles.main}>
            <DataProvider>
                <ControlPanel />
                <Files />
            </DataProvider>
        </div>
    );
}
