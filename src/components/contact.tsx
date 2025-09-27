import React, { useEffect, useState } from "react";
import GradientCursor from "./cursor";
import Link from "next/link";
import Alert from "@mui/joy/Alert";
import IconButton from "@mui/joy/IconButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CircularProgress from '@mui/joy/CircularProgress';
import LinearProgress from '@mui/joy/LinearProgress';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import Close from '@mui/icons-material/Close';
import AspectRatio from '@mui/joy/AspectRatio';

export default function Contact() {
  const [isCursorActive, setIsCursorActive] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [successAlertVisible, setSuccessAlertVisible] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !emailRegex.test(email)) {
      setIsAlertVisible(true);
      return;
    }
    const html = `
      <h1>Nouveau message de ${name}</h1>
      <p>Email: ${email}</p>
      <p>Téléphone: ${phone}</p>
      <p>Entreprise: ${company}</p>
      <p>Message: ${message}</p>
    `;
    const data = {
      name,
      email,
      phone,
      company,
      message,
      html
    }
    try {
      const response = await fetch("/api/hello", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSuccessAlertVisible(true);
        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setMessage("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section
        id="contact"
        className="bg-neutral-800 h-auto w-full p-4 py-32 md:p-32"
      >
        {/* {isCursorActive && <GradientCursor isActive={false} />} */}
        {/* <h2 className="text-white text-2xl sm:text-4xl font-bold mb-4">
          Parlez-moi de votre projet ou autre.
        </h2> */}
        <p className="text-white text-lg mb-8 relative z-10">
          Remplissez le formulaire ci-dessous ou{" "}
          <a href="mailto:pulsycaleb@gmail.com" className="text-sky-500">
            envoyez-moi un email
          </a>
          .
        </p>
        <form className="flex flex-col gap-4 max-w-[700px]">
          <input
            className="bg-neutral-900 z-10 text-white relative p-4"
            type="text"
            name="company"
            placeholder="Nom de l'entreprise"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            className="bg-neutral-900 z-10 text-white relative p-4"
            type="text"
            name="name"
            required
            placeholder="Votre nom *"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            name="phone"
            className="bg-neutral-900 z-10 text-white relative p-4"
            placeholder="Votre numéro de téléphone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            className="bg-neutral-900 z-10 text-white relative p-4"
            type="email"
            name="email"
            required
            placeholder="Votre email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            className="bg-neutral-900 z-10 text-white relative p-4"
            placeholder="Parlez-moi de votre projet ou autre ..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </form>
        <div className="mt-8 relative z-10">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-white text-neutral-800 px-4 py-2 font-bold hover:bg-sky-500 hover:text-white transition-all duration-500"
          >
            Envoyer <span className="mx-2">+</span>
          </button>
        </div>
        {isAlertVisible && <div className="mt-4 max-w-[400px]">
          <Alert
            color="danger"
            size="sm"
            variant="solid"
            endDecorator={
              <IconButton onClick={() => setIsAlertVisible(false)} variant="plain" size="sm" color="neutral">
                <CloseRoundedIcon />
              </IconButton>
            }
          >
            Veuillez remplir tous les champs obligatoires.
          </Alert>
        </div>}
        {
          successAlertVisible && <div className="mt-4 max-w-[400px]">
            <Alert
        size="lg"
        color="success"
        variant="solid"
        invertedColors
        startDecorator={
          <AspectRatio
            variant="solid"
            ratio="1"
            sx={{
              minWidth: 40,
              borderRadius: '50%',
              boxShadow: '0 2px 12px 0 rgb(0 0 0/0.2)',
            }}
          >
            <div>
              <Check fontSize="large" />
            </div>
          </AspectRatio>
        }
        endDecorator={
          <IconButton
            variant="plain"
            sx={{
              '--IconButton-size': '32px',
              transform: 'translate(0.5rem, -0.5rem)',
            }}
            onClick={() => setSuccessAlertVisible(false)}
          >
            <Close />
          </IconButton>
        }
        sx={{ alignItems: 'flex-start', overflow: 'hidden' }}
      >
        <div>
          <Typography level="title-lg">Success</Typography>
          <Typography level="body-sm">
            Votre message a bien été envoyé. Nous reviendrons vers vous dans les plus brefs délais.
          </Typography>
        </div>
        <LinearProgress
          variant="solid"
          color="success"
          value={40}
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            borderRadius: 0,
          }}
        />
      </Alert>
          </div>
        }
      </section>

      {/* footer ******************** */}
      <section className="bg-neutral-900 h-auto w-full p-8 flex flex-col justify-between gap-4 lg:p-16 lg:flex-row xl:p-32">
        <div className="hidden lg:flex flex-col gap-4">
          <Link href="/">
            <p className="text-white text-xl lowercase font-bold">pulsy.</p>
          </Link>
          <h3 className="text-white text-md font-bold w-full lg:max-w-[300px] leading-loose mt-8">
            Réalisons ensemble de grandes choses.
          </h3>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col justify-between gap-4">
          <div>
            <h4 className="text-white text-md mb-4 font-bold md:mb-8 lg:mb-4">
              Contactez-moi
            </h4>
            <ul>
              <li className="text-sky-500 underline mb-4">
                <a href="mailto:pulsycaleb@gmail.com">pulsycaleb@gmail.com</a>
              </li>
              
            </ul>
          </div>
          <div>
            <h4 className="text-white text-md lg:mt-8 font-bold mt-16 md:mt-0">
              Explorez
            </h4>
            <ul className="flex flex-col flex-wrap md:flex-row md:mt-8 text-sm gap-8 font-semibold font-mono relative cursor-pointer">
              <li
                onClick={() => {
                  const targetElement = document.getElementById("projets");
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="hover:text-sky-500 transition-all duration-500"
              >
                Projets
              </li>
              <li
                onClick={() => {
                  const targetElement = document.getElementById("services");
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="hover:text-sky-500 transition-all duration-500"
              >
                Techno
              </li>
              <li
                onClick={() => {
                  window.open("https://www.linkedin.com/in/pulsybkr/", "_blank");
                }}
                className="hover:text-sky-500 transition-all duration-500"
              >
                LinkedIn
              </li>
              <li
                onClick={() => {
                  const targetElement = document.getElementById("contact");
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="hover:text-sky-500 transition-all duration-500"
              >
                Contact
              </li>
              {/* <li
                onClick={() => {
                  const targetElement =
                    document.getElementById("mentions-legales");
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="hover:text-sky-500 transition-all duration-500"
              >
                Mentions légales
              </li> */}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
