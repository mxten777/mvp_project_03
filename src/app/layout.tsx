import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "한국코프론 - 에어컨 가스 및 냉매 전문기업",
  description: "한국코프론은 에어컨 가스 및 냉매 관련 부자재를 전문으로 하는 기업입니다. 고품질의 냉매 제품과 전문적인 서비스를 제공합니다.",
  keywords: ["에어컨 가스", "냉매", "부자재", "한국코프론", "HVAC"],
  openGraph: {
    title: "한국코프론 - 에어컨 가스 및 냉매 전문기업",
    description: "에어컨 가스 및 냉매 관련 부자재 전문 공급업체",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-blue-50 to-white text-gray-900`}
      >
        <Header />
        <main className="min-h-screen max-w-7xl mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
