import { NavLink } from "../../ui/NavLink";
import { DropdownMenu } from "../../ui/DropdownMenu";

export function Header() {
  return (
    <header className="max-w-[272px] m-auto flex justify-between items-center p-6 bg-transparent lg:px-0">
      <img src="./logo.svg" alt="LoopStudios" width={130} height={100} className="lg:w-56" />

      <DropdownMenu />

      <nav className="hidden lg:flex gap-8 text-white font-alata text-sm">
        <NavLink title="About" />
        <NavLink title="Careers" />
        <NavLink title="Events" />
        <NavLink title="Products" />
        <NavLink title="Support" />
      </nav>
    </header>
  )
}