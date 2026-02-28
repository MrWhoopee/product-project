"use client";

import Link from "next/link";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Link href="/" className={css.logo}>
          <div className={css.logoIcon}>U</div>
          Udata Shop
        </Link>
        <Link href="/products">Products</Link>
      </nav>
    </header>
  );
}
