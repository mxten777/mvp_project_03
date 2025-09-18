"use client";

import { useState } from "react";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { OrderItem, CustomerInfo } from "@/types";

// 임시 제품 데이터
const products = [
  {
    id: "r410a",
    name: "R-410A 냉매",
    category: "냉매 가스",
    description: "친환경 냉매로 대부분의 최신 에어컨에 사용",
    unit: "kg",
    specifications: "순도 99.9% 이상"
  },
  {
    id: "r134a",
    name: "R-134a 냉매",
    category: "냉매 가스", 
    description: "자동차 에어컨 및 상업용 냉장고에 사용",
    unit: "kg",
    specifications: "순도 99.9% 이상"
  },
  {
    id: "r22",
    name: "R-22 냉매",
    category: "냉매 가스",
    description: "기존 시스템 유지보수용 (신규 설치 제한)",
    unit: "kg", 
    specifications: "순도 99.8% 이상"
  },
  {
    id: "copper-tube",
    name: "동관 파이프",
    category: "HVAC 부자재",
    description: "에어컨 배관용 동관",
    unit: "m",
    specifications: "직경 6mm-35mm"
  },
  {
    id: "valve",
    name: "서비스 밸브",
    category: "HVAC 부자재",
    description: "냉매 충전 및 회수용 밸브",
    unit: "개",
    specifications: "1/4\", 3/8\", 1/2\""
  }
];

export default function OrderPage() {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    address: "",
    businessNumber: "",
    industry: ""
  });

  const addToOrder = (productId: string, productName: string, unit: string) => {
    const existingItem = orderItems.find(item => item.productId === productId);
    
    if (existingItem) {
      setOrderItems(orderItems.map(item =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setOrderItems([...orderItems, {
        productId,
        productName,
        quantity: 1,
        unit,
        notes: ""
      }]);
    }
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      setOrderItems(orderItems.filter(item => item.productId !== productId));
    } else {
      setOrderItems(orderItems.map(item =>
        item.productId === productId
          ? { ...item, quantity }
          : item
      ));
    }
  };

  const updateItemNotes = (productId: string, notes: string) => {
    setOrderItems(orderItems.map(item =>
      item.productId === productId
        ? { ...item, notes }
        : item
    ));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 기본 검증
    if (!customerInfo.companyName || !customerInfo.contactPerson || !customerInfo.email || !customerInfo.phone) {
      alert("필수 정보를 모두 입력해주세요.");
      return;
    }

    if (orderItems.length === 0) {
      alert("주문할 제품을 선택해주세요.");
      return;
    }

    // 여기에 API 호출 로직 추가
    console.log("주문 정보:", { customerInfo, orderItems });
    alert("주문이 접수되었습니다. 담당자가 곧 연락드리겠습니다.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4 drop-shadow">온라인 주문</h1>
          <p className="text-xl text-gray-700">필요한 제품을 선택하고 주문 정보를 입력해주세요</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 제품 선택 영역 */}
          <div className="lg:col-span-2">
            <div className="bg-white/90 rounded-2xl shadow-xl p-8 border border-blue-100">
              <h2 className="text-2xl font-bold mb-8 flex items-center text-blue-700">
                <ShoppingCart className="mr-2 h-7 w-7" /> 제품 선택
              </h2>
              <div className="space-y-6">
                {products.map((product) => {
                  const orderItem = orderItems.find(item => item.productId === product.id);
                  return (
                    <div key={product.id} className="border rounded-xl p-5 bg-white/80 flex flex-col gap-2 shadow-sm hover:shadow-lg transition-all duration-200">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-blue-900">{product.name}</h3>
                          <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                          <p className="text-gray-600 mb-1">{product.description}</p>
                          <p className="text-sm text-gray-400">규격: {product.specifications}</p>
                        </div>
                        <div className="ml-4 flex items-center space-x-2">
                          {orderItem ? (
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => updateQuantity(product.id, orderItem.quantity - 1)}
                                className="p-1 rounded-full bg-gray-200 hover:bg-blue-200"
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="px-3 py-1 bg-blue-100 rounded">
                                {orderItem.quantity} {product.unit}
                              </span>
                              <button
                                onClick={() => updateQuantity(product.id, orderItem.quantity + 1)}
                                className="p-1 rounded-full bg-gray-200 hover:bg-blue-200"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => addToOrder(product.id, product.name, product.unit)}
                              className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition-all duration-200"
                            >
                              추가
                            </button>
                          )}
                        </div>
                      </div>
                      {orderItem && (
                        <div className="mt-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">특이사항</label>
                          <input
                            type="text"
                            value={orderItem.notes || ""}
                            onChange={(e) => updateItemNotes(product.id, e.target.value)}
                            placeholder="수량, 규격, 배송 관련 요청사항 등"
                            className="w-full px-3 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* 주문자 정보 및 주문 요약 */}
          <div className="space-y-8">
            {/* 주문 요약 */}
            <div className="bg-white/90 rounded-2xl shadow-xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold mb-6 text-blue-800">주문 요약</h3>
              {orderItems.length === 0 ? (
                <p className="text-gray-400">선택된 제품이 없습니다.</p>
              ) : (
                <div className="space-y-3">
                  {orderItems.map((item) => (
                    <div key={item.productId} className="flex justify-between items-center py-2 border-b last:border-b-0">
                      <div>
                        <div className="font-medium text-blue-900">{item.productName}</div>
                        {item.notes && (
                          <div className="text-sm text-gray-500">{item.notes}</div>
                        )}
                      </div>
                      <div className="text-right">
                        <div>{item.quantity} {item.unit}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* 주문자 정보 */}
            <div className="bg-white/90 rounded-2xl shadow-xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold mb-6 text-blue-800">주문자 정보</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">회사명 *</label>
                  <input
                    type="text"
                    required
                    value={customerInfo.companyName}
                    onChange={(e) => setCustomerInfo({...customerInfo, companyName: e.target.value})}
                    className="w-full px-3 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">담당자명 *</label>
                  <input
                    type="text"
                    required
                    value={customerInfo.contactPerson}
                    onChange={(e) => setCustomerInfo({...customerInfo, contactPerson: e.target.value})}
                    className="w-full px-3 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">이메일 *</label>
                  <input
                    type="email"
                    required
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                    className="w-full px-3 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">연락처 *</label>
                  <input
                    type="tel"
                    required
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                    className="w-full px-3 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">주소</label>
                  <textarea
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                    rows={3}
                    className="w-full px-3 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">사업자등록번호</label>
                  <input
                    type="text"
                    value={customerInfo.businessNumber}
                    onChange={(e) => setCustomerInfo({...customerInfo, businessNumber: e.target.value})}
                    className="w-full px-3 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">업종</label>
                  <input
                    type="text"
                    value={customerInfo.industry}
                    onChange={(e) => setCustomerInfo({...customerInfo, industry: e.target.value})}
                    placeholder="예: HVAC 설치업, 냉동공조업 등"
                    className="w-full px-3 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-full font-bold shadow hover:bg-blue-700 text-lg transition-all duration-200"
                >
                  주문 접수
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
