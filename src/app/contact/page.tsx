"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { uploadFile } from "../lib/uploadFile";

import Image from "next/image";
import styles from "./page.module.scss";

export default function ContactPage() {
  const [fileName, setFileName] = useState("선택된 파일 없음");
  const [uploadedUrl, setUploadedUrl] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setFileName(file.name);

    try {
      const url = await uploadFile(file);
      setUploadedUrl(url);
      console.log("업로드 성공 ! 파일 url: ", url);
      alert("파일 업로드 성공!");
    } catch (error) {
      console.error("업로드 실패:", error);
      alert("업로드에 실패했습니다.");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    const form = e.currentTarget as HTMLFormElement;

    const templateParams = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      address: (form.elements.namedItem("address") as HTMLInputElement).value,
      address_detail: (form.elements.namedItem("address_detail") as HTMLInputElement).value,
      product_type: (form.elements.namedItem("product_type") as HTMLSelectElement).value,
      material: (form.elements.namedItem("material") as HTMLSelectElement).value,
      sealing: (form.elements.namedItem("sealing") as HTMLSelectElement).value,
      size: (form.elements.namedItem("size") as HTMLInputElement).value,
      quantity: (form.elements.namedItem("quantity") as HTMLInputElement).value,
      title: (form.elements.namedItem("title") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      uploadedUrl: uploadedUrl,
      time: new Date().toLocaleString(),
    };

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_DETAIL_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
      );

      console.log("이메일 전송 성공:", result.text);
      alert("문의가 정상적으로 접수되었습니다.");
      form.reset();
      setFileName("선택된 파일 없음");
      setUploadedUrl("");
    } catch (error) {
      console.error("이메일 전송 실패:", error);
      alert("문의 접수에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <section className={styles.contactContainer}>
      <div className={styles.titleContainer}>
        <h1>견적 상세문의</h1>
        <div className={styles.imgBox}>
          {/* <img src="/contact-title-image.jpeg" alt="진원상사 소개 이미지" /> */}
          <Image
            src={"/contact-title-image.jpeg"}
            alt="진원상사 견적문의 타이틀 이미지"
            width={1080}
            height={300}
            priority
          />
        </div>
      </div>

      <div className={styles.contactInfo}>
        <div className={styles.contactMemo}>
          {/* 
          이 곳에 문의 상세 설명이 들어갑니다. 
          예를 들면 비닐 종류별 이미지를 통해
          사이즈 및 규격을 어떻게 문의해야 하는지 등..
          */}
          <p>
            M자 봉투, 링가공, 택배봉투, 하단 M자 봉투, 일반가공, 식품용, 공업용 등 문의시 사용
            목적을 알려주시면 감사하겠습니다.
          </p>
          <p>
            견적문의 하단 첨부파일을 통해 봉투 시안이나, 샘플을 같이 보내주시면 수월하게 제작이
            가능합니다 :)
          </p>
        </div>

        <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
          {/* 기본 정보 */}
          <fieldset className={styles.basicInfo}>
            <legend>기본 정보</legend>
            <label>
              <span>
                이름 / 상호 <span className={styles.dot}>{/* dot */}</span>
              </span>
              <input
                type="text"
                name="name"
                placeholder="이름 혹은 상호를 입력해주세요."
                required
              />
            </label>
            <label>
              <span>
                연락처 <span className={styles.dot}>{/* dot */}</span>
              </span>
              <input type="tel" name="phone" placeholder="010-1234-5678" required />
            </label>
            <label>
              <span>이메일</span>
              <input type="email" name="email" placeholder="ex) acb1234@gmail.com" />
            </label>
            <label>
              <span>
                주소 <span className={styles.dot}>{/* dot */}</span>
              </span>
              <input type="text" name="address" placeholder="주소를 입력해주세요." required />
            </label>
            <label>
              <span>상세주소</span>
              <input type="text" name="address_detail" placeholder="상세주소를 입력해주세요." />
            </label>
          </fieldset>

          {/* 제품 정보 */}
          <fieldset className={styles.productInfo}>
            <legend>제품 정보</legend>
            <label>
              <span>
                제품 종류 <span className={styles.dot}>{/* dot */}</span>
              </span>
              <select name="product_type" required>
                <option value="">선택하세요</option>
                <option value="봉투">일반봉투</option>
                <option value="쓰레기봉투">쓰레기봉투</option>
                <option value="식품용">식품 포장용 봉투</option>
                <option value="공업용">공업용 봉투</option>
                <option value="기타">기타</option>
                {/* 등등 */}
              </select>
            </label>
            <label>
              <span>재질</span>
              <select name="material">
                <option value="">선택하세요</option>
                <option value="LDPE">LDPE</option>
                <option value="HDPE">HDPE</option>
              </select>
            </label>
            <label>
              <span>씰링</span>
              <select name="sealing">
                <option value="">선택하세요</option>
                <option value="엣지씰">엣지씰</option>
                <option value="하단씰">하단씰</option>
              </select>
            </label>
            <label>
              <span>규격</span>
              <input
                type="text"
                name="size"
                placeholder="ex) 25mic x 30cm x 70cm 두께 x 폭 x 세로"
              />
            </label>
            <label>
              <span>
                수량 <span className={styles.dot}>{/* dot */}</span>
              </span>
              <input type="text" name="quantity" placeholder="ex) 5000장" required />
            </label>
            <label className={styles.file}>
              <span>첨부파일</span>
              <input type="hidden" name="uploadedUrl" value={uploadedUrl} />
              <input
                type="file"
                id="fileUpload"
                // name="file"
                className={styles.hiddenFileInput}
                onChange={handleFileChange}
              />
              <label htmlFor="fileUpload">파일 선택</label>
              <span className="fileName">{fileName}</span>
            </label>
          </fieldset>

          {/* 문의 내용 */}
          <fieldset className={styles.contactContent}>
            <legend>문의 내용</legend>
            <div className={styles.contact}>
              <label className={styles.title}>
                <span>문의 제목</span>
                <input type="text" name="title" placeholder="ex) 배달 봉투 맞춤 문의" />
              </label>
              <label className={styles.textarea}>
                <span>문의 내용</span>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="사용 목적이나 용도를 간단한 문의 내용으로 보내주시면 감사하겠습니다 :) 첨부파일로 비닐 이미지 샘플을 보내주시면 조금 더 쉽게 문의가 가능합니다."
                >
                  {/* 문의내용 입력 */}
                </textarea>
              </label>
            </div>

            <div className={styles.agree}>
              {/* 개인정보 동의 */}
              <div className={styles.agreementText}>
                <p>
                  1. 수집 항목
                  <br />
                  이름 / 상호, 주소, 상세주소, 연락처, 이메일, 제품 관련 문의사항 및 첨부파일
                </p>
                <p>
                  2. 수집 목적
                  <br />
                  문의 응답, 견적 제공, 주문 상담
                </p>
                <p>
                  3. 보유 및 이용 기간
                  <br />
                  수집일로부터 1년간 보관 후 파기
                </p>
                <p>
                  4. 동의 거부 시 불이익
                  <br />
                  동의하지 않을 경우 문의 서비스 이용이 제한될 수 있습니다.
                </p>
              </div>
              <label>
                <input type="checkbox" name="checkbox" value="동의" required />
                <span>개인정보 수집 및 이용에 동의합니다.</span>
              </label>
            </div>
            <button type="submit" className={styles.button}>
              문의 보내기
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
}
