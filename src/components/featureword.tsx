import React from "react";
// import "../styles/perso.css";
import { Button, KeyboardArrowRight } from "@/utils/SharedModule";

export default function FeatureWord() {
  return (
    <section id="projet" className="flex flex-col justify-center p-8 md:p-32 pt-48 h-auto text-black bg-white">
      <h2 className="text-black text-2xl md:text-4xl font-semibold">
        Mes projets
      </h2>
      <p className="text-black text-lg font-extralight font-mono mt-4">
        Découvrez ici quelques-uns des derniers projets sur lesquels j'ai travaillé.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mt-16">
      <div className=" max-w-[500px] cursor-pointer max-h-[600px] relative">
          <div className="custom-image w-full h-full relative z-0">
            <img
              src="/images/owaba_1.jpg"
              alt="Owaba"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute md:rounded-lg w-full bg-white md:bg-white/80 p-4 md:w-auto bottom-0 md:bottom-10 text-right right-0 md:right-[-40px] z-10 text-black backdrop-blur-sm">
            <h3 className="text-2xl md:text-4xl font-semibold">Owaba Music</h3>
            <p className="text-base md:text-lg font-extralight font-mono">Site web de streaming live pour un concert</p>
          </div>
        </div>

        <div className=" max-w-[500px] cursor-pointer max-h-[600px] relative">
          <div className="custom-image w-full h-full relative z-0">
            <img
              src="/images/jadelec_2.jpg"
              alt="Jadelec"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute md:rounded-lg w-full bg-white md:bg-white/80 p-4 md:w-auto bottom-0 md:bottom-10 text-right right-0 md:right-[-40px] z-10 text-black backdrop-blur-sm">
            <h3 className="text-2xl md:text-4xl font-semibold">Jadelec</h3>
            <p className="text-base md:text-lg font-extralight font-mono">Site web, entreprise d'electricité</p>
          </div>
        </div>

        <div className=" max-w-[500px] cursor-pointer max-h-[600px] relative">
          <div className="custom-image w-full h-full relative z-0">
            <img
              src="/images/nepal_2.jpg"
              alt="Nepal travel"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute md:rounded-lg w-full bg-white md:bg-white/80 p-4 md:w-auto bottom-0 md:bottom-10 text-right right-0 md:right-[-40px] z-10 text-black backdrop-blur-sm">
            <h3 className="text-2xl md:text-4xl font-semibold">Nepal travel</h3>
            <p className="text-base md:text-lg font-extralight font-mono">Site web, de reservation de voyage</p>
          </div>
        </div>

        <div className=" max-w-[500px] cursor-pointer max-h-[600px] relative">
          <div className="custom-image w-full h-full relative z-0">
            <img
              src="/images/ump_2.jpg"
              alt="Ump nettoayge"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute md:rounded-lg w-full bg-white md:bg-white/80 p-4 md:w-auto bottom-0 md:bottom-10 text-right right-0 md:right-[-40px] z-10 text-black backdrop-blur-sm">
            <h3 className="text-2xl md:text-4xl font-semibold">UMP nettoayge</h3>
            <p className="text-base md:text-lg font-extralight font-mono">Site web, entretien de vitre</p>
          </div>
        </div>

        <div className=" max-w-[500px] cursor-pointer max-h-[600px] relative">
          <div className="custom-image w-full h-full relative z-0">
            <img
              src="/images/mono_2.jpg"
              alt="Monotote"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute md:rounded-lg w-full bg-white md:bg-white/80 p-4 md:w-auto bottom-0 md:bottom-10 text-right right-0 md:right-[-40px] z-10 text-black backdrop-blur-sm">
            <h3 className="text-2xl md:text-4xl font-semibold">Monotote</h3>
            <p className="text-base md:text-lg font-extralight font-mono">Site de vente de sac ecofriendly</p>
          </div>
        </div>

        <div className=" max-w-[500px] cursor-pointer max-h-[600px] relative">
          <div className="custom-image w-full h-full relative z-0">
            <img
              src="/images/congo_1.jpg"
              alt="Congo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute md:rounded-lg w-full bg-white md:bg-white/80 p-4 md:w-auto bottom-0 md:bottom-10 text-right right-0 md:right-[-40px] z-10 text-black backdrop-blur-sm">
            <h3 className="text-2xl md:text-4xl font-semibold">Visit Congo</h3>
            <p className="text-base md:text-lg font-extralight font-mono">Site web, tourisme éco-responsable</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-32 md:mt-64 mb-64">
         <Button
          endDecorator={<KeyboardArrowRight />}
          color="neutral"
          variant="solid"
          size="lg"
          onClick={() => {
            window.open("https://github.com/pulsybkr", "_blank");
          }}
        >
          Voir plus de projets
        </Button> 
      </div>
    </section>
  );
}
