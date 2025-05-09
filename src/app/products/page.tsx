"use client";

import { categories, categoryDescriptions, categoryMap } from "@/data/productCategories";
import { productData } from "@/data/products";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  useEffect(() => {
    if (categorySlug && categoryMap[categorySlug]) {
      setSelectedCategory(categoryMap[categorySlug]);
    }
  }, [categorySlug]);

  const products = productData[selectedCategory] || [];

  return (
    <section className={styles.productContainer}>
      <div className={styles.titleContainer}>
        <h1>제품소개</h1>
        <div className={styles.imgBox}>
          <img src="/product-title-image.png" alt="product Image" />
        </div>
      </div>

      <nav>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <button
                type="button"
                className={selectedCategory === category ? styles.active : ""}
                onClick={() => setSelectedCategory(category)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedCategory(category);
                  }
                }}
                tabIndex={0}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.categoryInfo}>
        <div className={styles.categoryDescription}>{categoryDescriptions[selectedCategory]}</div>
      </div>

      <article className={styles.productList}>
        <ul>
          {products.map((product) => (
            <li key={product.id} className={styles.productCard}>
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <div>{product.description}</div>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
