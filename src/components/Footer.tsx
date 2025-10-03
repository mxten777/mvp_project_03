"use client";
import React, { useEffect, useRef } from "react";

// 네이버 지도 타입 선언 (window.naver)
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=hsssqn2ub5`;
      script.async = true;
      script.onload = () => {
        console.log("네이버 지도 스크립트 로드됨");
        if (window.naver && mapRef.current) {
          try {
            const map = new window.naver.maps.Map(mapRef.current, {
              center: new window.naver.maps.LatLng(37.2753, 127.1291),
              zoom: 16,
            });
            new window.naver.maps.Marker({
              position: new window.naver.maps.LatLng(37.2753, 127.1291),
              map,
            });
            console.log("지도 인스턴스 생성 성공");
          } catch (e) {
            console.error("지도 생성 오류:", e);
            alert("지도 생성 오류: " + e);
          }
        } else {
          console.error("window.naver 또는 mapRef 미존재");
          alert("window.naver 또는 mapRef 미존재");
        }
      };
      script.onerror = (e) => {
        console.error("네이버 지도 스크립트 로드 실패", e);
        alert("네이버 지도 스크립트 로드 실패");
      };
      document.body.appendChild(script);
    } else {
      if (window.naver && mapRef.current) {
        try {
          const map = new window.naver.maps.Map(mapRef.current, {
            center: new window.naver.maps.LatLng(37.2753, 127.1291),
            zoom: 16,
          });
          new window.naver.maps.Marker({
            position: new window.naver.maps.LatLng(37.2753, 127.1291),
            map,
          });
          console.log("지도 인스턴스 생성 성공 (이미 스크립트 있음)");
        } catch (e) {
          console.error("지도 생성 오류:", e);
          alert("지도 생성 오류: " + e);
        }
      } else {
        console.error("window.naver 또는 mapRef 미존재 (이미 스크립트 있음)");
        alert("window.naver 또는 mapRef 미존재 (이미 스크립트 있음)");
      }
    }
    window.onerror = function(message, source, lineno, colno, error) {
      console.error('전역 에러:', message, error);
      alert('전역 에러: ' + message);
    };
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
