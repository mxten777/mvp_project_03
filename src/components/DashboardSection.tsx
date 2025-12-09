"use client";

import { motion } from "framer-motion";
import { Package, DollarSign, Users, Star, TrendingUp } from "lucide-react";

const stats = [
  { 
    label: "총 주문건수", 
    value: "1,245", 
    unit: "건",
    icon: Package,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600"
  },
  { 
    label: "월간 거래액", 
    value: "98M", 
    unit: "원",
    icon: DollarSign,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-100",
    textColor: "text-green-600"
  },
  { 
    label: "파트너사 수", 
    value: "27", 
    unit: "개사",
    icon: Users,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-100",
    textColor: "text-purple-600"
  },
  { 
    label: "고객 만족도", 
    value: "98", 
    unit: "%",
    icon: Star,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-100",
    textColor: "text-orange-600"
  },
];

export default function DashboardSection() {
  return (
    <section id="dashboard" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50/30 to-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <TrendingUp className="w-4 h-4" />
            실적 현황
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-4">주요 지표</h2>
          <p className="text-gray-600">한국코프론의 성장하는 비즈니스 현황입니다</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="card-premium p-6 text-center group relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.color} opacity-10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500`}></div>
                
                <div className={`inline-flex items-center justify-center w-16 h-16 ${item.bgColor} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${item.textColor}`} />
                </div>
                
                <div className="text-sm font-semibold text-gray-600 mb-2">{item.label}</div>
                
                <div className="flex items-end justify-center gap-1 mb-2">
                  <span className={`text-4xl font-extrabold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.value}
                  </span>
                  <span className="text-lg font-bold text-gray-500 mb-1">{item.unit}</span>
                </div>

                <div className={`inline-flex items-center gap-1 ${item.bgColor} ${item.textColor} px-3 py-1 rounded-full text-xs font-semibold`}>
                  <TrendingUp className="w-3 h-3" />
                  전월 대비 12% 증가
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block card-premium px-6 py-3">
            <p className="text-gray-600 text-sm">
              <span className="font-semibold text-blue-600">실시간 데이터</span> 연동은 추후 구현 예정입니다
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
