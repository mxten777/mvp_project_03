import Link from "next/link";

export default function OrderPage() {
	return (
		<main className="min-h-[60vh] flex items-center justify-center py-24">
			<div className="max-w-3xl w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center">
				<h1 className="text-3xl font-extrabold mb-4">주문 페이지</h1>
				<p className="mb-6 text-gray-700">현재는 임시 주문 페이지입니다. 주문 기능 통합 전까지 이 페이지를 사용합니다.</p>
				<div className="flex items-center justify-center gap-4">
					<Link href="/" className="btn-primary px-6 py-2">홈으로</Link>
					<Link href="/contact" className="px-6 py-2 border rounded-md">문의하기</Link>
				</div>
			</div>
		</main>
	);
}
