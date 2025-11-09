export function AboutPage() {
  const people = [
    { name: 'Ayu Pramudita', role: 'Ketua Yayasan', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop' },
    { name: 'Rizal Saputra', role: 'Wakil Ketua', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop' },
    { name: 'Sari Wulandari', role: 'Sekretaris', img: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=800&auto=format&fit=crop' },
    { name: 'Dedi Hartono', role: 'Bendahara', img: 'https://images.unsplash.com/photo-1541534401786-2077eed87a93?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <main className="bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Tentang Kami</h1>
        <p className="mt-3 text-gray-600 leading-relaxed">Yayasan Rumah Kita adalah organisasi nirlaba yang berfokus pada kegiatan sosial, pendidikan, dan pemberdayaan masyarakat. Kami hadir untuk membuka akses dan peluang bagi masyarakat agar dapat tumbuh dan mandiri.</p>
      </section>

      <section className="bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900">Struktur Organisasi</h2>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {people.map((p) => (
              <div key={p.name} className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                <img src={p.img} alt={p.name} className="h-44 w-full object-cover" />
                <div className="p-4">
                  <div className="font-semibold text-gray-900">{p.name}</div>
                  <div className="text-sm text-[#8B3E92] font-medium">{p.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export function ProgramsPage() {
  const programs = [
    { title: 'Kegiatan', desc: 'Berbagai aksi sosial dan pengabdian masyarakat.', img: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Taman Bacaan', desc: 'Fasilitas literasi untuk anak dan umum.', img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Sekolah Alam', desc: 'Pembelajaran berbasis alam yang menyenangkan.', img: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1600&auto=format&fit=crop' },
    { title: 'TPA', desc: 'Tempat Pendidikan Al-Quran bagi anak.', img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1600&auto=format&fit=crop' },
  ];

  return (
    <main className="bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Program Kegiatan</h1>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {programs.map((p) => (
            <div key={p.title} className="group rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5">
              <img src={p.img} alt={p.title} className="h-40 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 group-hover:text-[#8B3E92] transition">{p.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export function NewsPage() {
  const posts = [
    { title: 'Bakti Sosial di Desa Harmoni', date: '12 Okt 2025', img: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1600&auto=format&fit=crop', excerpt: 'Kegiatan bakti sosial berlangsung meriah dengan partisipasi warga setempat...' },
    { title: 'Launching Taman Bacaan', date: '28 Sep 2025', img: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1600&auto=format&fit=crop', excerpt: 'Taman bacaan baru resmi dibuka untuk umum dengan koleksi buku menarik...' },
    { title: 'Kelas Alam Perdana', date: '10 Agu 2025', img: 'https://images.unsplash.com/photo-1452697620382-f6543ead73b5?q=80&w=1600&auto=format&fit=crop', excerpt: 'Anak-anak belajar langsung di alam dengan materi interaktif...' },
  ];
  return (
    <main className="bg-white">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Berita</h1>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img src={p.img} alt={p.title} className="h-44 w-full object-cover" />
              <div className="p-5">
                <div className="text-xs text-gray-500">{p.date}</div>
                <h3 className="mt-1 font-semibold text-gray-900 group-hover:text-[#8B3E92]">{p.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{p.excerpt}</p>
                <button className="mt-3 inline-flex items-center text-[#8B3E92] font-medium hover:underline">Baca Selengkapnya →</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export function ProductsPage() {
  const items = [
    { title: 'Tepung', desc: 'Produk tepung berkualitas hasil binaan UMKM.', img: 'https://images.unsplash.com/photo-1586521995568-39c0300b58b8?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Kue Kering', desc: 'Aneka kue kering produksi kelompok usaha.', img: 'https://images.unsplash.com/photo-1519847845537-2432d51d79de?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Pelatihan', desc: 'Program pelatihan keterampilan dan wirausaha.', img: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop' },
  ];

  return (
    <main className="bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Jenis Produk Yayasan</h1>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <div key={p.title} className="group rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5">
              <img src={p.img} alt={p.title} className="h-44 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 group-hover:text-[#8B3E92] transition">{p.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export function GalleryPage() {
  const images = [
    'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1494173853739-c21f58b16055?q=80&w=1600&auto=format&fit=crop',
  ];

  return (
    <main className="bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Galeri</h1>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <a href={src} key={i} target="_blank" rel="noreferrer" className="group relative block overflow-hidden rounded-lg">
              <img src={src} alt={`Galeri ${i+1}`} className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-3">Klik gambar untuk melihat lebih besar.</p>
      </section>
    </main>
  );
}

export function ContactPage() {
  return (
    <main className="bg-white">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Kontak</h1>
        <form className="mt-6 bg-white border border-gray-200 rounded-xl p-6 grid gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nama</label>
            <input type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-[#8B3E92] focus:ring-[#8B3E92]" placeholder="Nama lengkap" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-[#8B3E92] focus:ring-[#8B3E92]" placeholder="email@contoh.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Pesan</label>
            <textarea rows={4} className="mt-1 w-full rounded-md border-gray-300 focus:border-[#8B3E92] focus:ring-[#8B3E92]" placeholder="Tulis pesan Anda" />
          </div>
          <button type="button" className="justify-self-start px-5 py-2.5 rounded-md bg-[#8B3E92] text-white font-medium hover:brightness-110 transition">Kirim</button>
        </form>

        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          <div className="bg-[#F8F8F8] rounded-xl p-6">
            <h3 className="font-semibold text-gray-900">Alamat</h3>
            <p className="text-gray-600 text-sm mt-1">Jl. Kasih Persada No. 12, Kota Harmoni, Indonesia 12345</p>
          </div>
          <div className="bg-[#F8F8F8] rounded-xl p-6">
            <h3 className="font-semibold text-gray-900">Kontak</h3>
            <p className="text-gray-600 text-sm mt-1">Telepon: +62 812-3456-7890</p>
            <p className="text-gray-600 text-sm">Email: info@yayasanrumahkita.org</p>
            <div className="flex gap-3 mt-3">
              <a href="#" className="text-[#8B3E92] hover:underline">Facebook</a>
              <a href="#" className="text-[#8B3E92] hover:underline">Instagram</a>
              <a href="#" className="text-[#8B3E92] hover:underline">YouTube</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
