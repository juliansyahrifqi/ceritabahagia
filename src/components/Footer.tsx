import MetodePembayaran from "./MetodePembayaran";
import SocmedButton from "./SocmedButton";
import { payments } from "../assets/constant";

export default function Footer() {
  return (
    <footer className="bg-footer w-full text-white px-4 md:px-24 py-5 md:py-10">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
        <div className="footer-logo">
          <img src="/logo.png" alt="Logo" className="w-40" />
          <h4 className="text-xl font-bold mt-4">Cerita Bahagia</h4>
        </div>

        <div className="footer-link">
          <h4 className="font-bold text-xl">Hubungi Kami</h4>

          <a href="https://wa.me/628998932302?text=Halo%20admin,%20saya%20ingin%20memesan%20digital%20wedding%20invitation%20" target="_blank" rel="noreferrer">
            <SocmedButton image="/whatsapp.svg" title="(+62) 899-8932-302"/>
          </a>

          <a href="mailto:ceritabahagiastory@gmail.com" target="_blank" rel="noreferrer">
            <SocmedButton image="/email.svg" title="ceritabahagiastory@gmail.com" />          
          </a>

          <a href="https://g.page/toko-kopi-maju?share" target="_blank" rel="noreferrer" className="text-white">
            <p className="text-white text-sm mt-4">Jl. Sekeloa Utara No. 57a, Sekeloa, Kecamatan Coblong, Kota Bandung, Jawa Barat 40134</p>
          </a>
        </div>

        <div className="metode-pembayaran">
          <h4 className="font-bold text-xl">Metode Pembayaran</h4>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {payments.map((payment, i) => (
              <MetodePembayaran image={payment.image} key={i} />
            ))}
          </div>
        </div>

        <div className="sosial-media">
          <h4 className="font-bold text-xl">Sosial Media</h4>

          <a href="https://www.instagram.com/ceritabahagia.story/" target="_blank" rel="noreferrer">
            <SocmedButton image="/instagram.svg" title="@ceritabahagia.story"/>
          </a>

          <a href="https://twitter.com/sunandmonstudio" target="_blank" rel="noreferrer">
            <SocmedButton image="/twitter.svg" title="@sunandmonstudio" />
          </a>
          
        </div>
      </div>
    </footer>
  )
}
