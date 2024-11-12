import Image from "next/image";
import localFont from "next/font/local";
import Header from "@/components/header";
import React, { useEffect, useState } from "react";
import FeatureWord from "@/components/featureword";
import About from "@/components/about";
import Paragraph from "@/components/Character";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preload/Preloader";
import BlurryCursor from "@/components/cursor";
import Service3d from "@/components/service";
import ForWhy from "@/components/forWhy";
import Footer from "@/components/footer/footer";
import Contact from "@/components/contact";
import StickyCursor from "@/components/stickyCursor";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);

        document.body.style.cursor = "default";

        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      {!isLoading && (
        <>
          <Header />
          <FeatureWord />
          {/* <About /> */}
          <Service3d />
          {/* <ForWhy/> */}
          <Footer/>
          <Contact/>
        </>
      )}
    </>
  );
}
