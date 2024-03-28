import { ThemeProvider } from 'next-themes';

export default function HomeLayout({ children }) {
    return (
        <ThemeProvider
            attribute='class'
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
