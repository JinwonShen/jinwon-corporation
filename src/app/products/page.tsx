"use client";

import { categories, categoryDescriptions } from "@/data/productCategories";
import { productData } from "@/data/products";
import { useState } from "react";
import styles from "./page.module.scss";

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
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedCategory(category);
                }
              }}
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
