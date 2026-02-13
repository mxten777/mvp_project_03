"use client";

import React from "react";
import { Package, Wrench, Fuel, Star, ArrowRight, Sparkles } from "lucide-react";
import ScrollReveal from "./common/ScrollReveal";

const products = [
  {
    name: "에어컨 냉매",
    subtitle: "R-410A, R-32 등",
    desc: "친환경 고효율 냉매, 다양한 규격 보유. 국제 인증을 받은 프리미엄 냉매를 안정적으로 공급합니다.",
    icon: Package,
    badge: "BEST",
    features: ["친환경 인증", "고효율 성능", "다양한 규격", "안정적 재고"],
    gradient: "from-blue-500 to-cyan-500",
    bgGlow: "bg-blue-500/5",
  },
  {
    name: "냉매 관련 부자재",
    subtitle: "동관, 밸브, 필터, 오일",
    desc: "HVAC 시스템에 필요한 모든 부자재를 한 곳에서 편리하게 구매할 수 있습니다.",
    icon: Wrench,
    badge: "인기",
    features: ["품질 보증", "빠른 배송", "기술 지원", "맞춤 견적"],
    gradient: "from-emerald-500 to-teal-500",
    bgGlow: "bg-emerald-500/5",
  },
  {
    name: "특수 가스",
    subtitle: "산업용 가스 전문",
    desc: "산업 현장에 최적화된 특수 가스를 안전하고 신속하게 공급합니다.",
    icon: Fuel,
    badge: "전문",
    features: ["안전 인증", "맞춤 공급", "기술 컨설팅", "정기 배송"],
    gradient: "from-violet-500 to-purple-500",
    bgGlow: "bg-violet-500/5",
  },
];

export default function ProductSection() {
  return (
    <section
      id="products"
      className="py-28 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden scroll-mt-24"
    >
      {/* Subtle bg */}
      <div className="floating-orb top-20 -right-40 w-[600px] h-[600px] bg-blue-100/30" />
      <div className="floating-orb bottom-20 -left-40 w-[500px] h-[500px] bg-indigo-100/20" />

      <div className="container-premium relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-20">
          <div className="section-badge bg-blue-50 text-blue-700 mb-6">
            <Star className="w-4 h-4" />
            주요 제품/서비스
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            최고 품질의
            <span className="gradient-text block mt-1">냉매 솔루션</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            다양한 냉매와 부자재를 <span className="font-bold text-blue-600">신속·안전·정확</span>하게 공급합니다.
            <br />
            모든 제품은 <span className="font-bold text-emerald-600">엄격한 품질 관리와 인증</span>을 거쳐 출고됩니다.
          </p>
        </ScrollReveal>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {products.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 0.15}>
                <div className={`card-premium p-8 lg:p-10 group h-full relative overflow-hidden`}>
                  {/* Background glow on hover */}
                  <div className={`absolute inset-0 ${item.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    {/* Top row */}
                    <div className="flex justify-between items-start mb-8">
                      <div className={`bg-gradient-to-r ${item.gradient} text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg`}>
                        {item.badge}
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium mb-4">{item.subtitle}</p>

                    {/* Description */}
                    <p className="text-gray-500 mb-8 leading-relaxed">{item.desc}</p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {item.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-3 text-sm text-gray-600">
                          <div className={`w-2 h-2 bg-gradient-to-r ${item.gradient} rounded-full flex-shrink-0`} />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <button className={`w-full bg-gradient-to-r ${item.gradient} text-white py-3.5 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98]`}>
                      제품 문의하기
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="mt-4 text-xs text-gray-400 text-center">
                      카탈로그 다운로드 · 맞춤 견적 가능
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <ScrollReveal className="mt-20">
          <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-10 md:p-14 text-white overflow-hidden">
            <div className="absolute inset-0 bg-grid-white opacity-50" />
            <div className="floating-orb -top-10 -right-10 w-48 h-48 bg-blue-400/15" />

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/20 mb-6">
                <Sparkles className="w-4 h-4 text-amber-400" />
                전문 컨설팅
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                전문 컨설팅이 필요하신가요?
              </h3>
              <p className="text-blue-200/80 mb-8 max-w-xl mx-auto">
                냉매 선택부터 설치까지 전문가가 도와드립니다. 무료 기술 상담을 신청하세요.
              </p>
              <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-blue-50 active:scale-[0.98]">
                전문가 상담 신청
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
