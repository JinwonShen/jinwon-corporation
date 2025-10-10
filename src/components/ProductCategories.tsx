"use client";

import { productCategoriesData } from "@/data/productCategoriesData";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/ProductCategories.module.scss";

export default function ProductCategories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showButtons, setShowButtons] = useState(false);

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
    <section className={styles.productCategories}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2>제품 종류</h2>
          <span>
            저희가 제작하고 있는 <span className={styles.highlight}>다양한 제품 종류</span>를
            알아보세요.
          </span>
        </div>

        <div className={styles.sliderContainer}>
          {showButtons && (
            <button
              type="button"
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={handlePrev}
              aria-label="이전 제품"
            >
              ‹
            </button>
          )}

          <div ref={scrollContainerRef} className={styles.categoryContainer}>
            {productCategoriesData.map((category) => (
              <div key={category.id} className={styles.categoryItem}>
                {/* 제품 아이템 타이틀 */}
                <div className={styles.categoryItemTitle}>
                  <h2>{category.title}</h2>
                </div>

                {/* 제품 아이템 이미지 */}
                <div className={styles.categoryItemImageContainer}>
                  <Image
                    src={category.image}
                    alt={category.alt}
                    width={100}
                    height={100}
                    className={styles.categoryItemImage}
                    priority
                  />
                </div>

                {/* 제품 아이템 내용 */}
                <div className={styles.categoryItemContent}>
                  {category.content.map((contentItem) => (
                    <div key={`${category.id}-${contentItem.title}`}>
                      <h3>{contentItem.title}</h3>
                      <ul>
                        {contentItem.items.map((item) => (
                          <li key={`${category.id}-${contentItem.title}-${item}`}>{item}</li>
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
              aria-label="다음 제품"
            >
              ›
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
