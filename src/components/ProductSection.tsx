'use client';

import React from "react";
import { Package, Wrench, Fuel, Star, ArrowRight } from "lucide-react";

const products = [
  {
    name: "에어컨 냉매(R-410A, R-32 등)",
    desc: "친환경 고효율 냉매, 다양한 규격 보유",
    icon: <Package className="text-4xl text-blue-600 drop-shadow-lg" />,
    badge: "냉매",
    features: ["친환경 인증", "고효율", "다양한 규격"],
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "냉매 관련 부자재",
    desc: "동관, 밸브, 필터, 오일 등 다양한 부자재",
    icon: <Wrench className="text-4xl text-green-600 drop-shadow-lg" />,
    badge: "부자재",
    features: ["품질 보증", "빠른 배송", "기술 지원"],
    color: "from-green-500 to-green-600"
  },
  {
    name: "특수 가스 및 산업용 가스",
    desc: "산업 현장 맞춤형 특수 가스 공급",
    icon: <Fuel className="text-4xl text-blue-600 drop-shadow-lg" />,
    badge: "가스",
    features: ["안전 인증", "맞춤 공급", "기술 컨설팅"],
    color: "from-blue-500 to-blue-600"
  },
];

export default function ProductSection() {
  return (
    <section id="products" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white relative overflow-hidden scroll-mt-24">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-20 bg-gray-100"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4" />
            주요 제품/서비스
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            최고 품질의
            <span className="gradient-text block">냉매 솔루션</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            다양한 냉매와 부자재를 <span className="font-bold text-blue-600">신속·안전·정확</span>하게 공급합니다.
            <br />
            모든 제품은 <span className="font-bold text-green-600">엄격한 품질 관리와 인증</span>을 거쳐 출고됩니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {products.map((item, idx) => (
            <div key={idx} className="card-premium p-8 group">
              {/* 뱃지 */}
              <div className="flex justify-between items-start mb-6">
                <div className={`bg-gradient-to-r ${item.color} text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg`}>
                  {item.badge}
                </div>
                <div className="text-gray-300 group-hover:text-blue-400 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>

              {/* 아이콘 */}
              <div className="mb-6">
                {item.icon}
              </div>

              {/* 타이틀 */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {item.name}
              </h3>

              {/* 설명 */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {item.desc}
              </p>

              {/* 특징들 */}
              <div className="space-y-2 mb-6">
                {item.features.map((feature, featureIdx) => (
                  <div key={featureIdx} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full`}></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* CTA 버튼 */}
              <button className={`w-full bg-gradient-to-r ${item.color} text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-colors duration-200 flex items-center justify-center gap-2`}>
                제품 문의하기
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* 추가 정보 */}
              <div className="mt-4 text-xs text-gray-400 text-center">
                카탈로그 다운로드 · 맞춤 견적 가능
              </div>
            </div>
          ))}
        </div>

        {/* 하단 CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">전문 컨설팅이 필요하신가요?</h3>
            <p className="text-blue-100 mb-6">냉매 선택부터 설치까지 전문가가 도와드립니다.</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-colors duration-200">전문가 상담 신청</button>
          </div>
        </div>
      </div>
    </section>
  );
}
