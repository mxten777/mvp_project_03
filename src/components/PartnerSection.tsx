import React from "react";

const partners = [
  { name: "삼성전자", logo: "/images/baikal_logo.png" },
  { name: "LG전자", logo: "/images/apple-green.jpg" },
  { name: "Daikin", logo: "/images/fractal-01.jpg" },
  { name: "현대건설", logo: "/images/pinterest.jpg" },
  { name: "SK에너지", logo: "/images/sphere-01.jpg" },
];

export default function PartnerSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center mb-4">주요 고객사/파트너</h2>
        <p className="text-lg text-gray-700 text-center mb-10">
          국내외 다양한 기업과의 신뢰와 협력으로 성장하고 있습니다.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="bg-white rounded-xl shadow p-4 flex items-center justify-center w-32 h-20 mb-2">
                {/* 실제 로고 파일이 없으면 대체 텍스트 */}
                {item.logo ? (
                  <img src={item.logo} alt={item.name + ' 로고'} className="h-12 w-12 object-cover rounded-full border border-gray-200" />
                ) : (
                  <span className="text-gray-400 text-lg">{item.name}</span>
                )}
              </div>
              <span className="text-sm text-gray-600">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
