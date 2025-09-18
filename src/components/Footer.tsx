export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-100 to-white border-t mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <div className="mb-2 md:mb-0">© 2025 한국코프론. All rights reserved.</div>
        <div className="flex flex-col md:flex-row gap-1 md:gap-4 text-gray-500">
          <span>대표: 송하선</span>
          <span>용인시 기흥구 지곡동 381-6</span>
        </div>
      </div>
    </footer>
  );
}
