"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronRight } from "lucide-react";

const navigation = [
  { name: "홈", href: "/" },
  { name: "회사소개", href: "/#about" },
  { name: "제품", href: "/#products" },
  { name: "강점", href: "/#strength" },
  { name: "파트너", href: "/#partners" },
  { name: "FAQ", href: "/#faq" },
  { name: "문의", href: "/#contact" },
  { name: "대시보드", href: "/dashboard" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] border-b border-gray-100/50"
          : "bg-white/90 backdrop-blur-md border-b border-gray-100/30"
      }`}
    >
      {/* ── Top Contact Bar ── */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white text-sm">
        <div className="container-premium">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2.5 gap-2 sm:gap-0">
            <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-5">
              <a
                href="tel:02-1234-5678"
                className="flex items-center gap-2 hover:bg-white/10 px-2.5 py-1 rounded-lg transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-emerald-400" />
                <span className="font-medium text-sm">02-1234-5678</span>
              </a>
              <a
                href="mailto:info@koreacoflon.com"
                className="flex items-center gap-2 hover:bg-white/10 px-2.5 py-1 rounded-lg transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-blue-300" />
                <span className="font-medium text-sm">info@koreacoflon.com</span>
              </a>
            </div>
            <div className="text-xs text-blue-200/80 font-medium">
              영업시간: 평일 09:00 – 18:00 | 토 09:00 – 13:00
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Navigation ── */}
      <div className="container-premium">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:shadow-blue-600/40 transition-shadow">
              <span className="text-white font-black text-lg">K</span>
            </div>
            <div>
              <div className="font-black text-xl tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">
                한국코프론
              </div>
              <div className="text-[10px] text-gray-400 font-semibold tracking-widest uppercase">
                B2B 냉매 전문
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50/50 group"
              >
                {item.name}
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full group-hover:w-1/2 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/order"
              className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold px-6 py-2.5 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:brightness-110 transition-all duration-300 active:scale-[0.97]"
            >
              빠른 주문
              <ChevronRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors"
              aria-label="메뉴 토글"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-gray-700" />
              ) : (
                <Menu className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Navigation ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="container-premium py-6 space-y-1">
              {navigation.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50/70 rounded-xl font-semibold transition-all"
                  >
                    {item.name}
                    <ChevronRight className="w-4 h-4 text-gray-300" />
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Link
                  href="/order"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full btn-primary text-center py-3.5"
                >
                  빠른 주문하기
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
