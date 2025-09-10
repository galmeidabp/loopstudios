import { GridCard } from "../../ui/GridCard";

export function Creations() {
  return (
    <div className="max-w-[272px] m-auto mt-24 lg:max-w-5xl lg:mt-40">
      <h2 className="text-3xl uppercase font-serafin font-light text-center mb-5 lg:text-start lg:text-6xl">our creations</h2>

      <div className="grid gap-4 lg:grid lg:grid-cols-4 lg:gap-6 lg:mt-20 lg:mb-20">
        <GridCard image="./image-deep-earth.jpg" title={"deep\nearth"} imgPosition="center right" />
        <GridCard image="./image-night-arcade.jpg" title={"night\narcade"} />
        <GridCard image="./image-soccer-team.jpg" title={"soccer\nteam vr"} imgPosition="top" />
        <GridCard image="./image-grid.jpg" title={"the\ngrid"} />
        <GridCard image="./image-from-above.jpg" title={"from up\nabove vr"} imgPosition="left" />
        <GridCard image="./image-pocket-borealis.jpg" title={"pocket\nborealis"} />
        <GridCard image="./image-curiosity.jpg" title={"the\ncuriosity"} imgPosition="top" />
        <GridCard image="./image-fisheye.jpg" title={"make it\nfisheye"} />
      </div>

      <button className="uppercase border-2 border-black w-36 font-alata py-2 m-auto mt-5 cursor-pointer lg:text-3xl lg:py-4 lg:w-56">see all</button>
    </div>
  )
}