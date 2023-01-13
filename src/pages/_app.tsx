import 'semantic-ui-css/semantic.min.css'
import '@/styles/app.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'

import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

const getLibrary = (provider) => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 8000;
  return library;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Head>
        <title>Next Web3 Start Kit</title>
      </Head>
      <Component {...pageProps} />
    </Web3ReactProvider>
  )
}

export default MyApp
