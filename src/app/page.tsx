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
        <div className={styles.contact}>
          <Location />
          <Contact />
        </div>
      </main>
    </div>
  );
}

/**
 * 
 * #mainVisual .pager {
  position: absolute;
  left: 50%;
  bottom: 70px;
  z-index: 101;
  transform: translateX(-50%);
  width: max-content;
}
#mainVisual .pager span {
  opacity: 0.3;
  position: relative;
  width: 29px;
  height: 29px;
  margin: 0 5px;
  background-color: transparent;
  transition: all 0.3s;
}
#mainVisual .pager span.on {
  opacity: 1;
}
#mainVisual .pager span:before {
  opacity: 0;
  display: block;
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 45px;
  height: 45px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transition: all 0.3s;
}
#mainVisual .pager span.on:before {
  opacity: 1;
  width: 24px;
  height: 24px;
}
#mainVisual .pager span:after {
  display: block;
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #fff;
}
 */
