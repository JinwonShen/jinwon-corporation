import styles from "./page.module.scss";

export default function ContactPage() {
  return (
    <section className={styles.contactContainer}>
      <div className={styles.titleContainer}>
        <h1>견적 상세문의</h1>
        <div className={styles.imgBox}>
          <img src="/about-title-image.png" alt="진원상사 소개 이미지" />
        </div>
      </div>

      <div className={styles.contactInfo}>
        <div>
          {/* 
          이 곳에 문의 상세 설명이 들어갑니다. 
          예를 들면 비닐 종류별 이미지를 통해
          사이즈 및 규격을 어떻게 문의해야 하는지 등..
          */}
        </div>

        <form className={styles.form}>
          {/* 기본 정보 */}
          <fieldset className={styles.section}>
            <legend>기본 정보</legend>
            <label>
              이름 / 상호
              <input type="text" name="name" required />
            </label>
            <label>
              연락처
              <input type="tel" name="phone" required />
            </label>
            <label>
              이메일
              <input type="email" name="email" required />
            </label>
            <label>
              주소
              <input type="text" name="address" required />
            </label>
            <label>
              상세주소
              <input type="text" name="addressDetail" />
            </label>
          </fieldset>

          {/* 제품 정보 */}
          <fieldset className={styles.section}>
            <legend>제품 정보</legend>
            <label>
              제품 종류
              <select name="productType" required>
                <option value="">선택하세요</option>
                <option value="봉투">일반봉투</option>
                <option value="쓰레기봉투">쓰레기봉투</option>
                <option value="식품용">식품 포장용 봉투</option>
                {/* 등등 */}
              </select>
            </label>
            <label>
              재질
              <select name="material" required>
                <option value="">선택하세요</option>
                <option value="LDPE">LDPE</option>
                <option value="HDPE">HDPE</option>
              </select>
            </label>
            <label>
              씰링
              <select name="sealing" required>
                <option value="">선택하세요</option>
                <option value="엣지씰">엣지씰</option>
                <option value="하단씰">하단씰</option>
              </select>
            </label>
            <label>
              규격
              <input type="text" name="size" placeholder="예: 30cm x 20cm x 4cm" />
            </label>
            <label>
              수량
              <input type="number" name="quantity" placeholder="예: 1000" />
            </label>
            <label>
              첨부파일
              <input type="file" name="file" />
            </label>
          </fieldset>

          {/* 문의 내용 */}
          <fieldset className={styles.section}>
            <legend>문의 내용</legend>
            <label>
              문의 제목
              <input type="text" name="subject" />
            </label>
            <label>
              문의 내용
              <textarea name="message" rows={6}>
                {/* 문의내용 입력 */}
              </textarea>
            </label>
          </fieldset>

          {/* 개인정보 동의 */}
          <div className={styles.agree}>
            <label>
              <input type="checkbox" required />
              개인정보 수집 및 이용에 동의합니다.
            </label>
          </div>

          <button type="submit">문의 보내기</button>
        </form>
      </div>
    </section>
  );
}
