type ProductSlideData = {
  id: string;
  title: string;
  desc: React.ReactNode;
  image: string;
  link: string;
  categoryId: string;
};

export const productSlideData: ProductSlideData[] = [
  {
    id: "slide01",
    title: "손잡이 봉투",
    desc: (
      <>
        가장 대중적인 봉투로 가정에서부터 시장, 배달용으로도 사용되며 모양에 따라 M자봉투와 링봉투로
        구분되는 일반적인 형태의 봉투입니다. 저렴한 가격과 견고한 내구성을 가지고 있습니다.
      </>
    ),
    image: "/productGallery(1).png",
    link: "/products?category=handle-bag",
    categoryId: "handle-bag",
  },
  {
    id: "slide02",
    title: "쓰레기 봉투",
    desc: (
      <>
        쓰레기 봉투로 많이 사용되고, 검정색과 반투명이 가장 대중적입니다. <br />
        다음과 같은 사이즈로 구분됩니다.
        <br />
        <br />
        <p>
          검정색 쓰레기 봉투
          <br />
          10L / 20L / 50L / 80L / 100L <br />
          반투명 재활용 봉투 <br />
          10L / 20L / 50L / 80L / 100L
        </p>
      </>
    ),
    image: "/productGallery(2).png",
    link: "/products?category=trash-bag",
    categoryId: "trash-bag",
  },
  {
    id: "slide03",
    title: "시장/배달용 봉투",
    desc: (
      <>
        브랜드 로고가 들어간 봉투 혹은 시장에서 주로 사용하는 봉투입니다. <br />
        기본적으로 배달봉투는 주문제작으로 업소마다 사용하는 크기에 맞춰 인쇄부터 가공까지
        도와드리고 있습니다.
      </>
    ),
    image: "/productGallery(3).png",
    link: "/products?category=food-packaging-bag",
    categoryId: "food-packaging-bag",
  },
  {
    id: "slide04",
    title: "식품 포장용 봉투",
    desc: (
      <>
        식품포장봉투는, HD재질로 위생봉투, 롤백 LLDPE재질은 LLDPE폴리백, 진공삼방봉투로 이루어져
        있습니다.
      </>
    ),
    image: "/productGallery(4).png",
    link: "/products?category=delivery-bag",
    categoryId: "delivery-bag",
  },
  {
    id: "slide05",
    title: "공업용 봉투",
    desc: (
      <>
        주문제작봉투로서 모든포장비닐이나 봉투 또는 비닐로 정전기 방지 비닐 등을 포함한 공업용
        봉투입니다.
      </>
    ),
    image: "/productGallery(5).png",
    link: "/products?category=industrial-bag",
    categoryId: "industrial-bag",
  },
  {
    id: "slide06",
    title: "기타부자재",
    desc: (
      <>
        포장 혹은 현장에서 필요로 하는 부자재입니다. 장갑 혹은 OPP 테이프, 보호필름 등 다양한
        부자재를 취급하고 있습니다.
      </>
    ),
    image: "/productGallery(6).png",
    link: "/products?category=others",
    categoryId: "others",
  },
];
