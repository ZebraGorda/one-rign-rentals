import Script from 'next/script';
import '@styles/bootstrap.css';
import '@styles/style.css';
import Header from '@components/Header';
import Footer from '@components/Footer';


const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <meta charSet="utf-8" />
      <title>One Ring Rentals - Home</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <body>
        <div id="wrapper">
          <Header />
          {children}
          <Footer />
        </div>
        {/* Load critical scripts in RootLayout */}
        <Script src="/js/common/modernizr.js" strategy="beforeInteractive" />
        <Script src="/js/common.js" strategy="beforeInteractive" />
        <Script src="/js/common/jquery-1.11.1.min.js" strategy="beforeInteractive" />
      </body>
    
    </html>
  );
};

export default RootLayout;

