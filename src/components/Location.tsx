"use client";

import { useEffect, useState } from "react";
import { CustomOverlayMap, Map as KakaoMap, MapMarker } from "react-kakao-maps-sdk";
import styles from "../styles/Location.module.scss";

export default function Location() {
  const [isLoaded, setIsLoaded] = useState(false);

  const position = {
    lat: 37.3415932858139,
    lng: 126.805237775881,
  };

  useEffect(() => {
    const checkKakao = setInterval(() => {
      if (typeof window !== "undefined" && window.kakao?.maps) {
        setIsLoaded(true);
        clearInterval(checkKakao);
      }
    }, 100);

    return () => clearInterval(checkKakao);
  }, []);

  return (
    <article className={styles.locationContainer}>
      <h2>오시는길</h2>

      {isLoaded ? (
        <KakaoMap
          center={position}
          level={3}
          style={{ width: "100%", height: "500px" }}
          className={styles.kakaoMap}
        >
          <MapMarker position={position} />
          <CustomOverlayMap position={position} yAnchor={1}>
            <div className={styles.mapLabel}>진원상사</div>
          </CustomOverlayMap>
        </KakaoMap>
      ) : (
        <div className={styles.loading}>
          <p>지도를 불러오는 중입니다...</p>
        </div>
      )}
    </article>
  );
}
