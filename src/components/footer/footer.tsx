'use client'
// import Footer from "@/components/Footer2";
import { useEffect } from "react";
import Lenis from 'lenis';
import Intro from "./intro";
import Footer1 from "./footer1";

export default function Footer() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <Intro />
      <Footer1 />
    </main>
  );
}