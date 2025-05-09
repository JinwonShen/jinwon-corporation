"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import styles from "../styles/Contact.module.scss";

type FormDataType = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  file: File | null; // 여기를 명확하게 지정
  link: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    file: null,
    link: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    setFormData((prev) => ({
      ...prev,
      file,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

    if (!serviceId || !templateId || !publicKey) {
      alert("환경 변수 누락!");
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, e.currentTarget as HTMLFormElement, publicKey)
      .then(() => {
        alert("메일 전송 완료!");
      })
      .catch((error) => {
        console.error("메일 전송 실패:", error);
      });
  };

  return (
    <div className={styles.contactContainer}>
      <h2>간편문의</h2>

      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.userInfo}>
          <label className={styles.userName}>
            <span>이름</span>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>

          <label className={styles.userNumber}>
            <span>연락처</span>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
          </label>

          <label className={styles.userEmail}>
            <span>이메일</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <label className={styles.title}>
          <span>문의 제목</span>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </label>

        <label className={styles.message}>
          <p>문의 내용</p>
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </label>

        <label className={styles.file}>
          <span>첨부파일</span>
          {/* <input type="file" name="file" /> */}
          <input
            type="file"
            id="fileUpload"
            className={styles.hiddenFileInput}
            onChange={handleFileChange}
          />
          <label htmlFor="fileUpload">파일 선택</label>
          <span className="fileName">선택된 파일 없음</span>
        </label>

        <button type="submit" className={styles.submitButton}>
          문의 보내기
        </button>
      </form>
    </div>
  );
}
