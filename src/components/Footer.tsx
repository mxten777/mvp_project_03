"use client";

import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
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

export default function Footer() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = "naver-map-script";
    // Prefer public env var for client id (Next.js: NEXT_PUBLIC_NAVER_MAP_CLIENT_ID)
    const clientId = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID || "";
    if (!clientId) {
      console.error("Naver Maps client id is not set. Set NEXT_PUBLIC_NAVER_MAP_CLIENT_ID in environment.");
      return;
    }

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
      script.onload = () => {
        createMapIfReady();
      };
      script.onerror = (e) => {
        console.error("Naver Maps script failed to load:", e, src);
      };
      document.body.appendChild(script);
    } else {
      // script already present — try to create map immediately
      createMapIfReady();
    }
  }, []);

  const contactInfo = [
    { icon: Phone, label: "전화", value: "02-1234-5678" },
    { icon: Mail, label: "이메일", value: "info@koreacoflon.com" },
    { icon: MapPin, label: "주소", value: "경기도 용인시 기흥구 지곡동 381-6" },
    { icon: Clock, label: "영업시간", value: "평일 09:00-18:00 | 토요일 09:00-13:00" },
  ];

  const quickLinks = [
    { label: "회사소개", href: "#about" },
    { label: "제품안내", href: "#products" },
    { label: "강점", href: "#strength" },
    { label: "FAQ", href: "#faq" },
    { label: "문의하기", href: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* 메인 푸터 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* 회사 정보 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">
                  한국코프론
                </h3>
                <p className="text-xs text-blue-300">B2B 냉매 전문</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              고품질 냉매와 HVAC 부자재를 공급하는 B2B 전문 기업입니다. 
              고객의 성공이 우리의 목표입니다.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors border border-white/20">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">빠른 링크</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-white transition-colors"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 정보 */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-white">연락처</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-blue-300 mb-1">{item.label}</div>
                      <div className="text-sm text-white font-medium">{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 지도 */}
        <div className="mb-12">
          <h4 className="text-lg font-bold mb-4 text-white">오시는 길</h4>
          <div className="w-full h-80 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
            <div ref={mapRef} className="w-full h-full" />
          </div>
        </div>

        {/* 하단 바 */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-blue-300 text-sm">
              © 2025 <span className="font-semibold text-white">한국코프론</span>. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-blue-300">
              <span>대표: 송하선</span>
              <span>사업자등록번호: 000-00-00000</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
