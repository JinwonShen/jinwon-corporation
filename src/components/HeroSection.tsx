"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles/HeroSection.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* 왼쪽 카드 */}
        <div className={styles.imageContainer}>
          <Image
            src="/hero-Image(1).jpeg"
            alt="진원상사 - 비닐 가공 23년"
            width={600}
            height={600}
            className={styles.heroImage}
            priority
          />
          <div className={styles.overlay}>
            <div className={styles.textContent}>
              <motion.span
                className={styles.subTitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                비닐 가공 23년,
              </motion.span>
              <motion.h1
                className={styles.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                정직과 신뢰로 만들어낸 품질
              </motion.h1>
              <motion.button
                className={styles.ctaButton}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                문의하기
              </motion.button>
            </div>
          </div>
        </div>

        {/* 오른쪽 카드 */}
        <div className={styles.imageContainer}>
          <Image
            src="/hero-Image(2).jpeg"
            alt="진원상사 - 맞춤 제작부터 대량 생산까지"
            width={600}
            height={600}
            className={styles.heroImage}
            priority
          />
          <div className={styles.overlay}>
            <div className={styles.textContent}>
              <motion.span
                className={styles.subTitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                맞춤 제작부터 대량 생산까지,
              </motion.span>
              <motion.h1
                className={styles.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                믿고 맡길 수 있는 파트너
              </motion.h1>
              <motion.button
                className={styles.ctaButton}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                문의하기
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
