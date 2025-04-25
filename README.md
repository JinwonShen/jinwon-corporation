# 진원상사 프로젝트 정리

## 프로젝트 개요
- 기술 스택: **Next.js 14**, **TypeScript**, **SCSS Modules**, **Framer Motion**, **Swiper.js**, **Kakao Maps SDK**, **EmailJS**
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
NEXT_PUBLIC_KAKAO_API_KEY=카카오에서 발급받은 JavaScript 키
```

### ✅ 설치 (React 19 사용 시)
```bash
npm install react-kakao-maps-sdk@2.1.3 --legacy-peer-deps
```

### ✅ 사용 예시
```tsx
import { Map as KakaoMap, MapMarker } from "react-kakao-maps-sdk";

<KakaoMap center={position} level={3} style={{ width: "100%", height: "450px" }}>
  <MapMarker position={position} />
</KakaoMap>
```

---

## 3. 이메일 문의 폼 구현 (EmailJS)

### 📌 목표
- 백엔드 없이 EmailJS를 사용해 클라이언트 측에서 메일 전송 가능하게 구현

### ✅ 설치
```bash
npm install @emailjs/browser
```

### ✅ 환경 변수 설정
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_XXXXXXX
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_XXXXXXX
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=XXXXXXX
```
❗️주의: `.env.local`에는 Public Key에서 `public_` 접두사를 제거한 값만 입력해야 정상 동작함.

### ✅ 템플릿 예시 구성 (EmailJS)
```text
To Email: 운영자 이메일
From Name: {{name}}
Reply To: {{email}}
Subject: Contact Us: {{subject}}
Message: {{message}}
```

### ✅ 전송 함수 예시
```tsx
emailjs.sendForm(
  serviceId,
  templateId,
  e.currentTarget,
  publicKey
)
```

---

## 4. 애니메이션 효과 (Framer Motion)
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

## 5. 기타
- `.env.local`에 환경 변수 저장
- `layout.tsx`에서 글로벌 스타일, 헤더, 푸터 구성 포함
- `Location`과 `Contact` 영역은 동일 높이로 구성 (`height: 500px` 또는 `min-height: 500px`)

---

## 💡 문제 및 해결 이력 요약
| 문제 | 해결 방법 |
|------|-------------|
| Swiper Slide 크기 및 배치 | `.swiper`, `.swiperSlide`에 `max-width`, `margin: auto` 설정 |
| react-kakao-maps-sdk 설치 충돌 | `--legacy-peer-deps` 옵션 + v2.1.3 명시 설치 |
| KakaoMapApiKey 전달 오류 | `<KakaoMapScriptProvider>` 없이 바로 전달 가능 (최신 버전 기준) |
| hydration error | 서버/클라이언트 렌더링 일치 문제 해결로 정상 작동 |
| EmailJS Public Key 오류 | `.env.local`에서는 `public_` 접두사 제거 후 저장해야 정상 작동 |

---

## 🗂️ 주요 파일 구조
```
├── components
│   ├── ProductGallery.tsx       # Swiper 슬라이드 구성
│   ├── Location.tsx             # 카카오 맵 위치 표시
│   ├── Contact.tsx              # 이메일 문의 폼 구성
├── styles
│   ├── ProductGallery.module.scss
│   ├── Location.module.scss
│   ├── Contact.module.scss
```

