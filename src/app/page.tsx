import styles from "@/styles/page.module.scss";
import SwiperContainer from "@/components/SwiperContainer";
import CustomOrderContainer from "@/components/CustomOrderContainer";
import ProductGallery from "@/components/ProductGallery";
import Location from "@/components/Location";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <SwiperContainer />
      <main className={styles.main}>
        <CustomOrderContainer />
        <ProductGallery />
        <Location />
        <Contact />
      </main>
    </div>
  );
}
