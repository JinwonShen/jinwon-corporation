export type Product = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
};

export const productData: Record<string, Product[]> = {
  "손잡이 봉투": [
    {
      id: "handle-bag-01",
      title: "손잡이 봉투",
      description: "다용도로 사용 가능한 표준 사이즈 봉투입니다.",
      thumbnail: "/handle-bag-01.png",
    },
    {
      id: "handle-bag-02",
      title: "손잡이 봉투",
      description: "다용도로 사용 가능한 표준 사이즈 봉투입니다.",
      thumbnail: "/handle-bag-02.png",
    },
    {
      id: "handle-bag-03",
      title: "손잡이 봉투",
      description: "다용도로 사용 가능한 표준 사이즈 봉투입니다.",
      thumbnail: "/handle-bag-03.png",
    },
  ],
  "쓰레기 봉투": [
    {
      id: "trash-bag-01",
      title: "쓰레기 봉투",
      description: "쓰레기 봉투로 많이 사용되지만, 그 외에도 다양한 용도로 사용될 수 있습니다.",
      thumbnail: "/trash-bag-01.png",
    },
  ],
  "시장/배달용 봉투": [
    {
      id: "delivery-bag-01",
      title: "유원지 추어 매운탕",
      description: "가장 기본적인 배달 및 음식 포장 봉투입니다.",
      thumbnail: "/delivery-bag-01.jpg",
    },
    {
      id: "delivery-bag-02",
      title: "BBQ와 우리장작구이",
      description: "가장 기본적인 배달 및 음식 포장 봉투입니다.",
      thumbnail: "/delivery-bag-02.jpg",
    },
    {
      id: "delivery-bag-03",
      title: "두거리 치탕",
      description: "가장 기본적인 배달 및 음식 포장 봉투입니다.",
      thumbnail: "/delivery-bag-03.jpeg",
    },
    {
      id: "delivery-bag-04",
      title: "형제족발",
      description: "가장 기본적인 배달 및 음식 포장 봉투입니다.",
      thumbnail: "/delivery-bag-04.jpg",
    },
    {
      id: "delivery-bag-05",
      title: "달콤한 닭강정",
      description: "가장 기본적인 배달 및 음식 포장 봉투입니다.",
      thumbnail: "/delivery-bag-05.jpg",
    },
    {
      id: "delivery-bag-06",
      title: "다가올레 치킨",
      description: "가장 기본적인 배달 및 음식 포장 봉투입니다.",
      thumbnail: "/delivery-bag-06.jpg",
    },
    {
      id: "delivery-bag-07",
      title: "정석 통 바베큐 족구이",
      description: "가장 기본적인 배달 및 음식 포장 봉투입니다.",
      thumbnail: "/delivery-bag-07.jpg",
    },
    {
      id: "delivery-bag-08",
      title: "그랜드 홈 마트",
      description: "기본적인 포장 봉투입니다.",
      thumbnail: "/delivery-bag-08.jpg",
    },
    {
      id: "delivery-bag-09",
      title: "에터미 포장봉투",
      description: "기본적인 포장 봉투입니다.",
      thumbnail: "/delivery-bag-09.jpeg",
    },
  ],
  "식품 포장용 봉투": [
    {
      id: "food-bag-01",
      title: "마른 오징어",
      description: "마른 오징어 포장 봉투입니다.",
      thumbnail: "/food-bag-01.jpg",
    },
    {
      id: "food-bag-02",
      title: "안동 학가산 김치",
      description: "김치봉투 입니다.",
      thumbnail: "/food-bag-02.jpg",
    },
    {
      id: "food-bag-03",
      title: "화성시 햇살드리",
      description: "화성시 햇살드리 포장봉투입니다.",
      thumbnail: "/food-bag-03.jpeg",
    },
    {
      id: "food-bag-04",
      title: "고사리나물볶음",
      description: "고사리 식품용 포장봉투입니다.",
      thumbnail: "/food-bag-04.jpeg",
    },
    {
      id: "food-bag-05",
      title: "능이버섯볶음",
      description: "능이버섯볶음 식품용 포장봉투입니다.",
      thumbnail: "/food-bag-05.jpeg",
    },
    {
      id: "food-bag-06",
      title: "톳 100g",
      description: "톳 식품용 포장봉투입니다.",
      thumbnail: "/food-bag-06.jpeg",
    },
    {
      id: "food-bag-09",
      title: "무짱아찌무침",
      description: "무짱아찌무침 식품용 포장봉투입니다.",
      thumbnail: "/food-bag-09.jpeg",
    },
    {
      id: "food-bag-11",
      title: "볶음야채믹스",
      description: "볶음야채믹스 식품용 포장봉투입니다.",
      thumbnail: "/food-bag-11.jpeg",
    },
    {
      id: "food-bag-10",
      title: "본) 식품용 포장봉투",
      description: "식품용 포장봉투입니다.",
      thumbnail: "/food-bag-10.jpeg",
    },
    {
      id: "food-bag-08",
      title: "늘푸른 찌개용 김치",
      description: "늘푸른 찌개용 김치 식품용 포장봉투입니다.",
      thumbnail: "/food-bag-08.jpeg",
    },
    {
      id: "food-bag-07",
      title: "가문의 김치찜",
      description: "가문의 김치찜 식품용 포장봉투입니다.",
      thumbnail: "/food-bag-07.jpeg",
    },
  ],
  "공업용 봉투": [
    {
      id: "industrial-bag-01",
      title: "Disk win - 현대메디칼",
      description: "공업용 봉투로 정전기 방지 등 전자제품, 피복 등 산업현장에서 사용합니다.",
      thumbnail: "/industrial-bag-01.jpg",
    },
    {
      id: "industrial-bag-02",
      title: "Disk win - 현대메디칼",
      description: "공업용 봉투로 정전기 방지 등 전자제품, 피복 등 산업현장에서 사용합니다.",
      thumbnail: "/industrial-bag-02.jpg",
    },
    {
      id: "industrial-bag-03",
      title: "수출) 5개국어 포장지",
      description: "공업용 봉투로 정전기 방지 등 전자제품, 피복 등 산업현장에서 사용합니다.",
      thumbnail: "/industrial-bag-03.jpg",
    },
  ],
  "기타 부자재": [
    {
      id: "supply-wrap",
      title: "랩",
      description: "다용도로 사용 가능한 표준 사이즈 봉투입니다.",
      thumbnail: "/supply-wrap.png",
    },
    {
      id: "supply-glove",
      title: "장갑",
      description: "다용도로 사용 가능한 표준 사이즈 봉투입니다.",
      thumbnail: "/supply-glove.png",
    },
    {
      id: "supply-band",
      title: "고무줄",
      description: "다용도로 사용 가능한 표준 사이즈 봉투입니다.",
      thumbnail: "/supply-band.png",
    },
    {
      id: "supply-tape",
      title: "OPP 테이프",
      description: "다용도로 사용 가능한 표준 사이즈 봉투입니다.",
      thumbnail: "/supply-tape.png",
    },
  ],
};
