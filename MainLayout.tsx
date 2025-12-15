import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import kbkLogo from "../assets/Logo.svg"
import Logo from "../assets/Logo2.svg"

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen  bg-[#202326] text-white flex">
      <aside className="w-[250px] m-2 rounded-xl bg-[#3b4a56] flex flex-col justify-between">
        <div>
         
          <div className="h-[100px] flex items-center  border-white/10">
            <div className="flex flex-col leading-tight mt-5">
                <img src={kbkLogo} alt="" />
            </div>
          </div>
          <nav className="mt-12 font-medium px-4 space-y-1 text-[13px]">
            <SidebarLink to="/">Поиск <img src="../assets/lupa.svg" alt=""/></SidebarLink>
            <SidebarLink  to="/authors">Авторы</SidebarLink>
            <SidebarLink to="/archive">Архив</SidebarLink>
            <SidebarLink to="/support">Поддержка</SidebarLink>
            <SidebarLink to="/about">О проекте</SidebarLink>
          </nav>
        </div>

       
        <div className="h-16  border-white/10 flex items-center px-6 text-[13px]">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-xl">Г</span>
            </div>
            <span>Гость</span>
          </div>
        </div>
      </aside>

     
      <main className="flex-1 flex flex-col">
     
        <header className="h-10 flex items-center px-10 text-xs text-white/60">
          Главная страница
        </header>

        <div className="flex-1 px-10 pb-190 flex items-center justify-center">
          {children}
        </div>
        
        <div className="pt-14 h-[660px] flex flex-col max-w-[450px]  items-center rounded-3xl bg-[#3b4a56]">
          <img  src={Logo} alt=""/>
          <form className="justify-between flex-col flex p-10  h-[500px] max-w-[450px]" action="">
            <div className="flex justify-between flex-col">
                <strong className="text-xs">Логин</strong>
                <input className="mt-1 w-auto h-9 rounded-lg" type="text" />
            </div>
            <div className="flex justify-between flex-col">
                <strong className="text-xs">Пароль</strong>
                <input className="mt-1 w-auto h-9 rounded-lg" type="text" />
            </div>
            <div className="flex font-semibold items-center">
              <input className="size-4 mr-5 rounded-xs" type="checkbox"></input>
              
              <p>Запомнить логин</p>
            </div>

            <button className="bg-white h-12 text-xl rounded-xl font-bold text-[#3b4a56]">Вход</button>
            <p className="opacity-50 mt-5 text-center text-md">Студент должен получить свой  логин и пароль у своего куратора  или заведуещего кафедры.</p>
            <a className="text-center text-md font-semibold" href="">Забыли логин или пароль ?</a>
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
