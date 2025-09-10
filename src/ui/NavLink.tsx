import type { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  Icon?: LucideIcon;
}

export function NavLink({ title, Icon }: Props) {
  return (
    <div className="flex items-center gap-2">
      {Icon && <Icon size={14} />}
      <a href="#" className="hover:cursor-pointer relative inline-block after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[1px] after:w-0 after:bg-current after:transition-[width] after:duration-300 hover:after:w-8 focus-visible:after:w-full hover:text-gray-300">{title}</a>
    </div>
  )
}