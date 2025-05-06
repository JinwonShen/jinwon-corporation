"use client";

import { productData } from "@/data/products";
import { useState } from "react";
import styles from "./page.module.scss";

const categories = [
  "손잡이 봉투",
  "쓰레기봉투",
  "시장/배달용 봉투",
  "식품 포장용 봉투",
  "공업용 봉투",
  "기타부자재",
];

const categoryDescriptions: Record<string, string> = {
  "손잡이 봉투":
    "모양에 따라 M자봉투와 링봉투로 구분되는 일반적인 형태의 봉투. 저렴한 가격과 견고한 내구성을 가지고 있습니다.",
  쓰레기봉투: "가정용, 산업용 등 다양한 크기와 강도를 갖춘 쓰레기봉투입니다.",
  "시장/배달용 봉투": "시장이나 배달에 특화된 고강도 비닐봉투입니다.",
  "식품 포장용 봉투":
    '식품 위생법에 적합한 재질로 안전하게 제작된 봉투로 "밴드씰링"(물, 분말, 김치 등 보다 완벽한 보호를 위해 제작된 견고하고 두꺼운 포장용 봉투)와 "오픈씰링"(과일, 야채 등 식품에 대해 투명하고 부드럽게 보호하기 위한 포장용 봉투)으로 구분됩니다.',
  "공업용 봉투": "전자제품, 피복, 의약품 등 산업 현장에서 사용하는 내구성 강한 비닐 제품입니다.",
  기타부자재: "봉투 외에도 관련 포장 부자재 제품군을 제공합니다.",
};

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);
  const products = productData[selectedCategory] || [];

  return (
    <section className={styles.productContainer}>
      <div className={styles.titleContainer}>
        <h1>제품소개</h1>
        <div className={styles.imgBox}>
          <img src="/about-title-image.png" alt="product Image" />
        </div>
      </div>

      <nav>
        <ul>
          {categories.map((category) => (
            <li
              key={category}
              className={selectedCategory === category ? styles.active : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.categoryInfo}>
        <p className={styles.categoryDescription}>{categoryDescriptions[selectedCategory]}</p>
      </div>

      <article className={styles.productList}>
        <ul>
          {products.map((product) => (
            <li key={product.id} className={styles.productCard}>
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
