import { BriefcaseBusiness, Calendar, Home, Info, Menu, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { NavLink } from "./NavLink";

export function DropdownMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)} className="text-white relative block lg:hidden">
        <Menu />
      </button>


      <nav className={`px-5 py-10 bg-black rounded-xl absolute right-8 w-48 border-2 border-gray-900 flex flex-col gap-6 text-white font-alata text-sm transition-all duration-200 ease-out ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>
        <NavLink title="About" Icon={Home} />
        <NavLink title="Careers" Icon={BriefcaseBusiness} />
        <NavLink title="Events" Icon={Calendar} />
        <NavLink title="Products" Icon={ShoppingCart} />
        <NavLink title="Support" Icon={Info} />
      </nav>

    </div >
  )
}