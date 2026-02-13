"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Truck, Award, DollarSign, MessageCircle, ChevronDown } from "lucide-react";
import ScrollReveal from "./common/ScrollReveal";

const faqs = [
  {
    q: "주문/배송은 어떻게 진행되나요?",
    a: "전국 물류망을 통해 신속하게 배송되며, 주문 후 1~2일 내 출고됩니다. 대량 주문 시 별도 일정 조율이 가능하며, 실시간 배송 추적 서비스를 제공합니다.",
    icon: Truck,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    q: "제품 품질 보증은 어떻게 되나요?",
    a: "모든 제품은 국내외 인증을 받은 정품이며, 품질 보증 및 교환/환불 정책이 적용됩니다. ISO 9001 인증 기준에 따라 엄격한 품질 관리를 수행합니다.",
    icon: Award,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    q: "대량 구매/장기 거래 시 혜택이 있나요?",
    a: "대량 구매 및 장기 거래 고객에게는 특별 할인과 맞춤 견적을 제공합니다. 전담 매니저 배정, 우선 배송, 정기 견적 등 다양한 혜택이 있습니다.",
    icon: DollarSign,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    q: "상담/문의는 어떻게 하나요?",
    a: "홈페이지 내 문의폼 또는 대표번호(02-1234-5678)로 언제든 상담 가능합니다. 평일 09:00-18:00, 토요일 09:00-13:00 운영됩니다.",
    icon: MessageCircle,
    gradient: "from-violet-500 to-purple-500",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = faq.icon;

  return (
    <ScrollReveal delay={index * 0.1}>
      <div
        className={`card-premium overflow-hidden transition-all duration-300 ${
          isOpen ? "shadow-[0_12px_40px_rgba(0,0,0,0.1)]" : ""
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center gap-4 p-6 text-left group"
        >
          <div className={`w-12 h-12 bg-gradient-to-br ${faq.gradient} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {faq.q}
            </h3>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0"
          >
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 pl-[88px]">
                <p className="text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden scroll-mt-24"
    >
      <div className="floating-orb top-0 right-0 w-[500px] h-[500px] bg-blue-100/20" />
      <div className="floating-orb bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100/15" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <div className="section-badge bg-blue-50 text-blue-700 mb-6">
            <HelpCircle className="w-4 h-4" />
            자주 묻는 질문
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            궁금하신 점을
            <span className="gradient-text block mt-1">해결해드립니다</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            가장 많이 묻는 질문들을 모았습니다
          </p>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} faq={faq} index={idx} />
          ))}
        </div>

        {/* Extra CTA */}
        <ScrollReveal className="mt-12 text-center">
          <p className="text-gray-400 mb-4">원하시는 답변을 찾지 못하셨나요?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors group"
          >
            직접 문의하기
            <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
