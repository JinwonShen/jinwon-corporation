"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <h1>
        <Link href={"/"}>진원상사</Link>
      </h1>

      <nav className={styles.pcMenu}>
        <ul>
          <li>
            <Link href={"/about"}>회사소개</Link>
          </li>
          <li>
            <Link href={"/products"}>제품소개</Link>
          </li>
          <li>
            <Link href={"/contact"}>문의하기</Link>
          </li>
          <li>
            <Link href={"/store"}>스토어 바로가기</Link>
          </li>
        </ul>
      </nav>

      {/* 햄버거 버튼 (모바일용) */}
      <button
        type="button"
        className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span>{""}</span>
        <span>{""}</span>
        <span>{""}</span>
      </button>

      {/* 모바일 메뉴 (열렸을 때만) */}
      {menuOpen && (
        <div className={styles.mobileMenuContainer}>
          <button type="button" className={styles.dim} onClick={() => setMenuOpen(false)} />
          <div className={styles.mobileMenu}>
            <ul>
              <li>
                <Link href={"/about"} onClick={() => setMenuOpen(false)}>
                  회사소개
                </Link>
              </li>
              <li>
                <Link href={"/products"} onClick={() => setMenuOpen(false)}>
                  제품소개
                </Link>
              </li>
              <li>
                <Link href={"/contact"} onClick={() => setMenuOpen(false)}>
                  문의하기
                </Link>
              </li>
              <li>
                <Link href={"/store"} onClick={() => setMenuOpen(false)}>
                  스토어 바로가기
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
