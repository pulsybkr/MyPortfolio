import React from "react";
// import "../styles/perso.css";
import { Button, KeyboardArrowRight } from "@/utils/SharedModule";
import Paragraph from "./Character";

export default function About() {
    return (
        <>
        <section id="about" className="flex flex-col justify-center p-8 md:p-16 pt-16 lg:p-32 md:pt-48 text-white bg-sky-500">
            <h4 className="uppercase font-bold mb-4 md:mb-8">
                Une agence digital
            </h4>
            
            <Paragraph paragraph="Nous sommes spécialisée dans la création et la refonte de sites web, ainsi que dans la conception de filtres Snapchat. Nous aidons les entreprises de toutes tailles à développer leur présence en ligne en offrant des solutions sur mesure adaptées à leurs besoins." />

            <p className="text-white text-lg font-extralight font-mono mt-4 px-2 md:px-16">
            Que vous soyez une start-up, une petite entreprise ou un commerce local, nous avons l'expertise pour créer des sites web modernes, ergonomiques et optimisés pour le référencement, afin que vos clients vous trouvent facilement.
            </p>
        </section>
        <div id="services" className="bg-white h-[50vh] md:h-[calc(100vh-90px)] text-[#000 !important] flex flex-col justify-center items-center">
            <h4 className="text-sky-500 font-bold mb-8">
                Ce que nous faisons
            </h4>
        </div>
        </>
    );
}
