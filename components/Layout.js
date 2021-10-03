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
      <body className='flex flex-col min-h-screen'>
        <Header />
        <div class='flex-grow bg-gray-800'>{children}</div>
        <Footer />
      </body>
    </>
  );
}

export default Layout;
