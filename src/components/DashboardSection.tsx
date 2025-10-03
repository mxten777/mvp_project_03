import React from "react";

const stats = [
  { label: "총 주문건수", value: "1,245건", icon: "📦" },
  { label: "월간 거래액", value: "₩98,000,000", icon: "💰" },
  { label: "파트너사 수", value: "27개사", icon: "🤝" },
  { label: "고객 만족도", value: "98%", icon: "🌟" },
];

export default function DashboardSection() {
  return (
  <section id="dashboard" className="py-20 bg-gradient-radial from-primary/10 via-white to-accent/10 animate-fadein">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-6">관리자 대시보드</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-accent p-8 flex flex-col items-center text-center border-t-4 border-accent hover:scale-105 hover:shadow-glow transition-all duration-300">
              <div className="text-4xl mb-3 text-accent">{item.icon}</div>
              <div className="text-xl font-bold text-accent mb-2 font-display">{item.label}</div>
              <div className="text-2xl font-extrabold text-primary mb-1">{item.value}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center text-gray-500 text-sm">
          * 실시간 데이터 연동은 추후 구현 예정입니다.
        </div>
      </div>
    </section>
  );
}
