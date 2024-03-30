import '@/src/css/core/global.css';
import '@css/core/themes.css';

export const metadata = {
    title: 'Polar Cloud | Home',
    description: 'The only cloud storage solution you will ever user',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
}
