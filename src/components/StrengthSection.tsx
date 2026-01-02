import { Award, Truck, Users, DollarSign } from "lucide-react";

const strengths = [
  {
    title: "업계 최고 품질",
    desc: "국내외 인증을 받은 고품질 냉매와 부자재만을 공급합니다.",
    icon: <Award className="w-12 h-12 text-green-600" />,
    badge: "품질",
    color: "from-green-500 to-green-600"
  },
  {
    title: "신속한 공급망",
    desc: "전국 물류망을 통한 빠른 배송과 안정적인 재고 관리.",
    icon: <Truck className="w-12 h-12 text-blue-600" />,
    badge: "공급망",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "맞춤형 서비스",
    desc: "고객 니즈에 맞춘 제품 추천과 전문 상담 지원.",
    icon: <Users className="w-12 h-12 text-blue-600" />,
    badge: "서비스",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "합리적 가격",
    desc: "대량 구매 및 장기 거래 시 특별 할인 제공.",
    icon: <DollarSign className="w-12 h-12 text-orange-600" />,
    badge: "가격",
    color: "from-orange-500 to-orange-600"
  },
];

export default function StrengthSection() {
  return (
    <section id="strength" className="py-20 bg-gradient-to-br from-primary/10 via-white to-accent/10 animate-fadein scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 animate-fadein">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Award className="w-4 h-4" />
            우리의 강점
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-4">믿을 수 있는 파트너</h2>
          <p className="text-gray-600">고객님께 최상의 가치를 제공하는 우리의 핵심 역량입니다</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {strengths.map((item, idx) => (
            <div
              key={idx}
              className="card-premium p-6 sm:p-8 text-center group transition-colors duration-200"
            >
              <div className={`inline-block bg-gradient-to-r ${item.color} text-white text-xs font-bold px-4 py-2 rounded-full mb-4`}>
                {item.badge}
              </div>
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <div className="text-xl font-bold text-primary mb-2 font-display">
                {item.title}
              </div>
              <div className="text-gray-600 text-base">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
