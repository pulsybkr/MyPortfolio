import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="développeur full stack, IA, machine learning, deep learning, open source, freelance, projets, Pulsy BACKEKOLO" />
        <meta name="author" content="Pulsy BACKEKOLO" />
        <meta property="og:title" content="Pulsy BACKEKOLO - Développeur Full Stack" />
        <meta property="og:url" content="https://pulsybkr.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pulsy BACKEKOLO - Développeur Full Stack" />
        <link rel="canonical" href="https://pulsybkr.vercel.app" />
        <link rel="icon" href="/favicon.ico" />
        <title>Pulsy BACKEKOLO - Développeur Full Stack</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
