"use client";

import React, { useState } from "react";
import { User, Building, Mail, MessageSquare, Send } from "lucide-react";

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
    <section id="contact" className="py-20 bg-gradient-to-br from-accent/10 via-white to-primary/10 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">문의/상담</h2>
          <p className="text-gray-600">냉매 및 부자재 공급에 대한 문의사항을 남겨주세요</p>
        </div>

        <form onSubmit={handleSubmit} className="card-premium p-8 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <User className="w-5 h-5 text-blue-600" />
              <label className="block text-sm font-semibold text-gray-700">이름</label>
            </div>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="이름을 입력하세요"
            />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Building className="w-5 h-5 text-blue-600" />
              <label className="block text-sm font-semibold text-gray-700">회사명</label>
            </div>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="회사명을 입력하세요"
            />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Mail className="w-5 h-5 text-green-600" />
              <label className="block text-sm font-semibold text-gray-700">이메일</label>
            </div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="이메일을 입력하세요"
            />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-5 h-5 text-orange-600" />
              <label className="block text-sm font-semibold text-gray-700">문의 내용</label>
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
              placeholder="문의 내용을 입력하세요"
            />
          </div>

          <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2 py-4">
            <Send className="w-5 h-5" />
            문의하기
          </button>
        </form>

        {submitted && (
          <div className="mt-8 card-premium p-6 text-center">
            <div className="text-green-600 text-lg font-semibold mb-2">문의가 정상적으로 접수되었습니다.</div>
            <div className="text-gray-600">빠른 시일 내에 연락드리겠습니다.</div>
          </div>
        )}

        <div className="mt-8 text-center text-gray-600">
          <p className="mb-2">직접 문의하시려면</p>
          <p>
            대표번호: <span className="font-semibold text-blue-600">02-1234-5678</span>
            {" | "}
            이메일: <span className="font-semibold text-blue-600">info@corp.com</span>
          </p>
        </div>
      </div>
    </section>
  );
}
