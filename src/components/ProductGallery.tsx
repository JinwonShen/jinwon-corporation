"use client";

import { productSlideData } from "@/data/productSlideData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import Link from "next/link";
import styles from "../styles/ProductGallery.module.scss";

export default function ProductGallery() {
  return (
    <article className={styles.galleryContainer}>
      <h2>제품 미리보기</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        slideToClickedSlide={true}
        speed={600}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{
          el: ".custom-pagination-gallery",
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="custom-bullet-gallery ${className}"></span>`,
        }}
        className={styles.swiper}
      >
        {productSlideData.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.swiperSlide}>
            <div className={styles.text}>
              <div className={styles.textInfo}>
                <h3>{slide.title}</h3>
                <div>{slide.desc}</div>
              </div>
              <button type="button" className={styles.linkButton}>
                <Link href={`/products?category=${encodeURIComponent(slide.categoryId)}`}>
                  제품 바로가기
                </Link>
              </button>
            </div>
            <div className={styles.imageWrap}>
              <Image
                src={slide.image}
                alt={slide.title}
                width={400}
                height={300}
                className={styles.image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.swiperPagination}>
        <div className="custom-pagination-gallery" />
      </div>
    </article>
  );
}
