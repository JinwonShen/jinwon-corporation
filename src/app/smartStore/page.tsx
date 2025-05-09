"use client";

import styles from "./page.module.scss";

export default function SmartStore() {
  return (
    <section className={styles.storeContainer}>
      <div className={styles.textContainer}>
        <h2>
          죄송합니다 🙇🏻 <br className={styles.hidden} />
          현재 스마트 스토어 준비중입니다.
        </h2>
        <p>
          현재 온라인 판매를 위한 네이버 스마트 스토어는 사이트 준비중입니다.
          <span>주문제작은 기존과 동일</span>하게 진행 가능합니다.
        </p>
        <p>빠른 시일 내 온라인 제품 판매는 네이버 스마트 스토어로 찾아뵙도록 하겠습니다.</p>
      </div>
    </section>
  );
}
