import React from "react";

export default function CompanyIntro() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">회사 소개</h2>
        <p className="text-lg text-gray-700 mb-6">
          한국코프론은 에어컨 가스 및 냉매 관련 부자재를 전문적으로 공급하는 B2B 기업입니다.<br />
          오랜 업력과 신뢰를 바탕으로, 고객의 비즈니스 성공을 지원합니다.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
          <div className="flex-1 bg-blue-50 rounded-xl p-6 shadow">
            <div className="text-2xl font-bold text-blue-700 mb-2">회사 연혁</div>
            <ul className="text-gray-600 text-left list-disc list-inside">
              <li>2010년 설립, 15년 이상 업계 경험</li>
              <li>국내외 200여개 B2B 거래처</li>
              <li>다수의 인증 및 특허 보유</li>
            </ul>
          </div>
          <div className="flex-1 bg-blue-50 rounded-xl p-6 shadow">
            <div className="text-2xl font-bold text-blue-700 mb-2">비전 & 가치</div>
            <ul className="text-gray-600 text-left list-disc list-inside">
              <li>고객 신뢰와 품질 최우선</li>
              <li>지속가능한 성장과 혁신</li>
              <li>파트너와의 상생 협력</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-gray-500 text-sm">
          <span className="font-semibold">대표자:</span> 송하선 &nbsp;|&nbsp;
          <span className="font-semibold">사업위치:</span> 용인시 기흥구 지곡동 381-6
        </div>
      </div>
    </section>
  );
}
