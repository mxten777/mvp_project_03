

import React, { useState } from "react";
import { FaUser, FaBuilding, FaEnvelope, FaCommentDots } from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // 실제 문의 전송 로직은 추후 구현
  };

  return (
  <section id="contact" className="py-20 bg-gradient-to-br from-accent/10 via-white to-primary/10 animate-fadein">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-6">문의/상담</h2>
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-accent p-4 sm:p-8 space-y-6 border-2 border-accent/30 hover:scale-105 transition-all duration-300 w-full relative animate-fadein-card">
        <span className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-btn animate-bounce">상담</span>
        <div className="flex items-center gap-2">
          <FaUser className="text-primary text-lg drop-shadow" />
          <label className="block text-sm font-semibold text-gray-700 mb-2">이름</label>
        </div>
        <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="이름을 입력하세요" />
        <div className="flex items-center gap-2">
          <FaBuilding className="text-secondary text-lg drop-shadow" />
          <label className="block text-sm font-semibold text-gray-700 mb-2">회사명</label>
        </div>
        <input type="text" name="company" value={form.company} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="회사명을 입력하세요" />
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-accent text-lg drop-shadow" />
          <label className="block text-sm font-semibold text-gray-700 mb-2">이메일</label>
        </div>
        <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="이메일을 입력하세요" />
        <div className="flex items-center gap-2">
          <FaCommentDots className="text-success text-lg drop-shadow" />
          <label className="block text-sm font-semibold text-gray-700 mb-2">문의 내용</label>
        </div>
        <textarea name="message" value={form.message} onChange={handleChange} rows={4} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="문의 내용을 입력하세요" />
  <button type="submit" className="w-full py-3 bg-accent text-white font-bold rounded-full shadow-btn hover:bg-success transition-all duration-200 animate-bounce hover:animate-none">문의하기</button>
      </form>
      {submitted && (
        <div className="mt-8 bg-gradient-to-br from-primary/10 via-white to-accent/10 text-accent rounded-2xl p-8 text-center font-semibold shadow-accent">
          문의가 정상적으로 접수되었습니다.<br />빠른 시일 내에 연락드리겠습니다.
        </div>
      )}
      <div className="mt-8 text-center text-gray-500 text-sm">
        대표번호: <span className="font-semibold text-primary">02-1234-5678</span> | 이메일: <span className="font-semibold text-primary">info@corp.com</span>
      </div>
    </div>
  </section>
  );
}
