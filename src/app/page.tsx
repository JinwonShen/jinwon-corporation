import Contact from "@/components/Contact";
import CustomOrderContainer from "@/components/CustomOrderContainer";
import HeroSection from "@/components/HeroSection";
import Location from "@/components/Location";
import ProductCategories from "@/components/ProductCategories";
import ProductMaterials from "@/components/ProductMaterials";
import styles from "@/styles/page.module.scss";

import Script from "next/script";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <HeroSection />
      <Script
        strategy="beforeInteractive"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false`}
      />
      <main className={styles.main}>
        <CustomOrderContainer />
        <ProductMaterials />
        <ProductCategories />
        <div className={styles.contact}>
          <Location />
          <Contact />
        </div>
      </main>
    </div>
  );
}
