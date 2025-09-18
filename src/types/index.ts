// 제품 관련 타입
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  specifications: string;
  image?: string;
  price?: number;
  unit: string;
}

// 주문 관련 타입
export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  unit: string;
  notes?: string;
}

export interface Order {
  id: string;
  customerInfo: CustomerInfo;
  items: OrderItem[];
  totalAmount?: number;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
  notes?: string;
}

// 고객 정보 타입
export interface CustomerInfo {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  businessNumber?: string;
  industry?: string;
}

// 네비게이션 타입
export interface NavItem {
  href: string;
  label: string;
  external?: boolean;
}

// API 응답 타입
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}
