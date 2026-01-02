"use client";

import { HelpCircle, Truck, Award, DollarSign, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "주문/배송은 어떻게 진행되나요?",
    a: "전국 물류망을 통해 신속하게 배송되며, 주문 후 1~2일 내 출고됩니다.",
    icon: <Truck className="w-8 h-8 text-blue-600" />,
    badge: "배송",
    color: "from-blue-500 to-blue-600"
  },
  {
    q: "제품 품질 보증은 어떻게 되나요?",
    a: "모든 제품은 국내외 인증을 받은 정품이며, 품질 보증 및 교환/환불 정책이 적용됩니다.",
    icon: <Award className="w-8 h-8 text-green-600" />,
    badge: "품질",
    color: "from-green-500 to-green-600"
  },
  {
    q: "대량 구매/장기 거래 시 혜택이 있나요?",
    a: "대량 구매 및 장기 거래 고객에게는 특별 할인과 맞춤 견적을 제공합니다.",
    icon: <DollarSign className="w-8 h-8 text-blue-600" />,
    badge: "혜택",
    color: "from-blue-500 to-blue-600"
  },
  {
    q: "상담/문의는 어떻게 하나요?",
    a: "홈페이지 내 문의폼 또는 대표번호로 언제든 상담 가능합니다.",
    icon: <MessageCircle className="w-8 h-8 text-orange-600" />,
    badge: "상담",
    color: "from-orange-500 to-orange-600"
  },
];

export default function FAQSection() {
  return (
  <section id="faq" className="py-20 bg-gradient-to-br from-primary/10 via-white to-accent/10 animate-fadein scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4" />
            자주 묻는 질문
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-6">궁금하신 점을 해결해드립니다</h2>
        </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((item, idx) => (
            <div key={idx} className="card-premium p-6 group">
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className={`inline-block bg-gradient-to-r ${item.color} text-white text-xs font-bold px-3 py-1 rounded-full mb-3`}>
                    {item.badge}
                  </div>
                  <div className="font-bold text-accent mb-2 font-display text-lg">
                    Q. {item.q}
                  </div>
                  <div className="text-gray-700 text-sm leading-relaxed">{item.a}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
