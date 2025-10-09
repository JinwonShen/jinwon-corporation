export interface MaterialContentItem {
  title: string;
  items: string[];
}

export interface MaterialItem {
  id: string;
  title: string;
  englishTitle: string;
  koreanTitle: string;
  image: string;
  alt: string;
  content: MaterialContentItem[];
}

export const productMaterialsData: MaterialItem[] = [
  {
    id: "hdpe",
    title: "HDPE",
    englishTitle: "High Density Polyethylene",
    koreanTitle: "고밀도 폴리에틸렌",
    image: "/HDPE.png",
    alt: "HDPE",
    content: [
      {
        title: "특징",
        items: [
          "내구성과 강도가 우수함",
          "내화학성과 내구성이 뛰어남",
          "온도 변화에 강함",
          "투명도가 낮아 불투명함",
          "가격이 상대적으로 저렴함",
        ],
      },
      {
        title: "주요 용도",
        items: ["배송용 봉투", "쓰레기봉투", "산업용 포장재"],
      },
      {
        title: "사용 예시",
        items: [
          "슈퍼마켓 쇼핑백",
          "배달음식 포장 봉투",
          "중량 상품 운반용 봉투",
          "브랜드 홍보용 쇼핑백",
        ],
      },
    ],
  },
  {
    id: "ldpe",
    title: "LDPE",
    englishTitle: "Low Density Polyethylene",
    koreanTitle: "저밀도 폴리에틸렌",
    image: "/LDPE.png",
    alt: "LDPE",
    content: [
      {
        title: "특징",
        items: [
          "낮은 밀도로 부드럽고 유연함",
          "투명도가 높아 반투명함",
          "가공이 용이함",
          "내화학성은 HDPE보다 낮음",
        ],
      },
      {
        title: "주요 용도",
        items: ["식품 포장", "쇼핑백", "일반 포장재"],
      },
      {
        title: "사용 예시",
        items: ["빵 봉지", "김 포장지", "일반 쇼핑백"],
      },
    ],
  },
  {
    id: "lldpe",
    title: "LLDPE",
    englishTitle: "Linear Low Density Polyethylene",
    koreanTitle: "선형 저밀도 폴리에틸렌",
    image: "/LLDPE.png",
    alt: "LLDPE",
    content: [
      {
        title: "특징",
        items: [
          "LDPE보다 강도와 내구성이 높음",
          "유연성도 유지함",
          "선형 분자 구조에 짧은 분지",
          "스트레치 필름에 적합",
        ],
      },
      {
        title: "주요 용도",
        items: ["필름", "파이프", "케이블 코팅"],
      },
      {
        title: "사용 예시",
        items: ["포장 필름", "랩 필름", "농업용 필름"],
      },
    ],
  },
  {
    id: "pp",
    title: "PP",
    englishTitle: "Polypropylene",
    koreanTitle: "폴리프로필렌",
    image: "/PP.png",
    alt: "PP",
    content: [
      {
        title: "특징",
        items: ["가볍고 열에 강함", "내화학성이 우수함", "투명도가 높음", "식품 안전성 확보"],
      },
      {
        title: "주요 용도",
        items: ["식품 용기", "자동차 부품", "섬유"],
      },
      {
        title: "사용 예시",
        items: ["일회용 반찬통", "아이스크림 통", "도시락 뚜껑", "약통", "전자레인지용 밀폐용기"],
      },
    ],
  },
  {
    id: "ny",
    title: "NY",
    englishTitle: "Nylon Composite",
    koreanTitle: "나일론 합지",
    image: "/NY(합지) OTHER.png",
    alt: "NY",
    content: [
      {
        title: "특징",
        items: ["내구성이 높음", "기계적 강도가 우수함", "투명도가 높음", "좋은 가스 차단성"],
      },
      {
        title: "주요 용도",
        items: ["나일론 합지 형태로 식품 포장재"],
      },
      {
        title: "사용 예시",
        items: ["진공 포장재", "산업용 특수 포장재", "고급 식품 포장재"],
      },
    ],
  },
];
