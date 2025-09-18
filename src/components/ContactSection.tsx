
'use client';
import React, { useState } from "react";

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
    <section className="py-16 bg-white" id="contact">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center mb-4">문의/상담</h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          궁금한 점이나 B2B 상담이 필요하시면 언제든 문의해 주세요.
        </p>
        {submitted ? (
          <div className="bg-blue-50 text-blue-700 rounded-xl p-8 text-center font-semibold shadow">
            문의가 정상적으로 접수되었습니다.<br />빠른 시일 내에 연락드리겠습니다.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 bg-gray-50 rounded-xl p-8 shadow">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">이름</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">회사명</label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                required
                className="w-full px-3 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">문의 내용</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full px-3 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-full font-bold shadow hover:bg-blue-700 text-lg transition-all duration-200"
            >
              문의 접수
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
