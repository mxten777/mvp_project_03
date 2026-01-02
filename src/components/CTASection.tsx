"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageSquare, ArrowRight, Zap } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-800 relative overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-white/5 to-transparent"></div>

      {/* 플로팅 요소들 */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl opacity-60" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-400/10 rounded-full blur-2xl opacity-60" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="space-y-8">
          {/* 뱃지 */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold border border-white/20">
            <Zap className="w-4 h-4" />
            지금 바로 시작하세요
          </div>

          {/* 메인 타이틀 */}
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            상담 또는 온라인 주문을
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              지금 시작하세요!
            </span>
          </h2>

          {/* 서브 타이틀 */}
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            신속한 견적, 맞춤 상담, 빠른 납기까지
            <br />
            <span className="font-semibold text-white">B2B 고객만을 위한 전문 서비스</span>를 제공합니다.
          </p>

          {/* CTA 버튼들 */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
            <div>
              <Link
                href="/order"
                className="group bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/25 transition-all duration-300 inline-flex items-center justify-center gap-3 w-full sm:w-auto hover:bg-blue-50"
              >
                <MessageSquare className="w-5 h-5" />
                온라인 주문하기
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div>
              <Link
                href="#contact"
                className="group border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center gap-3 w-full sm:w-auto"
              >
                <Phone className="w-5 h-5" />
                상담 문의하기
              </Link>
            </div>
          </div>

          {/* 추가 정보 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-300 mb-2">24시간</div>
              <div className="text-blue-200 text-sm">빠른 응대</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-300 mb-2">무료</div>
              <div className="text-blue-200 text-sm">기술 상담</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-300 mb-2">전문가</div>
              <div className="text-blue-200 text-sm">맞춤 솔루션</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
