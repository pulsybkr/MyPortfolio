import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import PiwikPro from '@piwikpro/react-piwik-pro';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    PiwikPro.initialize('b2da65e5-4cfd-47f6-ac5c-934e1bc8551e', 'https://pulsybkr.containers.piwik.pro');
  }, [])
  return <Component {...pageProps} />
}
