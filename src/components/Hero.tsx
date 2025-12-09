"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, CheckCircle2, TrendingUp } from "lucide-react";

export default function Hero() {
  const stats = [
    { value: "1,200+", label: "거래 고객사" },
    { value: "15년+", label: "업계 경력" },
    { value: "98%", label: "고객 만족도" },
  ];

  return (
    <section id="hero" className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white pt-32 pb-24 overflow-hidden">
      {/* 애니메이션 배경 그리드 */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]"></div>
      
      {/* 그라디언트 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>

      {/* 플로팅 블러 원 - CSS 애니메이션으로 최적화 */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 왼쪽 컨텐츠 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* 배지 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2.5 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-semibold text-white">업계 1위 B2B 냉매 공급업체</span>
            </motion.div>

            {/* 메인 타이틀 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-[1.1]"
            >
              <span className="block text-white mb-2">프리미엄 냉매</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                전문 공급의 시작
              </span>
            </motion.h1>

            {/* 서브 타이틀 */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-blue-100 mb-8 leading-relaxed max-w-xl"
            >
              고품질 냉매와 HVAC 부자재를 합리적인 가격에 신속하게 공급합니다.
              <br />
              <span className="font-semibold text-white">한국코프론</span>과 함께 성공적인 비즈니스를 만들어가세요.
            </motion.p>

            {/* 특징 리스트 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
            >
              {[
                "국제 인증 고품질 제품",
                "전국 당일/익일 배송",
                "24시간 전문 상담",
                "대량 구매 특별 할인"
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA 버튼 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-blue-500/50 transition-all"
              >
                <span>무료 상담 신청</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="tel:02-1234-5678"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>02-1234-5678</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* 오른쪽 통계 카드 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* 메인 카드 */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl"
              >
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
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + idx * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-blue-200">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="border-t border-white/20 pt-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-blue-200">월간 성장률</span>
                    <span className="text-green-400 font-bold text-sm">+12.5%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
                    />
                  </div>
                </div>
              </motion.div>

              {/* 플로팅 뱃지들 */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-2xl shadow-xl font-bold text-sm"
              >
                ⭐ 고객 평점 4.9/5.0
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-br from-green-400 to-emerald-500 text-white px-5 py-2.5 rounded-xl shadow-xl font-bold text-xs"
              >
                ✓ ISO 9001 인증
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* 하단 통계 (모바일) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="lg:hidden grid grid-cols-3 gap-4 mt-12"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-blue-200">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 하단 웨이브 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 fill-current text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
