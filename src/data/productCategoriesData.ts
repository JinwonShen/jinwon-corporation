export interface CategoryContentItem {
  title: string;
  items: string[];
}

export interface CategoryItem {
  id: string;
  title: string;
  image: string;
  alt: string;
  content: CategoryContentItem[];
}

export const productCategoriesData: CategoryItem[] = [
  {
    id: "general-envelope",
    title: "일반 봉투(손잡이X)",
    image: "/product-category(1).png",
    alt: "일반 봉투",
    content: [
      {
        title: "특징",
        items: [
          "가장 기본적인 형태의 비닐 봉투",
          "손잡이가 없어 간단한 구조",
          "제작 비용이 저렴하고 대량 생산에 적합",
          "다양한 크기와 두께로 제작 가능",
        ],
      },
      {
        title: "주요 용도",
        items: ["쓰레기봉투", "일반 포장용 봉투", "간단한 보관용"],
      },
      {
        title: "사용 예시",
        items: [
          "가정용 쓰레기봉투 (10L, 20L, 50L, 80L, 100L)",
          "사무실 쓰레기봉투",
          "일반 상품 포장용 봉투",
          "간단한 보관용 봉투",
        ],
      },
    ],
  },
  {
    id: "shopping-bag",
    title: "비닐 쇼핑백(손잡이O)",
    image: "/product-category(2).png",
    alt: "비닐 쇼핑백",
    content: [
      {
        title: "특징",
        items: [
          "손잡이가 부착되어 휴대가 편리",
          "다양한 디자인과 색상으로 제작 가능",
          "로고나 브랜드명 인쇄 가능",
          "내구성이 우수하여 반복 사용 가능",
        ],
      },
      {
        title: "주요 용도",
        items: ["쇼핑백", "배달용 봉투", "브랜드 홍보용 봉투"],
      },
      {
        title: "사용 예시",
        items: [
          "슈퍼마켓 쇼핑백",
          "배달음식 포장 봉투",
          "시장용 장바구니",
          "브랜드 홍보용 쇼핑백",
          "이벤트 기념품 봉투",
        ],
      },
    ],
  },
  {
    id: "food-bag",
    title: "식품용 봉투",
    image: "/product-category(3).png",
    alt: "식품용 봉투",
    content: [
      {
        title: "특징",
        items: [
          "식품 위생법 기준에 맞는 안전한 소재 사용",
          "식품과 직접 접촉해도 안전",
          "신선도 유지에 도움",
          "밴드씰링과 오픈씰링 방식으로 구분",
        ],
      },
      {
        title: "주요 용도",
        items: ["식품 포장 및 보관", "김치 보관용", "식품 배송용"],
      },
      {
        title: "사용 예시",
        items: [
          "김치 보관용 봉투",
          "과일, 야채 포장용",
          "빵, 과자류 포장용",
          "밴드씰링 식품 포장용 (물, 분말류)",
          "오픈씰링 식품 포장용 (과일, 야채류)",
        ],
      },
    ],
  },
  {
    id: "industrial-bag",
    title: "공업용 봉투",
    image: "/product-category(4).png",
    alt: "공업용 봉투",
    content: [
      {
        title: "특징",
        items: [
          "산업 현장의 특수한 요구사항에 맞춤 제작",
          "정전기 방지, 내화학성, 고강도 등 특수 기능",
          "주문 제작으로 고객 요구사항 반영",
          "산업 표준에 맞는 품질 보장",
        ],
      },
      {
        title: "주요 용도",
        items: ["전자부품 포장", "의료기기 포장", "산업용 부품 보관", "특수 화학물질 포장"],
      },
      {
        title: "사용 예시",
        items: [
          "정전기 방지 비닐 (ESD 방지)",
          "카본백 (전도성 봉투)",
          "실딩백 (밀봉형 정전기 방지)",
          "의료기기 포장용 봉투",
          "전자부품 포장용 봉투",
          "산업용 특수 포장재",
        ],
      },
    ],
  },
  {
    id: "three-side-seal",
    title: "삼방",
    image: "/product-category(5).png",
    alt: "삼방 봉투",
    content: [
      {
        title: "특징",
        items: [
          "3면이 밀봉된 특수한 형태",
          "한 면이 열려있어 내용물 투입 후 밀봉 가능",
          "내용물 보호에 효과적",
          "진공포장이나 특수 포장에 적합",
        ],
      },
      {
        title: "주요 용도",
        items: ["진공포장용", "전자제품 포장용", "특수 보관용"],
      },
      {
        title: "사용 예시",
        items: [
          "진공포장용 봉투",
          "전자제품 포장용 봉투",
          "의류 보관용 봉투",
          "침구류 압축 포장용",
          "특수 산업용 포장재",
        ],
      },
    ],
  },
];
