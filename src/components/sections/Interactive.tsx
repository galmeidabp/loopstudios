export function Interactive() {
  return (
    <div className="m-auto mt-24 flex justify-center items-center flex-col gap-10 lg:relative lg:mt-40 lg:items-start lg:max-w-5xl">

      <img src="./image-interactive.jpg" alt="Homem com óculos de realidade virtual" className="w-full max-w-[272px] lg:max-w-none lg:w-[800px]" />

      <div className="max-w-[272px] lg:bg-white lg:max-w-none lg:absolute lg:-bottom-1 lg:left-[600px] lg:flex lg:flex-col lg:gap-10 lg:pl-14 lg:pt-14 lg:pb-5">
        <h2 className="text-3xl mb-5 uppercase font-serafin font-light text-center lg:text-5xl lg:text-start">the leader in interactive vr</h2>
        <p className="text-gray-400 font-semibold text-sm text-center lg:text-lg lg:text-start lg:max-w-[500px]">Founded in 2011, LoopStudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have tranformed businesses through digital experiences that bind to their brand.</p>
      </div>
    </div>
  )
}
