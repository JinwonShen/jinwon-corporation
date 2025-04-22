import styles from "@/styles/page.module.scss";
import SwiperContainer from "@/components/SwiperContainer";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <SwiperContainer />
      <main className={styles.main}>
        <article>
          <h2>맞춤 주문제작 전문</h2>
          <span>맞춤/주문제작 전문</span>
        </article>
      </main>
    </div>
  );
}
