"use client";

import React from "react";
import { ArrowRight, Phone, Sparkles, CheckCircle2, TrendingUp } from "lucide-react";

export default function Hero() {
  const stats = [
    { value: "1,200+", label: "거래 고객사" },
    { value: "15년+", label: "업계 경력" },
    { value: "98%", label: "고객 만족도" },
  ];

  return (
    <section id="hero" className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 text-white pt-32 pb-24 overflow-hidden">
      {/* subtle background grid */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>

      {/* decorative blur circles (static, low-motion) */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2.5 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-semibold text-white">업계 1위 B2B 냉매 공급업체</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-[1.1]">
              <span className="block text-white mb-2">프리미엄 냉매</span>
              <span className="block text-blue-200">전문 공급의 시작</span>
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
              고품질 냉매와 HVAC 부자재를 합리적인 가격에 신속하게 공급합니다.
              <br />
              <span className="font-semibold text-white">한국코프론</span>과 함께 성공적인 비즈니스를 만들어가세요.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "국제 인증 고품질 제품",
                "전국 당일/익일 배송",
                "24시간 전문 상담",
                "대량 구매 특별 할인"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-colors">
                <span>무료 상담 신청</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <a href="tel:02-1234-5678" className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-colors">
                <Phone className="w-5 h-5" />
                <span>02-1234-5678</span>
              </a>
            </div>
          </div>

          {/* Right stats card */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200">실시간 현황</div>
                    <div className="font-bold text-white">비즈니스 성과</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-6">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-blue-200">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/20 pt-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-blue-200">월간 성장률</span>
                    <span className="text-green-400 font-bold text-sm">+12.5%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500" style={{width: '75%'}} />
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-yellow-400 text-white px-6 py-3 rounded-2xl shadow-xl font-bold text-sm">⭐ 고객 평점 4.9/5.0</div>
              <div className="absolute -bottom-4 -left-4 bg-green-400 text-white px-5 py-2.5 rounded-xl shadow-xl font-bold text-xs">✓ ISO 9001 인증</div>
            </div>
          </div>
        </div>

        {/* mobile stats */}
        <div className="lg:hidden grid grid-cols-3 gap-4 mt-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <div className="text-2xl sm:text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 fill-current text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
