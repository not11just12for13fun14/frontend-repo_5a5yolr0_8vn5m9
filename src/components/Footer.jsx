export default function Footer() {
  return (
    <footer className="bg-[#511C56] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-md bg-white/10 flex items-center justify-center font-bold">YR</div>
          <div>
            <div className="font-semibold text-lg">Yayasan Rumah Kita</div>
            <p className="text-sm text-white/80">Peduli • Edukasi • Pemberdayaan</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Alamat</h4>
          <p className="text-white/80 text-sm">Jl. Kasih Persada No. 12, Kota Harmoni, Indonesia 12345</p>
          <p className="text-white/80 text-sm mt-2">Email: info@yayasanrumahkita.org</p>
          <p className="text-white/80 text-sm">Telepon: +62 812-3456-7890</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Ikuti Kami</h4>
          <div className="flex gap-3">
            <a href="#" className="inline-flex items-center px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 transition">Facebook</a>
            <a href="#" className="inline-flex items-center px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 transition">Instagram</a>
            <a href="#" className="inline-flex items-center px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 transition">YouTube</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-white/70">
          © {new Date().getFullYear()} Yayasan Rumah Kita. Hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}
