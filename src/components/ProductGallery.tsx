"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css"; // 기본 스타일
import "swiper/css/navigation"; // 사용하면 navigation 버튼용
import "swiper/css/pagination"; // 페이지네이션 동그라미용

import styles from "../styles/ProductGallery.module.scss";
import Image from "next/image";
import Link from "next/link";

type SlideData = {
  id: string;
  title: string;
  desc: string;
  image: string;
  link: string;
};

const slideData: SlideData[] = [
  {
    id: "slide01",
    title: "01번 봉투",
    desc: "투명도가 다른 유백색, 청색, 검정색 세 가지 색상으로 취향에 맞게 선택 가능하고 대, 중, 소 사이즈로 나뉘어 있으며, 끈으로 묶여 있어 협소한 장소에서도 편하게 사용 가능합니다. 하단부가 일자로 재단되어 재활용품, 쓰레기 봉투, 의류 등 물품 보관에 적합합니다.",
    image: "/productGallery(1).jpg",
    link: "/product/01",
  },
  {
    id: "slide02",
    title: "02번 봉투",
    desc: "투명도가 다른 유백색, 청색, 검정색 세 가지 색상으로 취향에 맞게 선택 가능하고 대, 중, 소 사이즈로 나뉘어 있으며, 끈으로 묶여 있어 협소한 장소에서도 편하게 사용 가능합니다. 하단부가 일자로 재단되어 재활용품, 쓰레기 봉투, 의류 등 물품 보관에 적합합니다.",
    image: "/productGallery(2).jpg",
    link: "/product/01",
  },
  {
    id: "slide03",
    title: "03번 봉투",
    desc: "투명도가 다른 유백색, 청색, 검정색 세 가지 색상으로 취향에 맞게 선택 가능하고 대, 중, 소 사이즈로 나뉘어 있으며, 끈으로 묶여 있어 협소한 장소에서도 편하게 사용 가능합니다. 하단부가 일자로 재단되어 재활용품, 쓰레기 봉투, 의류 등 물품 보관에 적합합니다.",
    image: "/productGallery(3).jpg",
    link: "/product/01",
  },
  {
    id: "slide04",
    title: "04번 봉투",
    desc: "투명도가 다른 유백색, 청색, 검정색 세 가지 색상으로 취향에 맞게 선택 가능하고 대, 중, 소 사이즈로 나뉘어 있으며, 끈으로 묶여 있어 협소한 장소에서도 편하게 사용 가능합니다. 하단부가 일자로 재단되어 재활용품, 쓰레기 봉투, 의류 등 물품 보관에 적합합니다.",
    image: "/productGallery(4).jpg",
    link: "/product/01",
  },
  {
    id: "slide05",
    title: "05번 봉투",
    desc: "투명도가 다른 유백색, 청색, 검정색 세 가지 색상으로 취향에 맞게 선택 가능하고 대, 중, 소 사이즈로 나뉘어 있으며, 끈으로 묶여 있어 협소한 장소에서도 편하게 사용 가능합니다. 하단부가 일자로 재단되어 재활용품, 쓰레기 봉투, 의류 등 물품 보관에 적합합니다.",
    image: "/productGallery(5).jpg",
    link: "/product/01",
  },
  {
    id: "slide06",
    title: "06번 봉투",
    desc: "투명도가 다른 유백색, 청색, 검정색 세 가지 색상으로 취향에 맞게 선택 가능하고 대, 중, 소 사이즈로 나뉘어 있으며, 끈으로 묶여 있어 협소한 장소에서도 편하게 사용 가능합니다. 하단부가 일자로 재단되어 재활용품, 쓰레기 봉투, 의류 등 물품 보관에 적합합니다.",
    image: "/productGallery(6).jpg",
    link: "/product/01",
  },
];

export default function ProductGallery() {
  return (
    <article className={styles.galleryContainer}>
      <h1>제품 미리보기</h1>
      <Swiper
        modules={[Pagination, Autoplay]}
        // spaceBetween={24} // 슬라이드 사이 간격
        slidesPerView={1} // 화면에 슬라이드 3개 중 1.3개만 보이게
        centeredSlides={true} // 중앙 정렬
        loop={true} // 무한 루프
        slideToClickedSlide={true} // 클릭 시 슬라이드 이동
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
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.swiperSlide}>
            <div className={styles.text}>
              <div className={styles.textInfo}>
                <h3>{slide.title}</h3>
                <p>{slide.desc}</p>
              </div>

              <button type="button" className={styles.linkButton}>
                <Link href={`${slide.link}`}>제품 바로가기</Link>
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
