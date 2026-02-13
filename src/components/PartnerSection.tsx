"use client";

import { Building2, Handshake } from "lucide-react";
import ScrollReveal from "./common/ScrollReveal";

const partners = [
  { name: "삼성전자", category: "전자" },
  { name: "LG화학", category: "화학" },
  { name: "SK에너지", category: "에너지" },
  { name: "롯데케미칼", category: "화학" },
  { name: "한화솔루션", category: "솔루션" },
  { name: "현대건설", category: "건설" },
  { name: "대우건설", category: "건설" },
  { name: "GS건설", category: "건설" },
];

function PartnerCard({ name, category }: { name: string; category: string }) {
  return (
    <div className="flex-shrink-0 w-48 mx-3">
      <div className="card-premium p-6 text-center h-full hover:scale-105 transition-transform duration-300">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Building2 className="w-7 h-7 text-blue-600" />
        </div>
        <p className="font-bold text-gray-900 text-sm">{name}</p>
        <p className="text-xs text-gray-400 mt-1">{category}</p>
      </div>
    </div>
  );
}

export default function PartnerSection() {
  const doubled = [...partners, ...partners];

  return (
    <section
      id="partners"
      className="py-28 bg-white relative overflow-hidden scroll-mt-24"
    >
      <div className="container-premium relative z-10">
        <ScrollReveal className="text-center mb-16">
          <div className="section-badge bg-indigo-50 text-indigo-700 mb-6">
            <Handshake className="w-4 h-4" />
            주요 파트너사
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            신뢰하는 기업들과
            <span className="gradient-text block mt-1">함께합니다</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            대한민국 주요 기업들이 한국코프론을 선택합니다
          </p>
        </ScrollReveal>
      </div>

      {/* Marquee Row 1 */}
      <ScrollReveal>
        <div className="relative overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex animate-marquee">
            {doubled.map((partner, idx) => (
              <PartnerCard key={`r1-${idx}`} name={partner.name} category={partner.category} />
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Marquee Row 2 (reverse) */}
      <ScrollReveal delay={0.2}>
        <div className="relative overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex animate-marquee [animation-direction:reverse] [animation-duration:35s]">
            {[...doubled].reverse().map((partner, idx) => (
              <PartnerCard key={`r2-${idx}`} name={partner.name} category={partner.category} />
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Trust indicators */}
      <div className="container-premium mt-12">
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 font-medium">
            <span>✓ 200+ 파트너사</span>
            <span>✓ 전국 네트워크</span>
            <span>✓ 15년 신뢰 관계</span>
            <span>✓ 98% 재계약율</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
