"use client";

import Link from "next/link";
import css from "./Header.module.css";
import { useState, useEffect } from "react";
import NavList from "../NavList/NavList";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useRef } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleClose = () => setIsOpen(false);
  return (
    <header className={css.header} ref={headerRef}>
      <nav className={css.nav}>
        <Link href="/" className={css.logo} onClick={handleClose}>
          <div className={css.logoIcon}>U</div>
          Udata Shop
        </Link>

        <div className={css.desktopNav}>
          <NavList />
        </div>

        <div className={css.actions}>
          <BurgerMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>
      </nav>

      <div className={`${css.mobileNav} ${isOpen ? css.mobileNavOpen : ""}`}>
        <NavList onLinkClick={handleClose} />
      </div>
    </header>
  );
}
