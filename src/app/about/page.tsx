"use client";

import { certs, partnerLogos } from "@/data/aboutData";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FaRegBuilding,
  FaRegCalendar,
  FaRegCircleCheck,
  FaRegRectangleList,
} from "react-icons/fa6";
import { CustomOverlayMap, Map as KakaoMap, MapMarker } from "react-kakao-maps-sdk";
import styles from "./page.module.scss";

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const overviewRef = useRef<HTMLUListElement>(null);
  const overviewInView = useInView(overviewRef, { once: true, margin: "-100px" });
  const certsRef = useRef<HTMLElement>(null);
  const certsInView = useInView(certsRef, { once: true, margin: "-100px" });
  const locationRef = useRef<HTMLElement>(null);
  const locationInView = useInView(locationRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const check = setInterval(() => {
      if (typeof window !== "undefined" && window.kakao?.maps) {
        window.kakao.maps.load(() => {
          setIsLoaded(true);
        });
        clearInterval(check);
      }
    }, 100);

    return () => clearInterval(check);
  }, []);

  const position = {
    lat: 37.3415932858139,
    lng: 126.805237775881,
  };

  return (
    <section className={styles.aboutContainer}>
      <motion.div
        className={styles.titleContainer}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h1>
          진원상사,
          <br /> 작은 봉투에서 시작된 글로벌 경쟁력
        </h1>
      </motion.div>

      <article className={styles.greeting}>
        <div className={styles.imgBox}>
          {/* <img src="/about-title-image.jpeg" alt="진원상사 소개 이미지" /> */}
          <Image
            src="/about-title-image.jpeg"
            alt="진원상사 소개 타이틀 이미지"
            width={550}
            height={350}
            priority
            className={styles.greetingImage}
          />
        </div>
        <div className={styles.greetingTextContainer}>
          <motion.h2
            className={styles.greetingTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            시장용 봉투부터 <br /> 수출용 슬라이딩백까지
          </motion.h2>
          <motion.p
            className={styles.greetingText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            진원상사는 노점 시장과 식당 배달봉투, 업체 상품 포장지, 수출용 MSDS 슬라이딩백까지
            다양한 제품을 이어오며 끊임없는 개발과 혁신을 멈추지 않은 열정의 기업입니다.
            <br />
            <br />
            소매와 도매를 병행하며 시장용 봉투를 중심으로 사업을 시작한 이래, 공업용, 식품용 등
            다양한 분야로 생산 영역을 확장해 왔습니다. 고객의 신뢰를 기반으로 품질을 최우선으로
            생각하며, 오늘날까지도 비닐 가공 전문 제조업체로 한걸음씩 성장하고 있습니다.
          </motion.p>
        </div>
      </article>

      <article className={styles.overview}>
        <h2>Overview</h2>
        <ul ref={overviewRef}>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={overviewInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <FaRegBuilding size={24} className={styles.icon} {...({} as any)} />
            <p>회사명</p>
            <p>진원상사</p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={overviewInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FaRegCalendar size={24} className={styles.icon} {...({} as any)} />
            <p>설립연도</p>
            <p>2002년~</p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={overviewInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <FaRegRectangleList size={24} className={styles.icon} {...({} as any)} />
            <p>사업분야</p>
            <p>비닐 제조 도.소매</p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={overviewInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <FaRegCircleCheck size={24} className={styles.icon} {...({} as any)} />
            <p>주요제품</p>
            <p>식품용 비닐, 공업용 포장지, 정전기 방지 비닐 등</p>
          </motion.li>
        </ul>
      </article>

      <article className={styles.partners}>
        <ul>
          {[...partnerLogos, ...partnerLogos].map(({ id, src }, idx) => {
            const uniqueKey = `${id}-${idx}`;
            return (
              <li key={uniqueKey} className={styles.slide}>
                {/* <img src={src} alt={`파트너 ${id}`} /> */}
                <Image src={src} alt={`파트너 ${id}`} width={150} height={40} />
              </li>
            );
          })}
        </ul>
      </article>

      <article ref={certsRef} className={styles.certificates}>
        <h2>인증서</h2>
        <ul>
          {[...certs].map(({ id, src }, index) => (
            <motion.li
              key={id}
              initial={{ opacity: 0, y: 20 }}
              animate={certsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <Image src={src} alt={`인증서 ${id}`} width={275} height={388} />
            </motion.li>
          ))}
        </ul>
      </article>

      <article ref={locationRef} className={styles.location}>
        <h2>오시는 길</h2>
        <motion.div
          className={styles.locationInfo}
          initial={{ opacity: 0, y: 20 }}
          animate={locationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>대표번호 : 031 - 401 - 4135</p>
          <p>주소 : 경기도 안산시 단원구 선부2동 1032-3, 진원상사</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={locationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {isLoaded && (
            <KakaoMap
              center={position}
              level={3}
              style={{ width: "100%", height: "400px", borderRadius: "8px" }}
              className={styles.kakaoMap}
            >
              <MapMarker position={position} />
              <CustomOverlayMap position={position} yAnchor={1}>
                <div className={styles.mapLabel}>진원상사</div>
              </CustomOverlayMap>
            </KakaoMap>
          )}
        </motion.div>
        <motion.p
          className={styles.warning}
          initial={{ opacity: 0, y: 20 }}
          animate={locationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          지도가 보이지 않을 경우에는 새로고침을 해주세요.
        </motion.p>
      </article>
    </section>
  );
}
