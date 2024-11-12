import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Agence de développement de sites web à Meaux (77). Nous créons également des filtres et des lenses Snapchat à Paris et ses alentours. Contactez-nous pour vos projets de développement web et de création de filtres Snapchat." />
        <meta name="keywords" content="développement de site web, agence web, Meaux, 77, création de site internet, filtres Snapchat, lenses Snapchat, Paris, développement web" />
        <meta name="author" content="Matioss" />
        <meta property="og:title" content="Agence de Développement Web à Meaux (77) - Création de Filtres Snapchat à Paris" />
        <meta property="og:description" content="Nous sommes une agence de développement de sites web située à Meaux (77). Nous créons également des filtres et des lenses Snapchat à Paris et ses alentours. Contactez-nous pour vos projets de développement web et de création de filtres Snapchat." />
        <meta property="og:url" content="https://www.matioss.fr" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Agence de Développement Web à Meaux (77) - Création de Filtres Snapchat à Paris" />
        <meta name="twitter:description" content="Nous sommes une agence de développement de sites web située à Meaux (77). Nous créons également des filtres et des lenses Snapchat à Paris et ses alentours. Contactez-nous pour vos projets de développement web et de création de filtres Snapchat." />
        <link rel="canonical" href="https://www.matioss.fr" />
        <link rel="icon" href="/favicon.ico" />
        <title>Agence de Développement Web - Création de Filtres Snapchat à Paris</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
