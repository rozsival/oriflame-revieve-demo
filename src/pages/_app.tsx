import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Revieve } from '../components/Revieve';
import '../styles/globals.css';

// NOTE: Revieve component intentionally added to the layout as the advisor should open on multiple pages
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Oriflame – Revieve Demo</title>
      </Head>
      <Revieve />
      <Component {...pageProps} />
    </>
  );
}

export default App;
