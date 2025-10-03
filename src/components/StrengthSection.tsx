
const strengths = [
  {
    title: "업계 최고 품질",
    desc: "국내외 인증을 받은 고품질 냉매와 부자재만을 공급합니다.",
    icon: <span className="text-4xl text-success drop-shadow-lg">✅</span>,
    badge: "품질"
  },
  {
    title: "신속한 공급망",
    desc: "전국 물류망을 통한 빠른 배송과 안정적인 재고 관리.",
    icon: <span className="text-4xl text-primary drop-shadow-lg">🚚</span>,
    badge: "공급망"
  },
  {
    title: "맞춤형 서비스",
    desc: "고객 니즈에 맞춘 제품 추천과 전문 상담 지원.",
    icon: <span className="text-4xl text-accent drop-shadow-lg">🤝</span>,
    badge: "서비스"
  },
  {
    title: "합리적 가격",
    desc: "대량 구매 및 장기 거래 시 특별 할인 제공.",
    icon: <span className="text-4xl text-secondary drop-shadow-lg">💸</span>,
    badge: "가격"
  },
];

export default function StrengthSection() {
  return (
  <section id="strength" className="py-20 bg-gradient-to-br from-primary/10 via-white to-accent/10 animate-fadein">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-6">우리의 강점</h2>
  <div className="flex flex-col md:flex-row gap-6 md:gap-8 animate-fadein">
          {strengths.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-accent p-6 sm:p-8 border-2 border-primary/30 hover:scale-105 hover:shadow-glow transition-all duration-300 flex flex-col items-center text-center w-full md:w-1/4 relative animate-fadein-card">
              <span className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-btn animate-bounce">{item.badge}</span>
              <div className="mb-3">{item.icon}</div>
              <div className="text-xl font-bold text-primary mb-2 font-display animate-text-pop">
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">{item.title}</span>
              </div>
              <div className="text-gray-600 text-base">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
