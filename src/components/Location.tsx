"use client";

import { Map as KakaoMap, MapMarker } from "react-kakao-maps-sdk";
import styles from "../styles/Location.module.scss";

export default function Location() {
  const position = {
    lat: 37.3415932858139,
    lng: 126.805237775881,
  };

  return (
    <article className={styles.locationContainer}>
      <h2>Location</h2>
      <KakaoMap
        center={position}
        style={{ width: "100%", height: "100%", borderRadius: "12px" }}
        level={3}
      >
        <MapMarker position={position}>
          <div style={{ padding: "4px", color: "#000" }}>진원상사</div>
        </MapMarker>
      </KakaoMap>
    </article>
  );
}
