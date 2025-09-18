import Link from "next/link";
import { 
  Snowflake, 
  Wind, 
  Thermometer, 
  ArrowRight,
  Users,
  Award,
  Clock
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              에어컨 가스 및 냉매
              <br />
              <span className="text-blue-300">전문 공급업체</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              한국코프론은 고품질의 냉매 제품과 전문적인 서비스로
              고객의 HVAC 솔루션을 완성합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                제품 둘러보기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/order"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
              >
                주문 문의하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              왜 한국코프론을 선택해야 할까요?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              오랜 경험과 전문성으로 최고 품질의 냉매 솔루션을 제공합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">고품질 제품</h3>
              <p className="text-gray-600">
                엄격한 품질 관리를 통해 검증된 최고 품질의 냉매 제품만을 공급합니다
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">전문 서비스</h3>
              <p className="text-gray-600">
                숙련된 전문가팀이 고객의 요구사항에 맞는 맞춤형 솔루션을 제공합니다
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">신속한 대응</h3>
              <p className="text-gray-600">
                빠른 주문 처리와 배송으로 고객의 비즈니스가 중단되지 않도록 지원합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              주요 제품 카테고리
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              다양한 HVAC 시스템에 적합한 냉매 제품을 공급합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-xl text-white">
                <Snowflake className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">냉매 가스</h3>
                <p className="text-blue-100 mb-6">
                  R-410A, R-134a, R-22 등 다양한 냉매 가스를 공급합니다
                </p>
                <Link
                  href="/products/refrigerants"
                  className="text-white border-b-2 border-white hover:border-blue-200 transition-colors"
                >
                  자세히 보기 →
                </Link>
              </div>
            </div>

            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-xl text-white">
                <Wind className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">HVAC 부자재</h3>
                <p className="text-green-100 mb-6">
                  에어컨 시스템에 필요한 각종 부자재를 제공합니다
                </p>
                <Link
                  href="/products/components"
                  className="text-white border-b-2 border-white hover:border-green-200 transition-colors"
                >
                  자세히 보기 →
                </Link>
              </div>
            </div>

            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-xl text-white">
                <Thermometer className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">측정 장비</h3>
                <p className="text-orange-100 mb-6">
                  정확한 측정을 위한 전문 장비를 공급합니다
                </p>
                <Link
                  href="/products/equipment"
                  className="text-white border-b-2 border-white hover:border-orange-200 transition-colors"
                >
                  자세히 보기 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            지금 바로 주문하세요
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            전문 상담을 통해 최적의 냉매 솔루션을 제안드립니다
          </p>
          <Link
            href="/order"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            온라인 주문하기
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
