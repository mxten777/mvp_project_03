"use client";

import { Package, DollarSign, Users, Star, TrendingUp } from "lucide-react";
import ScrollReveal from "./common/ScrollReveal";
import AnimatedCounter from "./common/AnimatedCounter";

const stats = [
  {
    label: "총 주문건수",
    value: 1245,
    unit: "건",
    icon: Package,
    gradient: "from-blue-500 to-indigo-500",
    bgLight: "bg-blue-50",
    textColor: "text-blue-600",
    growth: "+18%",
  },
  {
    label: "월간 거래액",
    value: 98,
    unit: "M원",
    icon: DollarSign,
    gradient: "from-emerald-500 to-teal-500",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-600",
    growth: "+12%",
  },
  {
    label: "파트너사 수",
    value: 27,
    unit: "개사",
    icon: Users,
    gradient: "from-violet-500 to-purple-500",
    bgLight: "bg-violet-50",
    textColor: "text-violet-600",
    growth: "+8%",
  },
  {
    label: "고객 만족도",
    value: 98,
    unit: "%",
    icon: Star,
    gradient: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50",
    textColor: "text-amber-600",
    growth: "+3%",
  },
];

export default function DashboardSection() {
  return (
    <section
      id="dashboard"
      className="py-28 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden scroll-mt-24"
    >
      <div className="floating-orb top-20 -right-40 w-[500px] h-[500px] bg-blue-100/20" />
      <div className="floating-orb bottom-10 -left-40 w-[400px] h-[400px] bg-indigo-100/15" />

      <div className="container-premium relative z-10">
        <ScrollReveal className="text-center mb-16">
          <div className="section-badge bg-blue-50 text-blue-700 mb-6">
            <TrendingUp className="w-4 h-4" />
            실적 현황
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            성장하는
            <span className="gradient-text block mt-1">비즈니스 현황</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            한국코프론의 주요 성과 지표를 확인하세요
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="card-premium p-8 text-center relative overflow-hidden group h-full">
                  {/* Background circle */}
                  <div className={`absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-[0.06] rounded-full group-hover:opacity-[0.12] transition-opacity duration-500`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${item.bgLight} rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className={`w-8 h-8 ${item.textColor}`} />
                    </div>

                    {/* Label */}
                    <p className="text-sm font-semibold text-gray-400 mb-3 tracking-wide">{item.label}</p>

                    {/* Value */}
                    <div className="flex items-end justify-center gap-1 mb-4">
                      <span className={`text-5xl font-black bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                        <AnimatedCounter target={item.value} duration={2} />
                      </span>
                      <span className="text-lg font-bold text-gray-400 mb-1.5">{item.unit}</span>
                    </div>

                    {/* Growth badge */}
                    <div className={`inline-flex items-center gap-1.5 ${item.bgLight} ${item.textColor} px-4 py-1.5 rounded-full text-xs font-bold`}>
                      <TrendingUp className="w-3.5 h-3.5" />
                      전월 대비 {item.growth}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 card-premium px-6 py-3">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <p className="text-gray-500 text-sm">
              <span className="font-semibold text-blue-600">실시간 데이터</span> 연동은 추후 구현 예정입니다
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
