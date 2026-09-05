import { Bell, Menu, Search } from "lucide-react";
import type { HeaderProps } from "../../types/props";
import logo from "../../assets/star-cv-logo.webp";

function Header({ setIsSideBarOpen }: HeaderProps) {
  return (
    <header
      className="  sticky top-0 z-30
    flex h-20 items-center justify-between
    bg-(--color-surface)
    px-4 sm:px-6
    border-b border-(--color-border)
    shadow-[0_2px_8px_rgba(62,37,34,0.04)]
  "
    >
      {/* Left side */}
      <div className="flex items-center gap-3 ">
        {/* Menu - mobile */}
        <button
          type="button"
          onClick={() => setIsSideBarOpen(true)}
          className="rounded-lg p-2 text-(--color-text-muted) transition hover:bg-(--color-accent-soft) hover:text-(--color-primary) md:hidden"
          aria-label="Abrir menú"
        >
          <Menu size={22} />
        </button>

        {/* Brand */}
        <div className="flex items-center gap-2 md:hidden">
          <img
            src={logo}
            alt="StarCV"
            className="h-9 w-9 rounded-md object-contain"
          />

          <span className="font-serif text-2xl font-bold italic text-(--color-primary)">
            STARCV
          </span>
        </div>

        {/* Search - desktop */}
        <div className="ml-6 hidden w-80 items-center gap-3 rounded-lg border border-(--color-border) bg-(--color-surface) px-3 py-2 lg:flex">
          <Search size={18} className="text-(--color-text-muted)" />

          <input
            type="text"
            placeholder="Buscar desarrolladores, proyectos..."
            className="w-full bg-transparent text-sm text-(--color-text) outline-none placeholder:text-(--color-text-muted)"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="relative rounded-lg p-2 text-(--color-text-muted) transition hover:bg-(--color-accent-soft) hover:text-(--color-primary)"
          aria-label="Notificaciones"
        >
          <Bell size={20} />

          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-(--color-error)" />
        </button>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-(--color-primary) text-sm font-semibold text-white"
          aria-label="Perfil"
        >
          M
        </button>
      </div>
    </header>
  );
}

export default Header;
