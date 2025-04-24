# 진원상사 프론트엔드 프로젝트 정리

## 프로젝트 개요
- 기술 스택: **Next.js 14**, **TypeScript**, **SCSS Modules**, **Framer Motion**, **Swiper.js**, **Kakao Maps SDK**
- 목적: 진원상사 기업 소개용 반응형 웹사이트 구현

---

## 1. Swiper 슬라이드 구현

### 📌 목표
- 한 화면에 하나의 이미지가 크게 보이고, 양 옆으로 다음/이전 슬라이드가 미리 보이는 디자인 구현
- 이미지 슬라이드 전환 시 부드러운 애니메이션 및 슬라이드 텍스트 등장 효과 추가

### ✅ 설치
```bash
npm install swiper
```

### ✅ 사용 예시
```tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

<Swiper
  modules={[Pagination, Autoplay]}
  spaceBetween={24}
  slidesPerView={1.5}
  centeredSlides={true}
  loop={true}
  autoplay={{ delay: 3000 }}
  pagination={{ clickable: true }}
>
  {slideData.map((slide) => (
    <SwiperSlide key={slide.id}>
      <motion.div ...>
        <Image src={slide.image} ... />
      </motion.div>
    </SwiperSlide>
  ))}
</Swiper>
```

### ✅ 참고 사항
- `.swiper`와 `.swiperSlide`에 max-width 및 가운데 정렬 스타일 적용 필요
- `centeredSlides: true` 와 `loop: true` 옵션으로 앞/뒤 슬라이드 자연스럽게 연결
- Framer Motion을 통해 텍스트 애니메이션 추가

---

## 2. 카카오 맵 연동 (react-kakao-maps-sdk)

### 📌 목표
- 진원상사 위치 지도를 웹에 표시하고 마커 및 설명 추가

### ✅ 환경 변수 설정
```env
NEXT_PUBLIC_KAKAO_API_KEY=여기에_발급받은_앱키_입력
```

### ✅ 설치 (React 19 사용 시)
```bash
npm install react-kakao-maps-sdk@2.1.3 --legacy-peer-deps
```

### ✅ 사용 예시
```tsx
"use client";
import { Map as KakaoMap, MapMarker } from "react-kakao-maps-sdk";

const position = {
  lat: 37.3415932858139,
  lng: 126.805237775881,
};

<KakaoMap
  center={position}
  style={{ width: "100%", height: "100%" }}
  level={3}
>
  <MapMarker position={position} />
</KakaoMap>
```

### ✅ 사용자 정의 텍스트 제거 및 기본 말풍선 유지 방법
- `<MapMarker>` 내부에 텍스트를 넣지 않으면 기본 말풍선 UI 유지됨
- 직접 텍스트를 넣을 경우 스타일 충돌 가능

---

## 3. 애니메이션 효과 (Framer Motion)
- Swiper 슬라이드 및 기타 섹션에 등장 애니메이션 적용
```tsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.6 }}
>
  <h2>맞춤/주문제작 전문</h2>
</motion.div>
```

---

## 4. 기타
- `.env.local`에 환경 변수 저장
- 레이아웃 구조는 `layout.tsx`에서 관리하며 글로벌 스타일, 헤더, 푸터 포함
- KakaoMapScriptProvider는 react-kakao-maps-sdk 최신 버전에서는 필요 없음

---

## 💡 문제 및 해결 이력 요약
| 문제 | 해결 방법 |
|------|-------------|
| Swiper Slide 크기 및 배치 | `.swiper`, `.swiperSlide`에 `max-width` 및 `margin: auto` 설정 |
| react-kakao-maps-sdk 설치 충돌 | `--legacy-peer-deps` 옵션 추가 + v2.1.3 사용 |
| KakaoMapApiKey 전달 오류 | 최신 SDK 버전에서는 `<KakaoMapScriptProvider>` 필요 없음 |
| hydration error | 서버/클라이언트 렌더링 일치 문제 해결 후 정상 동작 확인 |
| MapMarker 겹침 현상 | 사용자 정의 말풍선을 제거하고 기본 말풍선 사용으로 해결 |

---

## 🗂️ 주요 파일 구조
```
├── components
│   ├── ProductGallery.tsx     # Swiper 슬라이드 구성
│   ├── Location.tsx           # 카카오 맵 위치 표시
├── styles
│   ├── ProductGallery.module.scss
│   ├── Location.module.scss
├── .env.local                 # 카카오 API 키 보관
```

