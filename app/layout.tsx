import type { Metadata } from "next";
import "./globals.css";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";

export const metadata: Metadata = {
  title: "한국코프론 B2B 냉매/가스 전문 공급",
  description: "에어컨 가스 및 냉매, 부자재 B2B 전문 공급업체. 고품질, 신속공급, 전문상담, 전국 협력사.",
  openGraph: {
    title: "한국코프론 B2B 냉매/가스 전문 공급",
    description: "에어컨 가스 및 냉매, 부자재 B2B 전문 공급업체. 고품질, 신속공급, 전문상담, 전국 협력사.",
    images: ["/globe.svg"],
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
      <body className="font-sans bg-gray-50">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
