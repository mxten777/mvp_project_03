import React from "react";

const products = [
  {
    name: "에어컨 냉매(R-410A, R-32 등)",
    desc: "친환경 고효율 냉매, 다양한 규격 보유",
  },
  {
    name: "냉매 관련 부자재",
    desc: "동관, 밸브, 필터, 오일 등 다양한 부자재",
  },
  {
    name: "특수 가스 및 산업용 가스",
    desc: "산업 현장 맞춤형 특수 가스 공급",
  },
];

export default function ProductSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center mb-4">주요 제품/서비스</h2>
        <p className="text-lg text-gray-700 text-center mb-10">
          다양한 냉매와 부자재를 신속하게 공급합니다. <br />
          모든 제품은 엄격한 품질 관리와 인증을 거쳐 출고됩니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-600 hover:shadow-2xl transition-all duration-200">
              <div className="text-xl font-bold text-blue-700 mb-2">{item.name}</div>
              <div className="text-gray-600 mb-4">{item.desc}</div>
              <button className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition-all duration-200">
                문의하기
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
