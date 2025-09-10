import { Facebook, Instagram, Twitter } from "lucide-react";
import { NavLink } from "../../ui/NavLink";

export function Footer() {
  return (
    <footer className="bg-black text-white w-full mt-20">

      <div className="max-w-[272px] m-auto py-10 flex flex-col items-center lg:max-w-5xl lg:flex-row lg:justify-between lg:items-start">

        <div className="">
          <img src="./logo.svg" alt="LoopStudios" />
          <nav className="flex flex-col items-center gap-5 mt-5 lg:flex-row">
            <NavLink title="About" />
            <NavLink title="Careers" />
            <NavLink title="Events" />
            <NavLink title="Products" />
            <NavLink title="Support" />
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-center lg:mt-0 lg:items-end">
          <div className="flex gap-5">
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
          <span className="text-gray-400 text-sm mt-5">© 2021 Loopstudios. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}