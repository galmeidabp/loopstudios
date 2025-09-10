import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Creations } from "./components/sections/Creations";
import { Hero } from "./components/sections/Hero";
import { Interactive } from "./components/sections/Interactive";
import { motion } from "framer-motion";


export function App() {

  return (
    <div>
      <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[url('./image-hero.jpg')] bg-cover bg-center w-screen min-h-[600px] flex flex-col lg:min-h-[950px]">
        <div className="lg:max-w-5xl lg:mx-auto w-full">
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
