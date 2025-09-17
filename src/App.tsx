import React from "react";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";
import { Interactive } from "./components/sections/Interactive";
import { motion } from "framer-motion";
const Creations = React.lazy(() => import("./components/sections/Creations"));


export function App() {

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full min-h-[600px] lg:min-h-[950px] flex flex-col"
      >
        <img
          src="/assets/image-hero.webp"
          alt="Pessoa usando óculos de realidade virtual"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          width={1920}
          height={950}
        />
        <div className="relative z-10 lg:max-w-5xl lg:mx-auto w-full">
          <Header />
          <Hero />
        </div>
      </motion.div>
      <Interactive />
      <Creations />
      <Footer />
    </div>
  )
}
