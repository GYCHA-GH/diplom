import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import kbkLogo from "../assets/лого.svg"
import Logo from "../assets/лого2.svg"

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#202326] text-white flex overflow-hidden">
      <aside className="w-[250px] m-2 rounded-xl bg-[#3b4a56] flex flex-col justify-between">
        <div>
          <div className="h-[100px] flex items-center border-white/10">
            <div className="flex flex-col leading-tight mt-5">
              <img src={kbkLogo} alt="" />
            </div>
          </div>
          <nav className="mt-12 font-medium px-4 space-y-1 text-[13px]">
            <SidebarLink to="/">Поиск <img src="../assets/lupa.svg" alt=""/></SidebarLink>
            <SidebarLink to="/authors">Авторы</SidebarLink>
            <SidebarLink to="/archive">Архив</SidebarLink>
            <SidebarLink to="/support">Поддержка</SidebarLink>
            <SidebarLink to="/about">О проекте</SidebarLink>
          </nav>
        </div>

        <div className="h-16 border-white/10 flex items-center px-6 text-[13px] cursor-pointer hover:bg-white/5 transition-colors"
          onClick={() => setIsLoginOpen(true)}>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-xl">Г</span>
            </div>
            <span>Гость</span>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col relative">
        <header className="h-10 flex items-center px-10 text-xs text-white/60">
          Главная страница
        </header>

        <div className="flex-1 px-10 pb-190 flex items-center justify-center">
          {children}
        </div>

        {/* Overlay */}
        {isLoginOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
            onClick={() => setIsLoginOpen(false)}
          />
        )}

        {/* Форма входа - выезжает из правой части экрана */}
        <div
          className={`fixed right-0 top-0 h-screen w-[450px] bg-[#3b4a56] rounded-l-3xl flex flex-col items-center pt-14 z-50 shadow-2xl transition-transform duration-500 ease-out ${
            isLoginOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={() => setIsLoginOpen(false)}
            className="absolute top-4 left-4 text-white/60 hover:text-white transition-colors"
          >
            ✕
          </button>

          <img src={Logo} alt="" className="mb-6" />
          
          <form className="flex flex-col justify-between p-10 h-[500px] w-full max-w-[400px]">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <strong className="text-xs">Логин</strong>
                <input
                  className="mt-1 h-9 rounded-lg px-3 text-black"
                  type="text"
                  placeholder="Введите логин"
                />
              </div>

              <div className="flex flex-col">
                <strong className="text-xs">Пароль</strong>
                <input
                  className="mt-1 h-9 rounded-lg px-3 text-black"
                  type="password"
                  placeholder="Введите пароль"
                />
              </div>

              <div className="flex items-center font-semibold">
                <input className="size-4 mr-5 rounded-xs" type="checkbox" />
                <p className="text-sm">Запомнить логин</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button
                type="button"
                className="bg-white h-12 text-lg rounded-xl font-bold text-[#3b4a56] hover:bg-white/90 transition-colors"
              >
                Вход
              </button>

              <p className="opacity-50 text-center text-sm">
                Студент должен получить свой логин и пароль у своего куратора или заведующего кафедры.
              </p>

              <a
                href="#"
                className="text-center text-sm font-semibold hover:underline"
              >
                Забыли логин или пароль?
              </a>
            </div>
          </form>
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
