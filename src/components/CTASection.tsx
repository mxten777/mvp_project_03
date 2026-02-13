"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageSquare, ArrowRight, Zap, Clock, HeadphonesIcon, Shield } from "lucide-react";
import ScrollReveal from "./common/ScrollReveal";

const highlights = [
  { icon: Clock, value: "24시간", label: "빠른 응대" },
  { icon: HeadphonesIcon, value: "무료", label: "기술 상담" },
  { icon: Shield, value: "전문가", label: "맞춤 솔루션" },
];

export default function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950" />
      <div className="absolute inset-0 bg-grid-white opacity-40" />
      <div className="absolute inset-0 bg-noise opacity-[0.02]" />

      {/* Floating Orbs */}
      <div className="floating-orb top-10 left-10 w-[350px] h-[350px] bg-blue-500/10 animate-float" />
      <div className="floating-orb bottom-10 right-10 w-[400px] h-[400px] bg-indigo-500/10 animate-float [animation-delay:4s]" />
      <div className="floating-orb top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 animate-float [animation-delay:2s]" />

      <div className="container-premium relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Badge */}
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-white/[0.08] backdrop-blur-xl text-white px-6 py-3 rounded-full text-sm font-semibold border border-white/[0.15]">
              <Zap className="w-4 h-4 text-amber-400" />
              지금 바로 시작하세요
            </div>
          </ScrollReveal>

          {/* Heading */}
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              상담 또는 온라인 주문을
              <span className="block mt-2 gradient-text-warm">
                지금 시작하세요!
              </span>
            </h2>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal delay={0.2}>
            <p className="text-lg md:text-xl text-blue-200/70 max-w-2xl mx-auto leading-relaxed">
              신속한 견적, 맞춤 상담, 빠른 납기까지
              <br />
              <span className="font-semibold text-white">B2B 고객만을 위한 전문 서비스</span>를 제공합니다.
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/order"
                className="group bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-[0_8px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.25)] transition-all duration-300 inline-flex items-center justify-center gap-3 hover:bg-blue-50 active:scale-[0.98]"
              >
                <MessageSquare className="w-5 h-5" />
                온라인 주문하기
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#contact"
                className="group border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center gap-3 active:scale-[0.98]"
              >
                <Phone className="w-5 h-5" />
                상담 문의하기
              </Link>
            </div>
          </ScrollReveal>

          {/* Highlights */}
          <ScrollReveal delay={0.4}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="text-center card-dark p-6 cursor-default"
                  >
                    <Icon className="w-6 h-6 text-blue-300 mx-auto mb-3" />
                    <div className="text-xl font-bold text-white mb-1">{item.value}</div>
                    <div className="text-blue-200/60 text-sm">{item.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
