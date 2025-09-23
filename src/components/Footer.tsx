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
      <div className="max-w-7xl mx-auto pb-8 px-4">
        <div className="w-full h-64 rounded-lg overflow-hidden border mt-4">
          <iframe
            title="네이버 지도"
            src="https://map.naver.com/v5/entry/place/13490206?c=15,0,0,0,dh"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </footer>
  );
}
