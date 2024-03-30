import { ThemeProvider } from 'next-themes';
import '@/src/css/core/themes.css';
import '@css/home/global.css';
import SideNav from '@components/sideNav';
import styles from '@css/home/main.module.css';
import { DataProvider } from './context';

export default function HomeLayout({ children }) {
    return (
        <ThemeProvider
            defaultTheme='dark'
            themes={[
                'dark',
                'light',
                'aqua',
                'orange',
                'mint',
                'cherry',
                'gold',
                'indigo',
                'blue',
                'theme9',
                'theme10',
            ]}>
            <DataProvider>
                <SideNav />
            </DataProvider>

            <div className={styles.main}>{children}</div>
        </ThemeProvider>
    );
}
