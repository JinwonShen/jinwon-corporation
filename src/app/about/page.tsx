"use client";

import { certs, partnerLogos } from "@/data/aboutData";
import { useEffect, useState } from "react";
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
      <div className={styles.titleContainer}>
        <h1>진원상사</h1>
        <div className={styles.imgBox}>
          <img src="/about-title-image.jpeg" alt="진원상사 소개 이미지" />
        </div>
      </div>

      <article className={styles.greeting}>
        <h2 className={styles.greetingTitle}>작은 봉투에서 시작된 글로벌 경쟁력</h2>
        <p className={styles.greetingText}>
          진원상사는 노점 시장과 식당 배달봉투, 업체 상품 포장지, 수출용 MSDS 슬라이딩백까지 다양한
          제품을 이어오며 끊임없는 개발과 혁신을 멈추지 않은 열정의 기업입니다.
        </p>
        <br />
        <p className={styles.greetingText}>
          소매와 도매를 병행하며 시장용 봉투를 중심으로 사업을 시작한 이래, 공업용, 식품용 등 다양한
          분야로 생산 영역을 확장해 왔습니다. 고객의 신뢰를 기반으로 품질을 최우선으로 생각하며,
          오늘날까지도 비닐 가공 전문 제조업체로 한걸음씩 성장하고 있습니다.
        </p>
      </article>

      <article className={styles.overview}>
        <h2>Overview</h2>
        <ul>
          <li>
            <FaRegBuilding size={24} className={styles.icon} />
            <p>회사명</p>
            <p>진원상사</p>
          </li>
          <li>
            <FaRegCalendar size={24} className={styles.icon} />
            <p>설립연도</p>
            <p>2003년~</p>
          </li>
          <li>
            <FaRegRectangleList size={24} className={styles.icon} />
            <p>사업분야</p>
            <p>비닐 제조 도.소매</p>
          </li>
          <li>
            <FaRegCircleCheck size={24} className={styles.icon} />
            <p>주요제품</p>
            <p>식품용 비닐, 공업용 포장지, 정전기 방지 비닐 등</p>
          </li>
        </ul>
      </article>

      <article className={styles.partners}>
        <ul>
          {[...partnerLogos, ...partnerLogos].map(({ id, src }, idx) => (
            <li key={`${id} - ${idx}`} className={styles.slide}>
              <img src={src} alt={`파트너 ${id}`} />
            </li>
          ))}
        </ul>
      </article>

      <article className={styles.certificates}>
        <h2>인증서</h2>
        <ul>
          {[...certs].map(({ id, src }) => (
            <li key={id}>
              <img src={src} alt={`인증서 ${id}`} />
            </li>
          ))}
        </ul>
        <div className={styles.certImages}>{/* 추후 인증서 이미지 추가 */}</div>
      </article>

      <article className={styles.location}>
        <h2>오시는 길</h2>
        <div className={styles.locationInfo}>
          <p>대표번호 : 031 - 401 - 4135</p>
          <p>주소 : 경기도 안산시 단원구 선부2동 1032-3, 진원상사</p>
        </div>
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
        <p className={styles.warning}>지도가 보이지 않을 경우에는 새로고침을 해주세요.</p>
      </article>
    </section>
  );
}
