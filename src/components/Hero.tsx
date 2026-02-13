"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, CheckCircle2, TrendingUp, Shield, Truck } from "lucide-react";
import AnimatedCounter from "./common/AnimatedCounter";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as const } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const } },
};

const features = [
  { icon: Shield, text: "국제 인증 고품질 제품" },
  { icon: Truck, text: "전국 당일/익일 배송" },
  { icon: Phone, text: "24시간 전문 상담" },
  { icon: Sparkles, text: "대량 구매 특별 할인" },
];

const stats = [
  { value: 1200, suffix: "+", label: "거래 고객사" },
  { value: 15, suffix: "년+", label: "업계 경력" },
  { value: 98, suffix: "%", label: "고객 만족도" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white overflow-hidden"
    >
      {/* ── Background Layers ── */}
      <div className="absolute inset-0 bg-grid-white" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />

      {/* Floating Orbs */}
      <div className="floating-orb top-[10%] -left-32 w-[500px] h-[500px] bg-blue-500/20 animate-float" />
      <div className="floating-orb bottom-[10%] -right-32 w-[600px] h-[600px] bg-indigo-400/15 animate-float [animation-delay:3s]" />
      <div className="floating-orb top-[50%] left-[40%] w-[300px] h-[300px] bg-cyan-400/10 animate-float [animation-delay:5s]" />

      <div className="container-premium relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Left Content ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2.5 bg-white/[0.08] backdrop-blur-xl border border-white/[0.15] px-5 py-2.5 rounded-full mb-8">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                </span>
                <span className="text-sm font-semibold text-blue-100 tracking-wide">
                  업계 1위 B2B 냉매 공급업체
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-[1.05] tracking-tight"
            >
              <span className="block text-white mb-1">프리미엄 냉매</span>
              <span className="block gradient-text-light">전문 공급의 시작</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl text-blue-100/80 mb-10 leading-relaxed max-w-xl"
            >
              고품질 냉매와 HVAC 부자재를 합리적인 가격에 신속하게 공급합니다.
              <br />
              <span className="font-semibold text-white">한국코프론</span>과 함께 성공적인 비즈니스를 만들어가세요.
            </motion.p>

            {/* Features Grid */}
            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {features.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-white/[0.05] backdrop-blur-sm rounded-xl px-4 py-3 border border-white/[0.08]"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400/30 to-cyan-400/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-cyan-300" />
                    </div>
                    <span className="text-sm font-medium text-white/90">{item.text}</span>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-8 py-4 rounded-2xl font-bold text-lg shadow-[0_8px_30px_rgba(59,130,246,0.4)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.5)] transition-all duration-300 active:scale-[0.98]"
              >
                <span>무료 상담 신청</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:02-1234-5678"
                className="inline-flex items-center justify-center gap-3 bg-white/[0.08] backdrop-blur-xl border-2 border-white/20 hover:bg-white/[0.15] hover:border-white/30 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 active:scale-[0.98]"
              >
                <Phone className="w-5 h-5" />
                <span>02-1234-5678</span>
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: Stats Card ── */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="card-glass p-10 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200/80 tracking-wide">실시간 현황</div>
                    <div className="text-xl font-bold text-white">비즈니스 성과</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-8">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-4xl font-black text-white mb-1">
                        <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={2.5} />
                      </div>
                      <div className="text-xs text-blue-200/70 font-medium tracking-wide uppercase">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progress */}
                <div className="border-t border-white/10 pt-6 space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-blue-200/80">월간 성장률</span>
                      <span className="text-emerald-400 font-bold text-sm">+12.5%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "75%" }}
                        transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-blue-200/80">고객 재주문율</span>
                      <span className="text-blue-400 font-bold text-sm">92%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "92%" }}
                        transition={{ delay: 1.3, duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -top-5 -right-5 bg-gradient-to-r from-amber-400 to-orange-400 text-slate-900 px-5 py-2.5 rounded-2xl shadow-xl shadow-amber-400/30 font-bold text-sm"
              >
                ⭐ 고객 평점 4.9/5.0
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-emerald-400 to-green-500 text-white px-5 py-2.5 rounded-xl shadow-xl shadow-emerald-400/30 font-bold text-xs flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                ISO 9001 인증
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── Mobile Stats ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="lg:hidden grid grid-cols-3 gap-3 mt-14"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center card-dark p-5"
            >
              <div className="text-2xl sm:text-3xl font-black text-white mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-blue-200/70">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Bottom Gradient Fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
