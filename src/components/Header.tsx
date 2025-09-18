"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

const navigation = [
  { name: "홈", href: "/" },
  { name: "회사소개", href: "/about" },
  { name: "제품안내", href: "/products" },
  { name: "주문하기", href: "/order" },
  { name: "문의하기", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
  <header className="bg-white/80 backdrop-blur shadow-md sticky top-0 z-30">
      {/* Top contact bar - 모바일에서 세로, 데스크탑에서 가로 */}
      <div className="bg-blue-900 text-white text-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 gap-1 sm:gap-0">
            <div className="flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-4">
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <span>문의전화</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                <span>이메일 문의</span>
              </div>
            </div>
            <div className="text-xs mt-1 sm:mt-0 text-center sm:text-right">
              영업시간: 평일 09:00 - 18:00
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/file.svg" alt="로고" className="h-9 w-9 drop-shadow" />
            <Link href="/" className="font-extrabold text-2xl tracking-tight text-blue-700">
              한국코프론
            </Link>
            <div className="ml-3 text-sm text-gray-600 hidden md:block">
              에어컨 가스 및 냉매 전문
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex gap-8 text-base font-medium">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 px-2 py-1 rounded-lg"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t pt-4 pb-4">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-900 font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
