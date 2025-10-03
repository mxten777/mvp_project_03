import React from "react";
import { FaBoxOpen, FaTools, FaGasPump } from "react-icons/fa";

const products = [
  {
    name: "에어컨 냉매(R-410A, R-32 등)",
    desc: "친환경 고효율 냉매, 다양한 규격 보유",
    icon: <FaBoxOpen className="text-3xl text-accent drop-shadow-lg" />,
    badge: "냉매"
  },
  {
    name: "냉매 관련 부자재",
    desc: "동관, 밸브, 필터, 오일 등 다양한 부자재",
    icon: <FaTools className="text-3xl text-primary drop-shadow-lg" />,
    badge: "부자재"
  },
  {
    name: "특수 가스 및 산업용 가스",
    desc: "산업 현장 맞춤형 특수 가스 공급",
    icon: <FaGasPump className="text-3xl text-secondary drop-shadow-lg" />,
    badge: "가스"
  },
];

export default function ProductSection() {
  return (
  <section id="products" className="py-20 bg-gradient-radial from-accent via-white to-blue-100 animate-fadein">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-primary text-center mb-6 tracking-tight">주요 제품/서비스</h2>
        <p className="text-xl text-gray-700 text-center mb-10 leading-relaxed">
          다양한 냉매와 부자재를 <span className="text-primary font-bold">신속·안전·정확</span>하게 공급합니다.<br />
          모든 제품은 <span className="text-accent">엄격한 품질 관리와 인증</span>을 거쳐 출고됩니다.
        </p>
  <div className="flex flex-col md:flex-row gap-6 md:gap-10 animate-fadein">
          {products.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-accent p-6 sm:p-8 border-2 border-accent/30 hover:scale-105 hover:shadow-glow transition-all duration-300 flex flex-col items-center w-full md:w-1/3 relative animate-fadein-card">
              <span className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-btn">{item.badge}</span>
              <div className="mb-3">{item.icon}</div>
              <div className="text-2xl font-bold text-accent mb-2 font-display animate-text-pop">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{item.name}</span>
              </div>
              <div className="text-gray-600 mb-4 text-base text-center">{item.desc}</div>
              <button className="mt-2 px-7 py-2 bg-accent text-white rounded-full font-semibold shadow-btn hover:bg-success transition-all duration-200 animate-bounce hover:animate-none">
                제품 문의하기
              </button>
              <div className="mt-4 text-xs text-gray-400">카탈로그 다운로드 · 맞춤 견적 가능</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
