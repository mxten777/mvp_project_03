"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Building, Mail, MessageSquare, Send, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import ScrollReveal from "./common/ScrollReveal";

const contactInfo = [
  { icon: Phone, label: "전화 문의", value: "02-1234-5678", sub: "평일 09:00 - 18:00" },
  { icon: Mail, label: "이메일", value: "info@koreacoflon.com", sub: "24시간 접수 가능" },
  { icon: MapPin, label: "주소", value: "경기도 용인시 기흥구", sub: "지곡동 381-6" },
  { icon: Clock, label: "영업시간", value: "월-금 09:00-18:00", sub: "토요일 09:00-13:00" },
];

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
  };

  return (
    <section id="contact" className="py-28 bg-white relative overflow-hidden scroll-mt-24">
      <div className="floating-orb top-0 -right-40 w-[500px] h-[500px] bg-blue-100/20" />
      <div className="floating-orb bottom-0 -left-40 w-[400px] h-[400px] bg-indigo-100/15" />

      <div className="container-premium relative z-10">
        <ScrollReveal className="text-center mb-16">
          <div className="section-badge bg-blue-50 text-blue-700 mb-6">
            <MessageSquare className="w-4 h-4" />
            문의/상담
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            무엇이든
            <span className="gradient-text block mt-1">문의하세요</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            냉매 및 부자재 공급에 대한 문의사항을 남겨주세요. 빠르게 답변드립니다.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <ScrollReveal>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">연락처 정보</h3>
            </ScrollReveal>

            {contactInfo.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 0.1} direction="left">
                  <div className="card-premium p-5 flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium mb-0.5">{item.label}</p>
                      <p className="font-bold text-gray-900">{item.value}</p>
                      <p className="text-sm text-gray-400">{item.sub}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}

            <ScrollReveal delay={0.5} direction="left">
              <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-6 text-white mt-8">
                <h4 className="font-bold mb-2 text-lg">빠른 상담이 필요하세요?</h4>
                <p className="text-blue-200/80 text-sm mb-4">전화로 즉시 상담받으실 수 있습니다.</p>
                <a
                  href="tel:02-1234-5678"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  02-1234-5678
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="right">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card-premium p-12 text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    문의가 접수되었습니다!
                  </h3>
                  <p className="text-gray-500 mb-6">빠른 시일 내에 연락드리겠습니다.</p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", company: "", email: "", message: "" });
                    }}
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    새 문의 작성하기
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="card-premium p-8 lg:p-10 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2.5">
                        <User className="w-4 h-4 text-blue-500" />
                        이름
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-gray-50/50 hover:bg-white"
                        placeholder="이름을 입력하세요"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2.5">
                        <Building className="w-4 h-4 text-blue-500" />
                        회사명
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-gray-50/50 hover:bg-white"
                        placeholder="회사명을 입력하세요"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2.5">
                      <Mail className="w-4 h-4 text-emerald-500" />
                      이메일
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-gray-50/50 hover:bg-white"
                      placeholder="이메일을 입력하세요"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2.5">
                      <MessageSquare className="w-4 h-4 text-violet-500" />
                      문의 내용
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-gray-50/50 hover:bg-white resize-none"
                      placeholder="문의 내용을 자세히 입력해주세요"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2 py-4 text-lg"
                  >
                    <Send className="w-5 h-5" />
                    문의하기
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
