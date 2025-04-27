import styles from "@/styles/page.module.scss";
import SwiperContainer from "@/components/SwiperContainer";
import CustomOrderContainer from "@/components/CustomOrderContainer";
import ProductGallery from "@/components/ProductGallery";
import Location from "@/components/Location";
import Contact from "@/components/Contact";

import Script from "next/script";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <SwiperContainer />
      <Script
        strategy="beforeInteractive"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false`}
      />
      <main className={styles.main}>
        <CustomOrderContainer />
        <ProductGallery />
        <div className={styles.contact}>
          <Location />
          <Contact />
        </div>
      </main>
    </div>
  );
}
