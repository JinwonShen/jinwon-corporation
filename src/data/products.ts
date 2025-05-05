export type Product = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
};

export const productData: Record<string, Product[]> = {
  "손잡이 봉투": [
    {
      id: "normal1",
      title: "일반 비닐봉투 1호",
      description: "다용도로 사용 가능한 표준 사이즈 봉투입니다.",
      thumbnail: "/productThumbnail(1).png",
    },
  ],
  쓰레기봉투: [
    {
      id: "normal1",
      title: "쓰레기봉투",
      description: "다용도로 사용 가능한 표준 사이즈 봉투입니다.",
      thumbnail: "/productThumbnail(2).png",
    },
  ],
  "시장/배달용 봉투": [
    {
      id: "normal1",
      title: "두거리 포장봉투",
      description: "제품에 대한 설명을 작성해주세요.",
      thumbnail: "/customOrderImg(1).png",
    },
    {
      id: "normal1",
      title: "어장관리 포장봉투",
      description: "제품에 대한 설명을 작성해주세요.",
      thumbnail: "/customOrderImg(2).png",
    },
    {
      id: "normal1",
      title: "에터미 포장봉투",
      description: "제품에 대한 설명을 작성해주세요.",
      thumbnail: "/customOrderImg(3).png",
    },
    {
      id: "normal1",
      title: "장충동.. 포장봉투",
      description: "제품에 대한 설명을 작성해주세요.",
      thumbnail: "/customOrderImg(4).png",
    },
    {
      id: "normal1",
      title: "장수촌 포장봉투",
      description: "제품에 대한 설명을 작성해주세요.",
      thumbnail: "/customOrderImg(5).png",
    },
    {
      id: "normal1",
      title: "엉클짱.. 포장봉투",
      description: "제품에 대한 설명을 작성해주세요.",
      thumbnail: "/customOrderImg(6).png",
    },
  ],
  "식품 포장용 봉투": [
    {
      id: "normal1",
      title: "식품 포장용 봉투",
      description: "다용도로 사용 가능한 표준 사이즈 봉투입니다.",
      thumbnail: "/productThumbnail(1).png",
    },
  ],
  "공업용 봉투": [
    {
      id: "normal1",
      title: "공업용 봉투",
      description: "다용도로 사용 가능한 표준 사이즈 봉투입니다.",
      thumbnail: "/productThumbnail(1).png",
    },
  ],
  기타부자재: [
    {
      id: "normal1",
      title: "랩",
      description: "다용도로 사용 가능한 표준 사이즈 봉투입니다.",
      thumbnail: "/productThumbnail(1).png",
    },
    {
      id: "normal1",
      title: "장갑",
      description: "다용도로 사용 가능한 표준 사이즈 봉투입니다.",
      thumbnail: "/productThumbnail(1).png",
    },
    {
      id: "normal1",
      title: "OPP 테이프",
      description: "다용도로 사용 가능한 표준 사이즈 봉투입니다.",
      thumbnail: "/productThumbnail(1).png",
    },
  ],
};
