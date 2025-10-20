"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CustomOverlayMap, Map as KakaoMap, MapMarker } from "react-kakao-maps-sdk";
import styles from "../styles/Location.module.scss";

export default function Location() {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

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
    <article ref={containerRef} className={styles.locationContainer}>
      <h2>오시는길</h2>

      {isLoaded ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
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
        </motion.div>
      ) : (
        <motion.div
          className={styles.loading}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>지도를 불러오는 중입니다...</p>
        </motion.div>
      )}
    </article>
  );
}
