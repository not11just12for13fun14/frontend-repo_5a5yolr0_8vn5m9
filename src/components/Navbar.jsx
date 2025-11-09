import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { key: 'about', label: 'Tentang Kami' },
  { key: 'programs', label: 'Program Kegiatan' },
  { key: 'news', label: 'Berita' },
  { key: 'products', label: 'Jenis Produk' },
  { key: 'gallery', label: 'Galeri' },
  { key: 'contact', label: 'Kontak' },
];

export default function Navbar({ currentPage, onNavigate }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-[#8B3E92] flex items-center justify-center text-white font-bold">YR</div>
            <div className="leading-tight">
              <div className="font-semibold text-[#8B3E92]">Yayasan Rumah Kita</div>
              <div className="text-xs text-gray-500">Peduli • Edukasi • Pemberdayaan</div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === item.key
                    ? 'text-white bg-[#8B3E92]'
                    : 'text-gray-700 hover:text-[#8B3E92] hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4">
            <div className="grid gap-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    onNavigate(item.key);
                    setOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === item.key
                      ? 'text-white bg-[#8B3E92]'
                      : 'text-gray-700 hover:text-[#8B3E92] hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
