export default function Home({ onNavigate }) {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F8F8F8] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center text-xs font-semibold tracking-widest uppercase text-[#8B3E92] bg-[#8B3E92]/10 px-3 py-1 rounded-full">Yayasan Rumah Kita</span>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">Bersama Mewujudkan Harapan Melalui Sosial, Pendidikan, dan Pemberdayaan</h1>
            <p className="mt-4 text-gray-600 text-lg">Kami bergerak untuk menghadirkan akses pendidikan, kegiatan sosial yang berkelanjutan, dan program pemberdayaan masyarakat.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={() => onNavigate('about')} className="px-5 py-3 rounded-md bg-[#8B3E92] text-white font-medium shadow hover:shadow-md transition transform hover:scale-[1.02]">Tentang Kami</button>
              <button onClick={() => onNavigate('programs')} className="px-5 py-3 rounded-md bg-[#F4B23C] text-gray-900 font-medium shadow hover:shadow-md transition transform hover:scale-[1.02]">Program Kami</button>
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1600&auto=format&fit=crop" alt="Kegiatan sosial yayasan" className="w-full h-80 md:h-96 object-cover rounded-xl shadow-lg" />
            <div className="absolute -bottom-6 -left-6 bg-white shadow rounded-lg p-4 border border-gray-100">
              <p className="text-sm text-gray-600">“Pendidikan adalah senjata paling ampuh yang bisa digunakan untuk mengubah dunia.”</p>
              <p className="text-xs mt-2 text-gray-500">— Nelson Mandela</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Unggulan */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-gray-900">Program Unggulan</h2>
          <p className="text-gray-600 mt-2">Tiga program inti yang menjadi fokus kami.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {title: 'Kegiatan Sosial', desc: 'Bakti sosial, bantuan bencana, dan pelayanan masyarakat.', img: 'https://images.unsplash.com/photo-1544531587-9e5455e07e5b?q=80&w=1600&auto=format&fit=crop'},
              {title: 'Taman Bacaan', desc: 'Ruang membaca yang nyaman untuk anak dan masyarakat.', img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1600&auto=format&fit=crop'},
              {title: 'Sekolah Alam', desc: 'Pembelajaran kontekstual berbasis alam dan praktik langsung.', img: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1600&auto=format&fit=crop'},
            ].map((c) => (
              <div key={c.title} className="group rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5">
                <img src={c.img} alt={c.title} className="h-44 w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 group-hover:text-[#8B3E92] transition">{c.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kutipan Inspiratif */}
      <section className="bg-gradient-to-r from-[#8B3E92]/10 via-white to-[#F4B23C]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <blockquote className="text-2xl md:text-3xl font-semibold text-gray-800 leading-relaxed">
            "Setiap langkah kecil kebaikan akan menjadi cahaya bagi masa depan bersama."
          </blockquote>
        </div>
      </section>
    </main>
  );
}
