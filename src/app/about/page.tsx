import styles from "./page.module.scss";

export default function AboutPage() {
  return (
    <section className={styles.aboutContainer}>
      <article className={styles.greeting}>
        <h2>인사말</h2>
        <p>진원상사는 고객의 신뢰와 품질을 바탕으로 비닐 가공 전문 제조업을 이어오고 있습니다.</p>
      </article>

      <article className={styles.overview}>
        <h2>회사개요</h2>
        <ul>
          <li>
            <strong>회사명:</strong> 진원상사
          </li>
          <li>
            <strong>설립연도:</strong> 20XX년
          </li>
          <li>
            <strong>사업분야:</strong> 비닐 가공 및 맞춤 제작
          </li>
          <li>
            <strong>주요제품:</strong> 식품용 비닐, 정전기 방지 비닐 외
          </li>
        </ul>
      </article>

      <article className={styles.vision}>
        <h2>비전 & 미션</h2>
        <p>
          진원상사는 {"'"}고객 신뢰를 바탕으로 지속 가능한 성장{"'"} 을 핵심 가치로 삼고 있습니다.
        </p>
        <p>비전: 대한민국을 대표하는 비닐 가공 전문 기업</p>
        <p>미션: 환경과 고객을 모두 만족시키는 제품 생산</p>
      </article>

      <article className={styles.certificates}>
        <h2>인증서</h2>
        <p>
          진원상사는 식품위생법에 따라 등록된 제조 시설을 보유하고 있으며, 관련 인증서를 보유하고
          있습니다.
        </p>
        <div className={styles.certImages}>
          <img src="/images/cert01.jpg" alt="식품제조 인증서" />
          <img src="/images/cert02.jpg" alt="사업자 등록증" />
        </div>
      </article>

      <article className={styles.partners}>
        <h2>파트너 & 거래처</h2>
        <ul>
          <li>도매시장 A</li>
          <li>식자재마트 B</li>
          <li>식품업체 C</li>
          <li>기타 B2B 업체 다수</li>
        </ul>
      </article>

      <article className={styles.location}>
        <h2>오시는 길</h2>
        <p>경기도 안산시 단원구 선부2동 1032-3, 1층 진원상사</p>
        {/* 카카오맵 컴포넌트 삽입 위치 */}
      </article>
    </section>
  );
}
