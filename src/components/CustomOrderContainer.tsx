"use client";

import { imagePaths } from "@/data/customOrderData";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import styles from "../styles/CustomOrderContainer.module.scss";

export default function CustomOrderContainer() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <article className={styles.customOrderContainer}>
      <motion.div
        className={styles.textContainer}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <h2>
          맞춤<span>/</span>주문제작 전문
        </h2>
        <span>다양한 제작 사례를 확인해보세요.</span>
      </motion.div>
      <motion.div
        className={styles.imgContainer}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        {imagePaths.map((path, index) => (
          <div
            key={path}
            className={styles.imgBox}
            onClick={() => setSelectedImage(path)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setSelectedImage(path);
              }
            }}
          >
            <Image
              src={path}
              alt={`맞춤 제작 이미지 ${index + 1}`}
              width={300}
              height={200}
              className={styles.img}
            />
          </div>
        ))}
      </motion.div>

      <dialog
        className={`${styles.modal} ${selectedImage ? styles.active : ""}`}
        onClick={() => setSelectedImage(null)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setSelectedImage(null);
          }
        }}
        tabIndex={-1}
      >
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setSelectedImage(null);
            }
          }}
        >
          {selectedImage && <Image src={selectedImage} alt="큰 이미지" width={300} height={200} />}
          <button
            type="button"
            className={styles.closeButton}
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      </dialog>
    </article>
  );
}
