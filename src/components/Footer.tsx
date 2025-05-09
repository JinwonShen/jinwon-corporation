import Link from "next/link";
import styles from "../styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <h2>
          <Link href={"/"}>진원상사</Link>
        </h2>

        <div className={styles.footerContents}>
          <nav aria-label="푸터 링크">
            <ul>
              <li>
                <Link href={"/about"}>회사소개</Link>
              </li>
              <li>
                <Link href={"/products"}>제품소개</Link>
              </li>
              <li>
                <Link href={"/contact"}>견적문의</Link>
              </li>
              <li>
                <Link href={"/smartStore"}>스토어 바로가기</Link>
              </li>
            </ul>
          </nav>

          <address className={styles.addressContainer}>
            <span>대표자: 신준기</span>

            <div className={styles.address}>
              <span>사업자 등록번호: 134-16-17969</span>
              <span>주소: 안산시 단원구 선부2동 1032-3, 1층 진원상사</span>
            </div>
            <div className={styles.contactInfo}>
              <span>Tel: 031-401-4135</span>
              <span>Fax: 031-401-4130</span>
              <span>
                Email: <a href="mailto:clsrndlf00@naver.com">clsrndlf00@naver.com</a>
              </span>
            </div>
          </address>

          <p className={styles.copyright}>© 2025 JINWON CORPORATION. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
