export type Product = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
};

export const productData: Record<string, Product[]> = {
  "손잡이 봉투": [
    {
      id: "firstProduct1",
      title: "손잡이 봉투",
      description: "다용도로 사용 가능한 표준 사이즈 봉투입니다.",
      thumbnail: "/firstProductThumb(1).png",
    },
    {
      id: "firstProduct2",
      title: "손잡이 봉투",
      description: "다용도로 사용 가능한 표준 사이즈 봉투입니다.",
      thumbnail: "/firstProductThumb(2).png",
    },
    {
      id: "firstProduct3",
      title: "손잡이 봉투",
      description: "다용도로 사용 가능한 표준 사이즈 봉투입니다.",
      thumbnail: "/firstProductThumb(3).png",
    },
  ],
  "쓰레기 봉투": [
    {
      id: "secondProduct1",
      title: "쓰레기 봉투",
      description: "쓰레기 봉투로 많이 사용되지만, 그 외에도 다양한 용도로 사용될 수 있습니다.",
      thumbnail: "/secondProductThumb(1).png",
    },
  ],
  "시장/배달용 봉투": [
    {
      id: "thirdProduct1",
      title: "두거리 포장봉투",
      description: "배달 및 음식 포장 봉투입니다.",
      thumbnail: "/thirdProductThumb(1).png",
    },
    {
      id: "thirdProduct2",
      title: "장수촌 포장봉투",
      description: "배달 및 음식 포장 봉투입니다.",
      thumbnail: "/thirdProductThumb(2).png",
    },
    {
      id: "thirdProduct3",
      title: "엉클짱.. 포장봉투",
      description: "배달 및 음식 포장 봉투입니다.",
      thumbnail: "/thirdProductThumb(3).png",
    },
    {
      id: "thirdProduct4",
      title: "장충동.. 포장봉투",
      description: "배달 및 음식 포장 봉투입니다.",
      thumbnail: "/thirdProductThumb(4).png",
    },
    {
      id: "thirdProduct5",
      title: "어장관리 포장봉투",
      description: "배달 및 음식 포장 봉투입니다.",
      thumbnail: "/thirdProductThumb(5).png",
    },
    {
      id: "thirdProduct6",
      title: "에터미 포장봉투",
      description: "제품 포장 봉투입니다.",
      thumbnail: "/thirdProductThumb(6).png",
    },
  ],
  "식품 포장용 봉투": [
    {
      id: "fourthProduct1",
      title: "본) 맛있는 김치",
      description: "10kg 김치봉투입니다.",
      thumbnail: "/fourthProductThumb(1).png",
    },
    {
      id: "fourthProduct2",
      title: "미가 김치",
      description: "10kg 김치봉투입니다.",
      thumbnail: "/fourthProductThumb(2).png",
    },
    {
      id: "fourthProduct3",
      title: "본) 비트 동치미",
      description: "1kg 동치미 봉투입니다.",
      thumbnail: "/fourthProductThumb(3).png",
    },
    {
      id: "fourthProduct4",
      title: "종로상회 김치찌개",
      description: "김치찌개 봉투입니다.",
      thumbnail: "/fourthProductThumb(4).png",
    },
  ],
  "공업용 봉투": [
    {
      id: "fifthProduct1",
      title: "공업용 봉투",
      description: "공업용 봉투로 정전기 방지 등 전자제품, 피복 등 산업현장에서 사용합니다.",
      thumbnail: "/fifthProductThumb(1).png",
    },
    {
      id: "fifthProduct2",
      title: "수출) 공업용 봉투",
      description: "공업용 봉투로 정전기 방지 등 전자제품, 피복 등 산업현장에서 사용합니다.",
      thumbnail: "/fifthProductThumb(2).png",
    },
  ],
  "기타 부자재": [
    {
      id: "sixthProduct1",
      title: "랩",
      description: "다용도로 사용 가능한 표준 사이즈 봉투입니다.",
      thumbnail: "/sixthProductThumb(1).png",
    },
    {
      id: "sixthProduct2",
      title: "장갑",
      description: "다용도로 사용 가능한 표준 사이즈 봉투입니다.",
      thumbnail: "/sixthProductThumb(2).png",
    },
    {
      id: "sixthProduct3",
      title: "고무줄",
      description: "다용도로 사용 가능한 표준 사이즈 봉투입니다.",
      thumbnail: "/sixthProductThumb(3).png",
    },
    {
      id: "sixthProduct4",
      title: "OPP 테이프",
      description: "다용도로 사용 가능한 표준 사이즈 봉투입니다.",
      thumbnail: "/sixthProductThumb(4).png",
    },
  ],
};
