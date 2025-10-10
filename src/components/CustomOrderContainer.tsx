"use client";

import { imagePaths } from "@/data/customOrderData";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

import styles from "../styles/CustomOrderContainer.module.scss";

export default function CustomOrderContainer() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  // 버튼으로 이전 아이템
  const handlePrev = () => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  // 버튼으로 다음 아이템
  const handleNext = () => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <article className={styles.customOrderContainer}>
      <div ref={titleRef} className={styles.textContainer}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          맞춤<span>/</span>주문제작 전문
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          *최소 주문 수량은 <span>10,000장</span> 입니다. 다양한 제작 사례를 확인해보세요.
        </motion.div>
      </div>

      <div className={styles.sliderContainer}>
        <button
          type="button"
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={handlePrev}
          aria-label="이전 이미지"
        >
          ‹
        </button>

        <div ref={scrollContainerRef} className={styles.imgContainer}>
          {imagePaths.map((path, index) => (
            <div
              key={path}
              className={styles.imgBox}
              onClick={() => setSelectedImage(path)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedImage(path);
                }
              }}
            >
              <Image
                src={path}
                alt={`맞춤 제작 이미지 ${index + 1}`}
                width={300}
                height={200}
                className={styles.img}
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={handleNext}
          aria-label="다음 이미지"
        >
          ›
        </button>
      </div>

      <dialog
        className={`${styles.modal} ${selectedImage ? styles.active : ""}`}
        onClick={() => setSelectedImage(null)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setSelectedImage(null);
          }
        }}
        tabIndex={-1}
      >
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setSelectedImage(null);
            }
          }}
        >
          {selectedImage && <Image src={selectedImage} alt="큰 이미지" width={300} height={200} />}
          <button
            type="button"
            className={styles.closeButton}
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      </dialog>
    </article>
  );
}
