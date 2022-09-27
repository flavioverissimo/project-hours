import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav>
      <div className="container mx-auto flex flex-wrap items-center justify-between mx-auto lg:uppercase">
        <div>
          <a>
            <img src="logo.png" />
          </a>
        </div>
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center justify-center textcenter lg:h-20 text-mainColor lg:hover:text-mainColorLight lg:hover:bg-mainColor transition-colors duration-300 transform cursor-pointer ...">
              <a className="font-semibold mx-4">Controle</a>
            </div>
          </Link>
          <Link href="/info">
            <div className="flex items-center justify-center textcenter lg:h-20 text-mainColor lg:hover:text-mainColorLight lg:hover:bg-mainColor transition-colors duration-300 transform cursor-pointer ...">
              <a className="font-semibold mx-4">Informações</a>
            </div>
          </Link>
          <Link href="/projeto">
            <div className="flex items-center justify-center textcenter lg:h-20 text-mainColor lg:hover:text-mainColorLight lg:hover:bg-mainColor transition-colors duration-300 transform cursor-pointer ...">
              <a className="font-semibold mx-4">Projetos</a>
            </div>
          </Link>
          <Link href="/suporte">
            <div className="flex items-center justify-center textcenter lg:h-20 text-mainColor lg:hover:text-mainColorLight lg:hover:bg-mainColor transition-colors duration-300 transform cursor-pointer ...">
              <a className="font-semibold mx-4">Suporte</a>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
