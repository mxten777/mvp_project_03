import React from "react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow">지금 바로 상담 또는 온라인 주문을 시작하세요!</h2>
        <p className="text-lg mb-8">
          신속한 견적, 맞춤 상담, 빠른 납기까지<br />
          B2B 고객만을 위한 전문 서비스를 제공합니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/order"
            className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg shadow hover:bg-blue-100 transition-all duration-200 inline-flex items-center justify-center"
          >
            온라인 주문하기
          </Link>
          <Link
            href="#contact"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg shadow hover:bg-white hover:text-blue-700 transition-all duration-200 inline-flex items-center justify-center"
          >
            상담 문의하기
          </Link>
        </div>
      </div>
    </section>
  );
}
