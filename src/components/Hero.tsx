import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
  <section id="hero" className="relative bg-gradient-radial from-primary via-blue-500 to-accent text-white py-24 rounded-b-2xl shadow-glow animate-fadein border-b-4 border-accent">
  <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center gap-6 sm:gap-8 animate-fadein">
  <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg leading-tight font-display animate-text-pop">
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">에어컨 가스 및 냉매</span><br />
          <span className="text-blue-100 font-bold tracking-wide underline decoration-accent decoration-4">B2B 전문 공급업체</span>
        </h1>
        <p className="text-base sm:text-lg md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
          고품질 냉매와 부자재, 신속한 공급, 전문 상담까지<br />
          한국코프론에서 한 번에 해결하세요.
        </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4 w-full">
          <Link
            href="/order"
            className="bg-accent text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-btn hover:bg-success transition-all duration-200 w-full sm:w-auto inline-flex items-center justify-center gap-2 animate-bounce hover:animate-none"
          >
            <span className="inline-block mr-1 align-middle">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h1l2 7h13l2-7h1" /></svg>
            </span>
            온라인 주문하기
          </Link>
          <Link
            href="#contact"
            className="border-2 border-accent text-accent px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-btn hover:bg-accent hover:text-white transition-all duration-200 w-full sm:w-auto inline-flex items-center justify-center gap-2 animate-bounce hover:animate-none"
          >
            <span className="inline-block mr-1 align-middle">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12H3" /></svg>
            </span>
            상담 문의하기
          </Link>
        </div>
      </div>
    </section>
  );
}
