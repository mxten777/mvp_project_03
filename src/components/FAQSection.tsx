import React from "react";

const faqs = [
  {
    q: "주문은 어떻게 하나요?",
    a: "홈페이지 상단의 '온라인 주문하기' 버튼을 클릭해 간편하게 주문서를 작성하실 수 있습니다.",
  },
  {
    q: "납기 및 배송은 얼마나 걸리나요?",
    a: "주문 확인 후 전국 당일 또는 익일 배송을 원칙으로 합니다. 지역/제품에 따라 상이할 수 있습니다.",
  },
  {
    q: "B2B 대량 견적 및 맞춤 상담이 가능한가요?",
    a: "네, 대량 구매 및 맞춤형 상담이 가능합니다. 문의 폼 또는 대표번호로 연락주세요.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 bg-gray-50" id="faq">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center mb-4">자주 묻는 질문</h2>
        <div className="space-y-6 mt-8">
          {faqs.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6">
              <div className="font-bold text-blue-700 mb-2">Q. {item.q}</div>
              <div className="text-gray-700">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
