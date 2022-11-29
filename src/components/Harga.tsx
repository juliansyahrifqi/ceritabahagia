import HargaCard from './HargaCard';
import HargaCardPremium from './HargaCardPremium';
import SectionDivider from './SectionDivider';
import { paketHarga } from '../assets/constant';

export default function Harga() {
  return (
    <section className='harga my-5 md:container mx-auto' id='harga'>
      <div className='px-10 md:px-40 py-5 md:py-14'>
        <SectionDivider title='Harga' />

        <h3 className='w-full md:w-3/4 mx-auto text-4xl font-bold font-lato md:leading-relaxed text-center text-black md:tracking-wide mt-8'>Kami memiliki beberapa paket harga yang menarik</h3>

        <h4 className='w-full md:w-1/2 mx-auto text-md font-medium font-montserrat text-secondary-black text-center mt-5'>Kami memiliki paket harga yang bisa disesuaikan dengan kebutuhan pelanggan</h4>
      </div>

      <div className='px-4 md:px-24'>
        <div className='grid lg:grid-cols-3 gap-5'>
          { paketHarga.map((paket, i) => (
            paket.name === 'Premium' ? (
              <HargaCardPremium harga={paket} key={i}/>
            ) : (
              <HargaCard harga={paket} key={i} />
            )
          ))}
        </div>
      </div>
    </section>
  )
}
