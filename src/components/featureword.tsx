import React from "react";
// import "../styles/perso.css";
import { Button, KeyboardArrowRight } from "@/utils/SharedModule";

const projects = [
  // {
  //   id: 1,
  //   image: "/images/owaba_1.jpg",
  //   alt: "Owaba",
  //   title: "Owaba Music",
  //   description: "Site web de streaming live pour un concert"
  // },
  // {
  //   id: 2,
  //   image: "/images/jadelec_2.jpg",
  //   alt: "Jadelec",
  //   title: "Jadelec",
  //   description: "Site web, entreprise d'electricité"
  // },
  // {
  //   id: 3,
  //   image: "/images/nepal_2.jpg",
  //   alt: "Nepal travel",
  //   title: "Nepal travel",
  //   description: "Site web, de reservation de voyage"
  // },
  // {
  //   id: 4,
  //   image: "/images/ump_2.jpg",
  //   alt: "Ump nettoayge",
  //   title: "UMP nettoayge",
  //   description: "Site web, entretien de vitre"
  // },
  {
    id: 7,
    image: "/images/tikss.png",
    alt: "TikssCG",
    title: "TikssCG",
    description: "Site de vente de billets pour événements au Congo (Janvier 2024)",
    technologies: ["Next.js", "Prisma", "Docker", "PostgreSQL", "TypeScript"],
    link: "https://tiksscg.com"
  },
  {
    id: 8,
    image: "/images/zuajeu.png",
    alt: "ZuajEu",
    title: "ZuajEu",
    description: "Plateforme de réservation de logements courte durée en Afrique centrale (modèle Airbnb) - MVP en ligne avec paiement mobile money",
    technologies: ["Next.js", "PostgreSQL", "Docker", "Stripe"],
    link: "https://zuajeu.com"
  },
  {
    id: 9,
    image: "/images/webia.png",
    alt: "Webia Pro",
    title: "Webia Pro",
    description: "Site vitrine agence digitale - Présentation des services et expertise en développement web",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://webia-pro.fr"
  },
  {
    id: 10,
    image: "/images/fraha.png",
    alt: "Fraha Event",
    title: "Fraha Event",
    description: "Site vitrine agence événementielle, organisation d'événements professionnels",
    technologies: ["React.js"],
    link: "https://frahaevent.fr"
  },
  {
    id: 11,
    image: "/images/sene.png",
    alt: "Sen Vallee",
    title: "Sen Vallee",
    description: "Plateforme de petites annonces en Afrique de l'Ouest",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Vercel"],
    link: "https://senevallee.matioss.fr",
    inProgress: true
  },
  {
    id: 12,
    image: "/images/nuage.png",
    alt: "Nuage Bleu",
    title: "Nuage Bleu",
    description: "Dashboard de gestion restaurant en Belgique + App Android POS tablette",
    technologies: ["Next.js", "Node.js", "Express", "TypeScript", "WebSocket", "PostgreSQL", "Docker", "React Native", "Expo Go", "Tailwind CSS"],
    link: "https://github.com/pulsybkr"
  },
  {
    id: 13,
    image: "/images/yeyo.png",
    alt: "Yeyo.cd",
    title: "Yeyo.cd",
    description: "Application mobile Android/iOS de demande de services en RDC (style Yoogo)",
    technologies: ["React Native", "WebSocket", "Node.js", "Express.js"],
    inProgress: true
  }
];

export default function FeatureWord() {
  return (
    <section id="projet" className="flex flex-col bg-gray-100 justify-center p-8 md:p-32 pt-48 h-auto text-black ">
      <h2 className="text-black text-2xl md:text-4xl font-semibold">
        Mes projets
      </h2>
      <p className="text-black text-lg font-extralight font-mono mt-4">
        Ça fait longtemps que je n'ai plus le temps de mettre à jour mon portfolio. Voici la liste des projets sur lesquels j'ai travaillé et d'autres sur lesquels je travaille encore.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mt-16">
        {projects.map((project) => (
          <div key={project.id} className="max-w-[500px] cursor-pointer max-h-[700px] relative">
            {project.inProgress && (
              <div className="absolute top-4 left-4 z-20 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                En cours
              </div>
            )}
            <div className="custom-image w-full h-full relative z-0">
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute md:rounded-lg w-full bg-white md:bg-white/80 p-4 md:w-auto bottom-0 md:bottom-10 text-right right-0 md:right-[-40px] z-10 text-black backdrop-blur-sm">
              <h3 className="text-2xl md:text-4xl font-semibold">{project.title}</h3>
              <p className="text-base md:text-lg font-extralight font-mono">{project.description}</p>
              {project.link && (
                <div className="mt-3">
                  <Button
                    size="sm"
                    variant="outlined"
                    color="primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.link, "_blank");
                    }}
                    className="text-xs px-3 py-1"
                  >
                    Voir le site
                  </Button>
                </div>
              )}
              {project.technologies && project.technologies.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1 justify-end">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
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
