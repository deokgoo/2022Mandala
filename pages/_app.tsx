import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO}/>
      <Component {...pageProps} />
    </>
  );
}

export default App;
