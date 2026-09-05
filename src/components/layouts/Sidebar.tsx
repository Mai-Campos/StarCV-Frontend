import { Compass, FolderGit2, House, Plus, UserRound, X } from "lucide-react";
import { NavLink } from "react-router-dom";

import type { SideBarProps } from "../../types/props";
import logo from "../../assets/star-cv-logo.webp";

function Sidebar({ isSideBarOpen, setIsSideBarOpen }: SideBarProps) {
  const closeSidebar = () => {
    setIsSideBarOpen(false);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `
      flex items-center gap-3 rounded-lg px-3 py-2.5
      text-sm transition-all duration-200
      ${
        isActive
          ? "bg-(--color-accent-soft) font-semibold text-(--color-primary)"
          : "text-(--color-text-muted) hover:bg-(--color-accent-soft) hover:text-(--color-primary)"
      }
    `;

  return (
    <>
      {/* Overlay mobile */}
      <div
        onClick={closeSidebar}
        className={`
          fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]
          transition-opacity duration-300 md:hidden
          ${
            isSideBarOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50
          flex w-64 flex-col
          bg-(--color-surface)
          border-r border-(--color-border)
          shadow-[2px_0_8px_rgba(62,37,34,0.035)]
          transition-transform duration-300 ease-in-out
          ${
            isSideBarOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >
        {/* Brand */}
        <div className="flex h-20 items-center justify-between border-b border-(--color-border) px-5">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="StarCV"
              className="h-12 w-12 rounded-md object-contain"
            />

            <div>
              <h2 className="font-serif text-2xl font-bold italic text-(--color-primary)">
                STARCV
              </h2>
            </div>
          </div>

          {/* Close button mobile */}
          <button
            type="button"
            onClick={closeSidebar}
            className="
              rounded-lg p-2
              text-(--color-text-muted)
              transition
              hover:bg-(--color-accent-soft)
              hover:text-(--color-primary)
              md:hidden
            "
            aria-label="Cerrar menú"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col gap-1 p-4">
          <NavLink
            to="/dashboard"
            onClick={closeSidebar}
            className={navLinkClass}
          >
            <House size={19} />
            <span>Inicio</span>
          </NavLink>

          <NavLink
            to="/explore"
            onClick={closeSidebar}
            className={navLinkClass}
          >
            <Compass size={19} />
            <span>Explorar</span>
          </NavLink>

          <NavLink
            to="/projects"
            onClick={closeSidebar}
            className={navLinkClass}
          >
            <FolderGit2 size={19} />
            <span>Proyectos</span>
          </NavLink>

          <NavLink
            to="/profile"
            onClick={closeSidebar}
            className={navLinkClass}
          >
            <UserRound size={19} />
            <span>Perfil</span>
          </NavLink>
        </nav>

        {/* New project */}
        <div className="border-t border-(--color-border) p-4">
          <button
            type="button"
            className="
              flex w-full items-center justify-center gap-2
              rounded-lg
              bg-(--color-primary)
              px-4 py-2.5
              text-sm font-semibold text-white
              transition
              hover:opacity-90
            "
          >
            <Plus size={18} />
            Nuevo proyecto
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
