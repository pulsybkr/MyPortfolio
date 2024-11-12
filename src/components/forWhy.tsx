import React from "react";
// import "../styles/perso.css";

export default function ForWhy() {
  return (
    <>
        <section className="bg-white p-8 py-16 md:py-64  md:p-32 relative z-10">
            <h2 className="text-black text-4xl font-semibold max-w-[800px] color_primary">
                Pourquoi un beau site web est crucial pour votre entreprise ?
            </h2>
            <p className="text-black text-lg font-light font-mono mt-4">
            Un beau site web est bien plus qu'une simple vitrine en ligne : c'est la première impression que vous laissez à vos visiteurs. Un site bien conçu vous permet de :
            </p>
            <ul className="text-black text-lg font-light font-mono mt-4 max-w-[750px]">
                <li className="mb-4">
                <strong className="font-bold">Renforcer la crédibilité :</strong> Un design moderne et professionnel inspire confiance et rassure vos clients potentiels.
                </li>
                <li className="mb-4">
                <strong className="font-bold">Améliorer l'expérience utilisateur :</strong> Un site agréable à naviguer, clair et fluide, incite les visiteurs à rester plus longtemps et à explorer vos services.
                </li>
                <li className="mb-4">
                <strong className="font-bold">Augmenter les conversions :</strong> Un design optimisé avec des appels à l'action bien placés aide à transformer les visiteurs en clients.
                </li>
            </ul>

            <h3 className="text-black text-2xl font-semibold max-w-[800px] color_primary mt-16">
                le référencement (SEO) est aussi important que le design ?
            </h3>
            <p className="text-black text-lg font-light font-mono mt-4">
                Un site, même magnifique, est inutile s'il n'est pas visible. Le référencement naturel (SEO) permet de rendre votre site plus visible sur Google et d'attirer du trafic qualifié. En étant bien positionné sur les moteurs de recherche, vous :
            </p>
            <ul className="text-black text-lg font-light font-mono mt-4 max-w-[750px]"> 
                <li className="mb-4">
                    <strong className="font-bold">Attirez de nouveaux clients :</strong> La majorité des internautes ne vont pas au-delà de la première page de résultats.
                </li>
                <li className="mb-4">
                    <strong className="font-bold">Économisez sur la publicité :</strong> Un bon référencement naturel vous permet d’obtenir du trafic gratuit et constant.
                </li>
                <li className="mb-4">
                     <strong className="font-bold">Gagnez un avantage concurrentiel :</strong> Un site bien référencé vous place devant vos concurrents qui n'ont pas optimisé leur SEO.
                </li>
            </ul>
            <h2 className="text-black text-4xl font-semibold max-w-[800px] color_primary mt-16">
                Nous faisons aussi des filtres Snapchat !
            </h2>
            <p className="text-black text-lg font-light font-mono mt-4">
                Les filtres Snapchat sont un outil puissant pour les entreprises qui cherchent à engager leur audience de manière créative et interactive. Ils vous permettent de :
            </p>
            <ul className="text-black text-lg font-light font-mono mt-4 max-w-[750px]">
                <li className="mb-4">
                    <strong className="font-bold">Renforcer votre image de marque :</strong> Les filtres personnalisés sont ludiques et mémorables, et permettent à vos clients d’interagir directement avec votre marque.
                </li>
                <li className="mb-4">
                    <strong className="font-bold">Atteindre un public jeune et connecté :</strong> Snapchat est très populaire parmi les jeunes générations, et un filtre bien conçu peut créer un effet viral.
                </li>
                <li className="mb-4">
                    <strong className="font-bold">Améliorer la visibilité lors d’événements :</strong> Que ce soit pour un lancement de produit, une campagne marketing ou un événement, les filtres Snapchat boostent l'engagement et augmentent la portée de votre message.
                </li>
            </ul>
        </section>
    </>
  );
}
