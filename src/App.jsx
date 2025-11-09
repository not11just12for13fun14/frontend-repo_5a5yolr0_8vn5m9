import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { AboutPage, ProgramsPage, NewsPage, ProductsPage, GalleryPage, ContactPage } from './components/Pages';

const PAGES = {
  home: { title: 'Beranda', component: Home },
  about: { title: 'Tentang Kami', component: AboutPage },
  programs: { title: 'Program Kegiatan', component: ProgramsPage },
  news: { title: 'Berita', component: NewsPage },
  products: { title: 'Jenis Produk', component: ProductsPage },
  gallery: { title: 'Galeri', component: GalleryPage },
  contact: { title: 'Kontak', component: ContactPage },
};

export default function App() {
  const [page, setPage] = useState('home');
  const Current = PAGES[page].component;

  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter">
      <Navbar currentPage={page} onNavigate={setPage} />

      {/* Banner bar to hint multi-page navigation mimic */}
      <div className="bg-[#F8F8F8] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            {PAGES[page].title}
          </div>
          {page !== 'home' && (
            <button onClick={() => setPage('home')} className="text-sm text-[#8B3E92] hover:underline">Kembali ke Beranda</button>
          )}
        </div>
      </div>

      <div className="">
        {page === 'home' ? <Current onNavigate={setPage} /> : <Current />}
      </div>

      <Footer />
    </div>
  );
}
