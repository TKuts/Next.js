import Link from "next/link";
import Image from "next/image";

import NavLink from "./nav-link";
import MainHeaderBackground from "./main-header-background";

import style from "./main-header.module.css";
import logoImage from "@/assets/logo.png";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={style.header}>
        <Link href="/" className={style.logo}>
          <Image src={logoImage} alt="Logo" priority />
          NextLevel Food
        </Link>

        <nav className={style.nav}>
          <ul>
            <li>
              <NavLink href="/meals" children="Browse Meals" />
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
