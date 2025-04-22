"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css"; // 기본 스타일
import "swiper/css/navigation"; // 사용하면 navigation 버튼용
import "swiper/css/pagination"; // 페이지네이션 동그라미용

import { useState } from "react";
import Image from "next/image";
import styles from "../styles/SwiperContainer.module.scss";

type SlideData = {
  id: string;
  title: string;
  subTitle: string;
  image: string;
};

const slideData: SlideData[] = [
  {
    id: "slide01",
    title: "정직과 신뢰로 만들어낸 품질",
    subTitle: "가공 경력 23년,",
    image: "/jinwon(1).jpeg",
  },
  {
    id: "slide02",
    title: "믿고 맡길 수 있는 파트너",
    subTitle: "맞춤 제작부터 대량 생산까지",
    image: "/jinwon(2).jpeg",
  },
  {
    id: "slide03",
    title: "믿을 수 있는 품질, 정확한 납기",
    subTitle: "합리적인 가격",
    image: "/jinwon(3).jpeg",
  },
];

export default function SwiperContainer() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.swiperContainer}>
      <Swiper
        className={styles.swiper}
        modules={[Autoplay, Pagination]}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          renderBullet: (index, className) => `<span class="custom-bullet ${className}"></span>`,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        slidesPerView={1}
        autoplay={true}
        speed={1000}
        loop={true}
      >
        {slideData.map((slide, i) => {
          return (
            <SwiperSlide key={slide.id} className={styles.swiperSlide}>
              <motion.div
                key={slide.id}
                className={styles.textCont}
                initial={{ opacity: 0, y: 30 }}
                animate={activeIndex === i ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                <span>{slide.subTitle}</span>
                <h1>{slide.title}</h1>
              </motion.div>
              <div className={styles.imgCont}>
                <Image
                  src={slide.image}
                  alt={`진원상사 이미지 ${i + 1}`}
                  width={600}
                  height={400}
                  className={styles.img}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className={styles.swiperPagination}>
        <div className="custom-pagination" />
      </div>
    </div>
  );
}
