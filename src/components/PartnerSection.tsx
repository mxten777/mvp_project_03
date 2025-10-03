
const partners = [
  { name: "삼성전자", logo: "/globe.svg" },
  { name: "LG화학", logo: "/window.svg" },
  { name: "SK에너지", logo: "/vercel.svg" },
  { name: "롯데케미칼", logo: "/next.svg" },
];

import Image from "next/image";

export default function PartnerSection() {
  return (
    <section id="partners" className="py-16 sm:py-20 bg-gradient-to-br from-accent/10 via-white to-primary/10 animate-fadein">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-primary text-center mb-6">주요 파트너사</h2>
        <div className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-8 items-center justify-center mt-4">
          {partners.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white rounded-xl shadow-accent p-4 sm:p-6 hover:scale-105 hover:shadow-glow transition-all duration-300 w-full sm:w-1/2 md:w-1/4">
              <Image src={item.logo} alt={item.name} width={64} height={64} className="h-14 w-14 sm:h-16 sm:w-16 mb-3 object-contain" />
              <span className="text-base sm:text-lg font-semibold text-primary font-display">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
