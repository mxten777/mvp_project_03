"use client";

import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

interface NaverMap {
  Map: new (element: HTMLElement, options: { center: { lat: number; lng: number }; zoom: number }) => unknown;
  LatLng: new (lat: number, lng: number) => { lat: number; lng: number };
  Marker: new (options: { position: { lat: number; lng: number }; map: unknown }) => unknown;
}

declare global {
  interface Window {
    naver?: {
      maps?: NaverMap;
    };
  }
}

const contactInfo = [
  { icon: Phone, label: "전화", value: "02-1234-5678" },
  { icon: Mail, label: "이메일", value: "info@koreacoflon.com" },
  { icon: MapPin, label: "주소", value: "경기도 용인시 기흥구 지곡동 381-6" },
  { icon: Clock, label: "영업시간", value: "평일 09:00-18:00 | 토 09:00-13:00" },
];

const quickLinks = [
  { label: "회사소개", href: "#about" },
  { label: "제품안내", href: "#products" },
  { label: "강점", href: "#strength" },
  { label: "FAQ", href: "#faq" },
  { label: "문의하기", href: "#contact" },
];

const services = [
  { label: "냉매 공급", href: "#products" },
  { label: "부자재 유통", href: "#products" },
  { label: "기술 컨설팅", href: "#contact" },
  { label: "맞춤 견적", href: "#contact" },
];

export default function Footer() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = "naver-map-script";
    const clientId = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID || "";
    if (!clientId) return;

    const src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}`;

    function createMapIfReady() {
      if (window.naver?.maps && mapRef.current) {
        try {
          const map = new window.naver.maps.Map(mapRef.current, {
            center: new window.naver.maps.LatLng(37.2753, 127.1291),
            zoom: 16,
          });
          new window.naver.maps.Marker({
            position: new window.naver.maps.LatLng(37.2753, 127.1291),
            map,
          });
        } catch (e) {
          console.error("지도 생성 오류:", e);
        }
      }
    }

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = src;
      script.async = true;
      script.onload = () => createMapIfReady();
      script.onerror = (e) => console.error("Naver Maps script failed to load:", e);
      document.body.appendChild(script);
    } else {
      createMapIfReady();
    }
  }, []);

  return (
    <footer className="relative overflow-hidden">
      {/* Top gradient fade */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />

      <div className="bg-gradient-to-br from-slate-950 via-blue-950/95 to-slate-950 text-white">
        <div className="container-premium py-20">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-lg">K</span>
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">한국코프론</h3>
                  <p className="text-[10px] text-blue-300/60 font-semibold tracking-widest uppercase">
                    B2B 냉매 전문
                  </p>
                </div>
              </div>
              <p className="text-blue-200/60 text-sm leading-relaxed mb-6">
                고품질 냉매와 HVAC 부자재를 공급하는 B2B 전문 기업입니다. 고객의 성공이 우리의 목표입니다.
              </p>
              <div className="flex gap-2">
                {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 bg-white/[0.06] hover:bg-white/[0.12] rounded-xl flex items-center justify-center transition-colors border border-white/[0.08] group"
                  >
                    <Icon className="w-4 h-4 text-blue-200/60 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold text-white mb-6 tracking-wide uppercase">바로가기</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-blue-200/50 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-blue-400/40 rounded-full group-hover:bg-blue-400 transition-colors" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-bold text-white mb-6 tracking-wide uppercase">서비스</h4>
              <ul className="space-y-3">
                {services.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-blue-200/50 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-blue-400/40 rounded-full group-hover:bg-blue-400 transition-colors" />
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-bold text-white mb-6 tracking-wide uppercase">연락처</h4>
              <div className="space-y-3">
                {contactInfo.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white/[0.06] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-3.5 h-3.5 text-blue-300/60" />
                      </div>
                      <div>
                        <p className="text-[10px] text-blue-300/40 font-medium uppercase tracking-wider">{item.label}</p>
                        <p className="text-sm text-blue-100/80 font-medium">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mb-16">
            <h4 className="text-sm font-bold text-white mb-4 tracking-wide uppercase">오시는 길</h4>
            <div className="w-full h-72 rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl">
              <div ref={mapRef} className="w-full h-full bg-slate-800/50" />
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/[0.06] pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-blue-200/40 text-sm">
                &copy; 2026 <span className="font-semibold text-blue-200/60">한국코프론</span>. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-xs text-blue-200/40">
                <span>대표: 송하선</span>
                <span>사업자등록번호: 000-00-00000</span>
                <span>개인정보처리방침</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
