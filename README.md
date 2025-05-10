# 진원상사 프로젝트 정리

## 프로젝트 개요

* 기술 스택: **Next.js 14**, **TypeScript**, **SCSS Modules**, **Framer Motion**, **Swiper.js**, **Kakao Maps SDK**, **EmailJS**, **Firebase Storage**
* 목적: 진원상사 기업 소개용 반응형 웹사이트 구현

---

## 1. Swiper 슬라이드 구현

### 📌 목표

* 한 화면에 하나의 이미지가 크게 보이고, 양 옆으로 다음/이전 슬라이드가 미리 보이는 디자인 구현
* 이미지 슬라이드 전환 시 부드러운 애니메이션 및 슬라이드 텍스트 등장 효과 추가

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

* `.swiper`와 `.swiperSlide`에 max-width 및 가운데 정렬 스타일 적용 필요
* `centeredSlides: true` 와 `loop: true` 옵션으로 앞/뒤 슬라이드 자연스럽게 연결
* Framer Motion을 통해 텍스트 애니메이션 추가

---

## 2. 카카오 맵 연동 (react-kakao-maps-sdk)

### 📌 목표

* 진원상사 위치 지도를 웹에 표시하고 마커 및 설명 추가

### ✅ 환경 변수 설정

```env
NEXT_PUBLIC_KAKAO_API_KEY=카카오에서 발급받은 JavaScript 키
```

### ✅ 설치 (React 19 사용 시)

```bash
npm install react-kakao-maps-sdk@2.1.3 --legacy-peer-deps
```

### ✅ 도메인 등록 필수

카카오 맵 SDK는 로컬 및 배포 환경에서도 **도메인 등록**이 필요함:

* 개발 중: `http://localhost:3000`
* 배포 후: `https://your-vercel-url.vercel.app`, `https://yourdomain.com`

### ✅ 안정적 렌더링 코드 예시

```tsx
"use client";
import { useEffect, useState } from "react";
import { Map as KakaoMap, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";

export default function MapSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const check = setInterval(() => {
      if (typeof window !== "undefined" && window.kakao?.maps) {
        setIsLoaded(true);
        clearInterval(check);
      }
    }, 100);
    return () => clearInterval(check);
  }, []);

  return isLoaded ? (
    <KakaoMap center={position} level={3} style={{ width: "100%", height: "400px" }}>
      <MapMarker position={position} />
      <CustomOverlayMap position={position} yAnchor={1}>
        <div>진원상사</div>
      </CustomOverlayMap>
    </KakaoMap>
  ) : null;
}
```

---

## 3. 이메일 문의 폼 구현 (EmailJS + Firebase Storage)

### 📌 목표

* 백엔드 없이 EmailJS를 사용해 클라이언트 측에서 메일 전송 가능하게 구현
* 첨부파일 용량 제한 우회를 위해 Firebase Storage 사용

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

### ✅ 전송 함수 예시

```tsx
emailjs.sendForm(
  serviceId,
  templateId,
  e.currentTarget,
  publicKey
)
```

### ✅ Firebase Storage 연동 요약

* `uploadFile(file: File)` 함수로 `uploads/` 경로에 업로드 후 `getDownloadURL`을 반환
* 업로드된 URL은 EmailJS 템플릿에 포함
* Storage 규칙은 익명 업로드만 허용되도록 제한 설정

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

* `.env.local`에 환경 변수 저장
* `layout.tsx`에서 글로벌 스타일, 헤더, 푸터 구성 포함
* `Location`과 `Contact` 영역은 동일 높이로 구성 (`height: 500px` 또는 `min-height: 500px`)
* 각 페이지(`about`, `products`, `contact`)는 `app/[page]/page.tsx` 구조로 모듈화
* 페이지별 SCSS는 `page.module.scss` 등으로 분리 관리

---

## ✨ 최신 추가: 기능 확장 및 배포 후 점검 항목

### 6. "제품 바로가기" 클릭 시 products 페이지의 해당 카테고리 탭이 자동으로 선택되게 하기

* `/products?category=슬러그` 형식으로 이동
* `productCategories.ts` 에서 slug 값과 한국 카테고리 상태 매칭 (`categoryMap`)
* `products/page.tsx`에서 `useSearchParams` 를 통해 참조 값을 가져와 `useEffect` 로 `selectedCategory` 값 갱신
* Tab UI, List UI는 기존과 동일하게 유지

```ts
// productCategories.ts
export const categoryMap: Record<string, string> = {
  "handle-bag": "손잡이 봉투",
  "trash-bag": "쓰레기 봉투",
  "food-packaging-bag": "시장/배달용 봉투",
  "delivery-bag": "식품 포장용 봉투",
  "industrial-bag": "공업용 봉투",
  "others": "기타 부자재",
};
```

### 7. SEO 및 웹 표준 강화

* 모든 `<img>`를 Next.js의 `<Image>` 컴포넌트로 교체 → LCP 최적화 및 lazy loading 적용
* 페이지별 `metadata` 설정으로 title, description, og\:image 등 구성
* `robots.txt`, `sitemap.xml` 자동 생성 고려
* 의미 있는 heading(H1\~H3 등) 계층 구조로 페이지 구성

### 8. 커스텀 도메인 연결

* Vercel → 프로젝트 → Settings → Domains 에서 연결 가능
* DNS 레코드가 `A` 또는 `CNAME`으로 연결되어야 함

### 9. 접근성 및 브라우저 호환성 점검

* Lighthouse로 성능/접근성 점검 (특히 contrast, alt, label, landmark 등)
* iOS Safari, Android Chrome, Edge 등에서 반응형 메뉴 동작 여부 확인

### 10. 배포 후 운영 테스트 시나리오

* 메인 → 제품 소개 → 카테고리 필터 → 제품 클릭
* 메인 → 문의하기 → 파일 업로드 + 전송 테스트
* 메인 → 지도 → 길찾기 확인
* 메인 → 모바일 환경 진입 → 햄버거 메뉴 작동 여부

---

위 모든 체크리스트는 최종 릴리즈 전 점검용으로 사용하고, README.md에 주기적으로 업데이트함.
