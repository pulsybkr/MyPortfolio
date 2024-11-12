import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CircularProgress from '@mui/joy/CircularProgress';
import Button from "@mui/joy/Button";

const FreeMaquettePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (id) {
      // Fetch maquette details based on id
      // Example:
      // const maquette = await fetchMaquetteDetails(id);
      const html = `
      <h1>Maquette ${id}</h1>
      <p>Bonjour,</p>
      <p>Nous avons reçu votre demande de maquette de ${id}. </p>
      <p>Cordialement,</p>
      <p>L'équipe Matioss</p>
    `;
      const subject = `Demande de maquette ${id}`;
      const formData = {
        html: html,
        subject: subject,
      };
      const sendEmail = async () => {
        const response = await fetch("/api/hello", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log(data);
        setIsLoading(false);
      };
      sendEmail();
    }
  }, [id]);

  return (
    <>
      {/* <Header /> */}
      {isLoading ? 
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div> : 
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">Merci pour votre demande !</h1>
        <p>Nous avons bien reçu votre demande de maquette</p>
        <p>Nous allons la traiter dans les plus brefs délais.</p>
        <p>Cordialement,</p>
        <p>L'équipe Matioss</p>

        <div className="mt-4">
          <Button variant="outlined" color="neutral" onClick={() => router.push("/")}>Retour à l'accueil</Button>
        </div>
      </div>}
      {/* <Footer /> */}
    </>
  );
};

export default FreeMaquettePage;
