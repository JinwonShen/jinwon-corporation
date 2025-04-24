"use client";

import { Map as KakaoMap, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import styles from "../styles/Location.module.scss";

export default function Location() {
  const position = {
    lat: 37.3415932858139,
    lng: 126.805237775881,
  };

  return (
    <article className={styles.locationContainer}>
      <h2>Location</h2>
      <KakaoMap center={position} level={3} className={styles.kakaoMap}>
        <MapMarker position={position} />
        <CustomOverlayMap position={position} yAnchor={1}>
          <div className={styles.mapLabel}>진원상사</div>
        </CustomOverlayMap>
      </KakaoMap>
    </article>
  );
}
