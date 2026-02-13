"use client";

import { Award, Truck, Users, DollarSign } from "lucide-react";
import ScrollReveal from "./common/ScrollReveal";

const strengths = [
  {
    title: "업계 최고 품질",
    desc: "국내외 인증을 받은 고품질 냉매와 부자재만을 공급합니다. 모든 제품은 엄격한 QC를 통과합니다.",
    icon: Award,
    number: "01",
    gradient: "from-emerald-500 to-teal-500",
    iconBg: "from-emerald-500 to-teal-600",
  },
  {
    title: "신속한 공급망",
    desc: "전국 물류망을 통한 당일/익일 배송. 자체 물류 시스템으로 안정적인 재고를 관리합니다.",
    icon: Truck,
    number: "02",
    gradient: "from-blue-500 to-indigo-500",
    iconBg: "from-blue-500 to-indigo-600",
  },
  {
    title: "맞춤형 서비스",
    desc: "고객 니즈에 맞춘 제품 추천과 전문 기술 상담. 프로젝트 규모에 최적화된 솔루션을 제공합니다.",
    icon: Users,
    number: "03",
    gradient: "from-violet-500 to-purple-500",
    iconBg: "from-violet-500 to-purple-600",
  },
  {
    title: "합리적 가격",
    desc: "대량 구매 및 장기 거래 시 특별 할인과 맞춤 견적을 제공합니다. 투명한 가격 정책을 약속합니다.",
    icon: DollarSign,
    number: "04",
    gradient: "from-amber-500 to-orange-500",
    iconBg: "from-amber-500 to-orange-600",
  },
];

export default function StrengthSection() {
  return (
    <section
      id="strength"
      className="py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden scroll-mt-24"
    >
      <div className="floating-orb top-1/2 -translate-y-1/2 -left-40 w-[600px] h-[600px] bg-blue-100/20" />
      <div className="floating-orb top-20 -right-40 w-[400px] h-[400px] bg-indigo-100/20" />

      <div className="container-premium relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-20">
          <div className="section-badge bg-emerald-50 text-emerald-700 mb-6">
            <Award className="w-4 h-4" />
            우리의 강점
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            믿을 수 있는
            <span className="gradient-text block mt-1">파트너</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            고객님께 최상의 가치를 제공하는 핵심 역량입니다
          </p>
        </ScrollReveal>

        {/* Strength Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {strengths.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="card-premium p-8 group h-full relative overflow-hidden">
                  {/* Number watermark */}
                  <div className="absolute -top-4 -right-2 text-[120px] font-black text-gray-100/50 leading-none select-none pointer-events-none group-hover:text-blue-100/50 transition-colors duration-500">
                    {item.number}
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Bottom accent line */}
                    <div className={`mt-6 h-1 w-12 bg-gradient-to-r ${item.gradient} rounded-full group-hover:w-full transition-all duration-500`} />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
