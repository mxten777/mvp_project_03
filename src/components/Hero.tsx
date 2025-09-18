import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400 text-white py-20 rounded-b-3xl shadow-lg">
      <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg leading-tight">
          에어컨 가스 및 냉매<br />
          <span className="text-blue-200">B2B 전문 공급업체</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
          고품질 냉매와 부자재, 신속한 공급, 전문 상담까지<br />
          한국코프론에서 한 번에 해결하세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/order"
            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg shadow hover:bg-blue-50 transition-all duration-200 inline-flex items-center justify-center"
          >
            온라인 주문하기
          </Link>
          <Link
            href="#contact"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg shadow hover:bg-white hover:text-blue-900 transition-all duration-200 inline-flex items-center justify-center"
          >
            상담 문의하기
          </Link>
        </div>
      </div>
    </section>
  );
}
