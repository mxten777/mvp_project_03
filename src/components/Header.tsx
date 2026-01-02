"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100/40`}>
      {/* Top contact bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white text-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 gap-2 sm:gap-0">
            <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-4">
              <div className="flex items-center gap-2 hover:bg-white/10 px-2 py-1 rounded-lg transition-colors">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="font-medium">문의전화: 02-1234-5678</span>
              </div>
              <div className="flex items-center gap-2 hover:bg-white/10 px-2 py-1 rounded-lg transition-colors">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="font-medium">이메일 문의</span>
              </div>
            </div>
            <div className="text-xs opacity-90">
              영업시간: 평일 09:00 - 18:00 | 토요일 09:00 - 13:00
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <div>
              <Link href="/" className="font-black text-2xl tracking-tight text-primary">
                한국코프론
              </Link>
              <div className="text-xs text-gray-500 font-medium">B2B 냉매 전문</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <div>
              <Link href="/order" className="btn-primary text-sm px-6 py-2">빠른 주문</Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 overflow-hidden">
          <div className="px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </div>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="/order"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full btn-primary text-center"
              >
                빠른 주문하기
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
