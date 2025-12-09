import Image from "next/image";
import { Building2 } from "lucide-react";

const partners = [
  { name: "삼성전자", logo: "/globe.svg" },
  { name: "LG화학", logo: "/window.svg" },
  { name: "SK에너지", logo: "/vercel.svg" },
  { name: "롯데케미칼", logo: "/next.svg" },
];

export default function PartnerSection() {
  return (
    <section id="partners" className="py-16 sm:py-20 bg-gradient-to-br from-accent/10 via-white to-primary/10 animate-fadein scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12 animate-fadein">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Building2 className="w-4 h-4" />
            주요 파트너사
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-primary text-center mb-6">신뢰하는 기업들과 함께합니다</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-4">
          {partners.map((item, idx) => (
            <div
              key={idx}
              className="card-premium p-6 flex flex-col items-center hover:-translate-y-2 hover:scale-105 transition-all duration-300"
            >
              <Image src={item.logo} alt={item.name} width={64} height={64} className="h-14 w-14 sm:h-16 sm:w-16 mb-3 object-contain" />
              <span className="text-base sm:text-lg font-semibold text-primary font-display">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
