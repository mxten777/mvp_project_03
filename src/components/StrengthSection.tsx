import React from "react";

const strengths = [
  {
    title: "고품질 & 인증 제품",
    desc: "국내외 인증 및 엄격한 품질관리로 신뢰 확보",
    color: "blue-600",
  },
  {
    title: "신속한 납기 & 공급",
    desc: "전국 당일/익일 배송, 재고 실시간 관리",
    color: "green-600",
  },
  {
    title: "전문 상담 & 맞춤 서비스",
    desc: "B2B 특화 상담, 현장 맞춤형 솔루션 제공",
    color: "purple-600",
  },
];

export default function StrengthSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center mb-4">한국코프론의 강점</h2>
        <p className="text-lg text-gray-700 text-center mb-10">
          B2B 고객이 신뢰할 수 있는 이유, 바로 여기에 있습니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strengths.map((item, idx) => (
            <div key={idx} className={`bg-${item.color}/10 border-t-4 border-${item.color} rounded-2xl shadow p-8 text-center hover:shadow-xl transition-all duration-200`}>
              <div className={`text-xl font-bold text-${item.color} mb-2`}>{item.title}</div>
              <div className="text-gray-600">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
