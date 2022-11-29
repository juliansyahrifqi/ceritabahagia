import Button from "./Button";

export default function Offering() {
  return (
    <section className="offering bg-blue-primary p-16 mt-16">
      <div className="flex flex-wrap items-center justify-center gap-12">
        <h3 className="text-3xl text-white font-bold leading-relaxed max-w-md text-center">Bagikan cerita bahagiamu bersama kami</h3>

        <Button size="large" title="Hubungi Kami" isPrimary linkType="external" link="https://wa.me/628998932302?text=Halo%20admin,%20saya%20ingin%20memesan%20digital%20wedding%20invitation%20paket%20Basic" />
      </div>
    </section>
  )
}
