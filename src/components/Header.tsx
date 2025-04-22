import Link from "next/link";
import styles from "../styles/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <Link href={"/"}>진원상사</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link href={"/about"}>회사소개</Link>
          </li>
          <li>
            <Link href={"/about"}>제품소개</Link>
          </li>
          <li>
            <Link href={"/about"}>문의하기</Link>
          </li>

          <li>
            <Link href={"/"}>스토어 바로가기</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
