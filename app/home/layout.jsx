import { ThemeProvider } from 'next-themes';
import '@/src/css/core/themes.css';

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
            {children}
        </ThemeProvider>
    );
}
