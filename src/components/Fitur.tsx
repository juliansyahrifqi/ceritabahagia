import FeatureCard from './FeatureCard'
import SectionDivider from './SectionDivider'

const features = [
  {
    id: 1,
    image: '/musik.svg',
    title: 'Musik',
    description: 'Bebas memilih musik sesuai dengan keinginan'
  },
  {
    id: 2,
    image: '/countdown.svg',
    title: 'Hitung Mundur',
    description: 'Hitung mundur waktu menuju hari bahagia'
  },
  {
    id: 3,
    image: '/ucapan.svg',
    title: 'Kolom Ucapan',
    description: 'Lihat dan kirim ucapan dan harapan'
  },
  {
    id: 4,
    image: '/navigasi.svg',
    title: 'Navigasi Google Maps',
    description: 'Navigasi google maps ke lokasi acara'
  },
  {
    id: 5,
    image: '/animasi.svg',
    title: 'Animasi Website',
    description: 'Membuat website lebih menarik dan interaktif'
  },
  {
    id: 6,
    image: '/galeri.svg',
    title: 'Galeri Foto',
    description: 'Bebas memilih foto-foto yang ingin ditampilkan'
  },
]

export default function Fitur() {
  return (
    <section className='fitur mt-5 md:container mx-auto' id='fitur'>
      <div className='px-10 md:px-40 py-5 md:py-14'>
        <SectionDivider title="Fitur" />

        <h3 className='w-full md:w-3/4 mx-auto text-4xl font-bold font-lato md:leading-relaxed text-center text-black md:tracking-wide mt-8'>Kami selalu berusaha untuk menghadirkan fitur yang terbaik.</h3>

        <h4 className='w-full md:w-1/2 mx-auto text-md font-medium font-montserrat text-secondary-black text-center mt-5'>Dengan menggunakan jasa kami, pelanggan akan mendapatkan beberapa fitur yang menarik.</h4>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 px-10 md:px-24'>
        {features.map((feature) => (
          <FeatureCard feature={feature} key={feature.id}/>
        ))}
      </div>
    </section>
  )
}
