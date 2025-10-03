import Image from 'next/image';

export default function CompanyIntro() {
  return (
  <section id="about" className="max-w-5xl mx-auto py-16 sm:py-20 px-4 text-center bg-gradient-to-br from-gray-50 via-white to-blue-100 rounded-xl shadow-card animate-fadein">
  <h2 className="text-2xl sm:text-4xl font-extrabold mb-6 text-primary tracking-tight font-display">회사 소개</h2>
  <p className="text-base sm:text-xl text-gray-700 mb-8 leading-relaxed">
        한국코프론은 에어컨 가스 및 냉매 부자재 B2B 시장에서 <span className="text-primary font-bold">신뢰와 전문성</span>을 바탕으로
        고품질 제품, 신속한 공급, 전문 상담을 제공합니다.<br />
        <span className="text-accent">15년 업력, ISO9001 인증, 전국 200여 협력사와 함께 성장 중입니다.</span>
      </p>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-8">
        <div className="bg-gradient-to-br from-blue-50 via-white to-accent rounded-2xl shadow-accent p-6 sm:p-8 flex flex-col items-center w-full md:w-1/3 border-2 border-primary/30 relative">
          <span className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-btn">신뢰</span>
            <Image src="/globe.svg" alt="연혁" width={48} height={48} className="h-12 w-12 mb-3 drop-shadow-lg" />
          <h3 className="font-semibold text-primary mb-2 text-lg font-display">연혁</h3>
          <p className="text-gray-600 text-base"><span className="font-bold text-accent">2010년 설립</span><br />15년 업력<br />전국 200여 협력사</p>
        </div>
        <div className="bg-gradient-to-br from-accent via-white to-primary rounded-2xl shadow-accent p-6 sm:p-8 flex flex-col items-center w-full md:w-1/3 border-2 border-accent/30 relative">
          <span className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-btn">혁신</span>
            <Image src="/vercel.svg" alt="비전" width={48} height={48} className="h-12 w-12 mb-3 drop-shadow-lg" />
          <h3 className="font-semibold text-primary mb-2 text-lg font-display">비전</h3>
          <p className="text-gray-600 text-base">B2B 냉매 시장의 <span className="font-bold text-primary">신뢰와 혁신 리더</span><br />지속가능한 성장, 고객 중심 서비스</p>
        </div>
        <div className="bg-gradient-to-br from-primary via-white to-accent rounded-2xl shadow-accent p-6 sm:p-8 flex flex-col items-center w-full md:w-1/3 border-2 border-secondary/30 relative">
          <span className="absolute top-4 right-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full shadow-btn">인증</span>
            <Image src="/window.svg" alt="인증/대표자" width={48} height={48} className="h-12 w-12 mb-3 drop-shadow-lg" />
          <h3 className="font-semibold text-primary mb-2 text-lg font-display">인증/대표자</h3>
          <p className="text-gray-600 text-base">ISO9001 인증<br /><span className="font-bold text-secondary">대표 송하선</span><br />경기 용인시 기흥구 지곡동 381-6</p>
        </div>
      </div>
    </section>
  );
}
