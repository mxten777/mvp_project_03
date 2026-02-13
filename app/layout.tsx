import type { Metadata } from "next";
import "./globals.css";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";

export const metadata: Metadata = {
  title: "한국코프론 | B2B 프리미엄 냉매·가스 전문 공급",
  description:
    "에어컨 가스 및 냉매, HVAC 부자재 B2B 전문 공급업체. 고품질 인증 제품, 전국 당일배송, 15년 업력의 신뢰. ISO 9001 인증.",
  keywords: ["에어컨 가스", "냉매", "부자재", "한국코프론", "HVAC", "B2B", "R-410A", "R-32"],
  openGraph: {
    title: "한국코프론 | B2B 프리미엄 냉매·가스 전문 공급",
    description:
      "에어컨 가스 및 냉매, HVAC 부자재 B2B 전문 공급업체. 고품질, 신속공급, 전문상담.",
    type: "website",
    locale: "ko_KR",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="font-sans antialiased bg-white text-gray-900">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
