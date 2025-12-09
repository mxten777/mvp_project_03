import { Award, Users, Target, Shield } from 'lucide-react';

export default function CompanyIntro() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden scroll-mt-24">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-100/30 to-blue-100/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fadein">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Award className="w-4 h-4" />
            회사 소개
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            신뢰와 전문성으로
            <span className="gradient-text block">성장하는 기업</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            한국코프론은 에어컨 가스 및 냉매 부자재 B2B 시장에서
            <span className="font-bold text-blue-600"> 신뢰와 전문성</span>을 바탕으로
            고품질 제품, 신속한 공급, 전문 상담을 제공합니다.
            <br />
            <span className="font-bold text-green-600">15년 업력, ISO9001 인증, 전국 200여 협력사와 함께 성장 중입니다.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {/* 연혁 카드 */}
          <div className="card-premium p-8 text-center group hover:-translate-y-2 transition-transform duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
              신뢰
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">연혁</h3>
            <div className="space-y-2 text-gray-600">
              <p><span className="font-bold text-blue-600">2010년 설립</span></p>
              <p>15년 업력</p>
              <p>전국 200여 협력사</p>
            </div>
          </div>

          {/* 비전 카드 */}
          <div className="card-premium p-8 text-center group hover:-translate-y-2 transition-transform duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
              혁신
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">비전</h3>
            <div className="space-y-2 text-gray-600">
              <p>B2B 냉매 시장의</p>
              <p><span className="font-bold text-purple-600">신뢰와 혁신 리더</span></p>
              <p>지속가능한 성장</p>
              <p>고객 중심 서비스</p>
            </div>
          </div>

          {/* 인증 카드 */}
          <div className="card-premium p-8 text-center group hover:-translate-y-2 transition-transform duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-6 shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
              인증
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">인증/대표자</h3>
            <div className="space-y-2 text-gray-600">
              <p>ISO9001 인증</p>
              <p><span className="font-bold text-green-600">대표 송하선</span></p>
              <p>경기 용인시 기흥구</p>
              <p>지곡동 381-6</p>
            </div>
          </div>
        </div>

        {/* 추가 정보 섹션 */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white text-center animate-fadein">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">왜 한국코프론을 선택해야 할까요?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">15년+</div>
              <div className="text-blue-100">업계 경력</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300 mb-2">200+</div>
              <div className="text-blue-100">협력 파트너</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300 mb-2">98%</div>
              <div className="text-blue-100">고객 만족도</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
