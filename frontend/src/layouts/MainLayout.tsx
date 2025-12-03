import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-[#202326] text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#3b4a56] flex flex-col justify-between">
        <div>
          /* Логотип / заголовок */
          <div className="h-24 flex items-center px-6 border-b border-white/10">
            <div className="flex flex-col leading-tight">
              <span className="text-[11px] uppercase tracking-[0.2em]">
                Студенческая
              </span>
              <span className="text-xl font-semibold">Газета</span>
              <span className="mt-1 text-[10px] text-white/60">
                Калининградский бизнес колледж
              </span>
            </div>
          </div>

          /* Меню */
          <nav className="mt-6 px-4 space-y-1 text-[13px]">
            <SidebarLink to="/">Поиск</SidebarLink>
            <SidebarLink to="/authors">Авторы</SidebarLink>
            <SidebarLink to="/archive">Архив</SidebarLink>
            <SidebarLink to="/support">Поддержка</SidebarLink>
            <SidebarLink to="/about">О проекте</SidebarLink>
          </nav>
        </div>

        /* Низ: гость/пользователь */
        <div className="h-16 border-t border-white/10 flex items-center px-6 text-[13px]">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-xs">Г</span>
            </div>
            <span>Гость</span>
          </div>
        </div>
      </aside>

      /* Основная часть */
      <main className="flex-1 flex flex-col">
        /* Тонкая верхняя полоса с заголовком страницы */
        <header className="h-10 flex items-center px-10 text-xs text-white/60">
          Главная страница
        </header>

        <div className="flex-1 px-10 pb-10 flex items-center justify-center">
          {children}
        </div>
      </main>
    </div>
  );
}

interface SidebarLinkProps {
  to: string;
  children: React.ReactNode;
}

function SidebarLink({ to, children }: SidebarLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "block px-3 py-2 rounded-md",
          "transition-colors duration-150",
          isActive ? "bg-white/12" : "hover:bg-white/6",
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
}
