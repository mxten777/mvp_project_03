
const faqs = [
  {
    q: "주문/배송은 어떻게 진행되나요?",
    a: "전국 물류망을 통해 신속하게 배송되며, 주문 후 1~2일 내 출고됩니다.",
    icon: <span className="text-xl text-primary drop-shadow-lg">🚚</span>,
    badge: "배송"
  },
  {
    q: "제품 품질 보증은 어떻게 되나요?",
    a: "모든 제품은 국내외 인증을 받은 정품이며, 품질 보증 및 교환/환불 정책이 적용됩니다.",
    icon: <span className="text-xl text-success drop-shadow-lg">✅</span>,
    badge: "품질"
  },
  {
    q: "대량 구매/장기 거래 시 혜택이 있나요?",
    a: "대량 구매 및 장기 거래 고객에게는 특별 할인과 맞춤 견적을 제공합니다.",
    icon: <span className="text-xl text-secondary drop-shadow-lg">💸</span>,
    badge: "혜택"
  },
  {
    q: "상담/문의는 어떻게 하나요?",
    a: "홈페이지 내 문의폼 또는 대표번호로 언제든 상담 가능합니다.",
    icon: <span className="text-xl text-accent drop-shadow-lg">🤝</span>,
    badge: "상담"
  },
];

export default function FAQSection() {
  return (
  <section id="faq" className="py-20 bg-gradient-to-br from-primary/10 via-white to-accent/10 animate-fadein">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-6">자주 묻는 질문</h2>
  <div className="flex flex-col gap-6 animate-fadein">
          {faqs.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-accent p-4 sm:p-6 border-2 border-accent/30 hover:scale-105 hover:shadow-glow transition-all duration-300 w-full relative animate-fadein-card">
              <span className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-btn animate-bounce">{item.badge}</span>
              <div className="mb-2">{item.icon}</div>
              <div className="font-bold text-accent mb-2 font-display animate-text-pop">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Q. {item.q}</span>
              </div>
              <div className="text-gray-700">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
