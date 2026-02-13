"use client";

import { Award, Users, Target, Shield, ArrowUpRight } from "lucide-react";
import ScrollReveal from "./common/ScrollReveal";
import AnimatedCounter from "./common/AnimatedCounter";

const cards = [
  {
    icon: Users,
    badge: "신뢰",
    title: "연혁",
    items: ["2010년 설립", "15년 업력", "전국 200여 협력사"],
    color: "from-blue-500 to-blue-600",
    iconBg: "from-blue-500 to-blue-600",
  },
  {
    icon: Target,
    badge: "혁신",
    title: "비전",
    items: ["B2B 냉매 시장의", "신뢰와 혁신 리더", "지속가능한 성장", "고객 중심 서비스"],
    color: "from-indigo-500 to-indigo-600",
    iconBg: "from-indigo-500 to-violet-600",
  },
  {
    icon: Shield,
    badge: "인증",
    title: "인증/대표자",
    items: ["ISO9001 인증", "대표 송하선", "경기 용인시 기흥구", "지곡동 381-6"],
    color: "from-emerald-500 to-emerald-600",
    iconBg: "from-emerald-500 to-teal-600",
  },
];

const stats = [
  { value: 15, suffix: "년+", label: "업계 경력", color: "text-amber-400" },
  { value: 200, suffix: "+", label: "협력 파트너", color: "text-emerald-400" },
  { value: 98, suffix: "%", label: "고객 만족도", color: "text-blue-300" },
];

export default function CompanyIntro() {
  return (
    <section id="about" className="py-28 bg-white relative overflow-hidden scroll-mt-24">
      {/* Decorative backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white to-indigo-50/40" />
      <div className="floating-orb top-0 right-0 w-[500px] h-[500px] bg-blue-200/20" />
      <div className="floating-orb bottom-0 left-0 w-[500px] h-[500px] bg-indigo-200/20" />

      <div className="container-premium relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20">
          <div className="section-badge bg-blue-50 text-blue-700 mb-6">
            <Award className="w-4 h-4" />
            회사 소개
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            신뢰와 전문성으로
            <span className="gradient-text block mt-1">성장하는 기업</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            한국코프론은 에어컨 가스 및 냉매 부자재 B2B 시장에서
            <span className="font-bold text-blue-600"> 신뢰와 전문성</span>을 바탕으로
            고품질 제품, 신속한 공급, 전문 상담을 제공합니다.
          </p>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 0.15}>
                <div className="card-premium p-8 lg:p-10 text-center group h-full">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${card.iconBg} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Badge */}
                  <div className={`inline-block bg-gradient-to-r ${card.color} text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4`}>
                    {card.badge}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-5">{card.title}</h3>

                  {/* Items */}
                  <div className="space-y-2.5">
                    {card.items.map((item, itemIdx) => (
                      <p key={itemIdx} className="text-gray-500 flex items-center justify-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${card.color} flex-shrink-0`} />
                        {item}
                      </p>
                    ))}
                  </div>

                  {/* Hover Arrow */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-5 h-5 text-blue-500 mx-auto" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Banner with Animated Counters */}
        <ScrollReveal>
          <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-10 md:p-14 text-white overflow-hidden">
            <div className="absolute inset-0 bg-grid-white opacity-50" />
            <div className="floating-orb top-0 right-0 w-64 h-64 bg-blue-400/10" />
            <div className="floating-orb bottom-0 left-0 w-48 h-48 bg-indigo-400/10" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
                왜 한국코프론을 선택해야 할까요?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className={`text-5xl md:text-6xl font-black ${stat.color} mb-2`}>
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={2} />
                    </div>
                    <div className="text-blue-200/80 font-medium tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
