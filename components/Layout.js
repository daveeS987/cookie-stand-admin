import Head from 'next/head';

import Header from './Header.js';
import Footer from './Footer.js';

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
        <meta name="Davee's Cookie Stand Admin" content='A mock cookie stand admin built with nextjs and tailwindcss' />
      </Head>

      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
