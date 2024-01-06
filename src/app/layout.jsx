import styles from '@/styles/global.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

const RootLayout = ({ children }) => {

  return (
    <html>
      <body className={styles.body}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

export default RootLayout;