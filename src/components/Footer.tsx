"use client";
import React, { useEffect, useRef } from "react";

// 네이버 지도 타입 선언 (window.naver)
declare global {
  interface Window {
    naver: any;
  }
}

export default function Footer() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 네이버 지도 API 스크립트 동적 로드
    const scriptId = "naver-map-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      // 실제 발급받은 Client ID로 교체
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ncp_iam_BPKMKRP4VJIWU2SyUONYp1u2LMl7eNTbuC`;
      script.async = true;
      script.onload = () => {
        if (window.naver && mapRef.current) {
          const map = new window.naver.maps.Map(mapRef.current, {
            center: new window.naver.maps.LatLng(37.2753, 127.1291), // 지곡동 381-6 근처 좌표
            zoom: 16,
          });
          new window.naver.maps.Marker({
            position: new window.naver.maps.LatLng(37.2753, 127.1291),
            map,
          });
        }
      };
      document.body.appendChild(script);
    } else {
      if (window.naver && mapRef.current) {
        const map = new window.naver.maps.Map(mapRef.current, {
          center: new window.naver.maps.LatLng(37.2753, 127.1291),
          zoom: 16,
        });
        new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(37.2753, 127.1291),
          map,
        });
      }
    }
  }, []);

  return (
    <footer className="w-full bg-gradient-to-r from-blue-100 to-white border-t mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <div className="mb-2 md:mb-0">© 2025 한국코프론. All rights reserved.</div>
        <div className="flex flex-col md:flex-row gap-1 md:gap-4 text-gray-500">
          <span>대표: 송하선</span>
          <span>용인시 기흥구 지곡동 381-6</span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pb-8 px-4">
        <div className="w-full h-64 rounded-lg overflow-hidden border mt-4 bg-white">
          <div ref={mapRef} className="w-full h-full" />
        </div>
      </div>
    </footer>
  );
}
