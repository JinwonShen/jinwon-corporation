import Contact from "@/components/Contact";
import CustomOrderContainer from "@/components/CustomOrderContainer";
import HeroSection from "@/components/HeroSection";
import Location from "@/components/Location";
import ProductCategories from "@/components/ProductCategories";
import ProductMaterials from "@/components/ProductMaterials";
import styles from "@/styles/page.module.scss";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <HeroSection />
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
