import { useState } from "react";
import { GridCard } from "../../ui/GridCard";
import { AnimatePresence, motion } from "framer-motion";

export default function Creations() {
  const [openImg, setOpenImg] = useState<string | null>(null);

  const images = [
    { image: "assets/image-deep-earth.webp", title: "deep\nearth", imgPosition: "center right" },
    { image: "assets/image-night-arcade.webp", title: "night\narcade" },
    { image: "assets/image-soccer-team.webp", title: "soccer\nteam vr", imgPosition: "top" },
    { image: "assets/image-grid.webp", title: "the\ngrid" },
    { image: "assets/image-from-above.webp", title: "from up\nabove vr", imgPosition: "left" },
    { image: "assets/image-pocket-borealis.webp", title: "pocket\nborealis" },
    { image: "assets/image-curiosity.webp", title: "the\ncuriosity", imgPosition: "top" },
    { image: "assets/image-fisheye.webp", title: "make it\nfisheye" },
  ]

  return (
    <div className="max-w-[272px] m-auto mt-24 lg:max-w-5xl lg:mt-40">
      <h2 className="text-3xl uppercase font-serafin font-light text-center mb-5 lg:text-start lg:text-6xl">our creations</h2>

      <div
        className="grid gap-4 lg:grid lg:grid-cols-4 lg:gap-6 lg:mt-20 lg:mb-20">
        {images.map((img) => (
          <GridCard key={img.title} image={img.image} title={img.title} imgPosition={img.imgPosition} onClick={() => setOpenImg(img.image)} />
        ))}
      </div>

      <AnimatePresence>
        {openImg && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenImg(null)}
          >

            <motion.img
              src={openImg}
              alt="Creation Image"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg relative lg:min-w-[20%]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button className="absolute top-20 right-10 text-white text-2xl font-bold z-50 hover:text-gray-300">X</button>
          </motion.div>
        )}
      </AnimatePresence>

      <button className="uppercase border-2 border-black w-36 font-alata py-2 m-auto mt-5 cursor-pointer hover:bg-black hover:text-white lg:text-3xl lg:py-4 lg:w-56">see all</button>
    </div>
  )
}