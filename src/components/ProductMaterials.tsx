"use client";

import { productMaterialsData } from "@/data/productMaterialsData";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/ProductMaterials.module.scss";

export default function ProductMaterials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showButtons, setShowButtons] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  // 스크롤 가능 여부 체크
  useEffect(() => {
    const checkScroll = () => {
      if (!scrollContainerRef.current) return;
      const { scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowButtons(scrollWidth > clientWidth);
    };

    // 초기 체크 및 DOM 렌더링 후 재체크
    checkScroll();
    const timer = setTimeout(checkScroll, 100);

    window.addEventListener("resize", checkScroll);
    return () => {
      window.removeEventListener("resize", checkScroll);
      clearTimeout(timer);
    };
  }, []);

  // 버튼으로 이전 아이템
  const handlePrev = () => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  // 버튼으로 다음 아이템
  const handleNext = () => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };
  return (
    <section className={styles.productMaterials}>
      <div className={styles.container}>
        <div ref={titleRef} className={styles.titleContainer}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            제품 소재
          </motion.h2>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            저희가 취급하고 있는 <span className={styles.highlight}>소재 및 소재별 특징</span>을
            알아보세요.
          </motion.span>
        </div>

        <div className={styles.sliderContainer}>
          {showButtons && (
            <button
              type="button"
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={handlePrev}
              aria-label="이전 소재"
            >
              ‹
            </button>
          )}

          <div ref={scrollContainerRef} className={styles.materialContainer}>
            {productMaterialsData.map((material) => (
              <div key={material.id} className={styles.materialsItem}>
                {/* 소재 아이템 타이틀 */}
                <div className={styles.materialsItemTitle}>
                  <h2>
                    {material.title} <span>({material.englishTitle})</span>
                  </h2>
                  <p>{material.koreanTitle}</p>
                </div>

                {/* 소재 아이템 이미지 */}
                <div className={styles.materialsItemImageContainer}>
                  <Image
                    src={material.image}
                    alt={material.alt}
                    width={100}
                    height={100}
                    className={styles.materialsItemImage}
                    priority
                  />
                </div>

                {/* 소재 아이템 내용 */}
                <div className={styles.materialsItemContent}>
                  {material.content.map((contentItem) => (
                    <div key={`${material.id}-${contentItem.title}`}>
                      <h3>{contentItem.title}</h3>
                      <ul>
                        {contentItem.items.map((item) => (
                          <li key={`${material.id}-${contentItem.title}-${item}`}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {showButtons && (
            <button
              type="button"
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={handleNext}
              aria-label="다음 소재"
            >
              ›
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
