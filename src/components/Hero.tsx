import HeroImage from '../assets/hero-image.svg';
import Button from './Button';
import HorizontalDivider from './HorizontalDivider';

export default function Hero() {
  return (
    <section className="hero grid md:grid-cols-2 gap-4 items-center bg-blue-primary px-10 py-10 md:py-24 md:px-20" id="hero">
      <div className="hero-description">
        <HorizontalDivider width='short' color='white' />

        <h1 className='w-full xl:w-[72%] xl:text-[2.5rem] text-3xl font-bold text-white leading-relaxed tracking-wide mt-3 selection:bg-blue-700'>Siapkan Undangan Digitalmu Bersama Kami</h1>

        <h2 className='text-white mt-8 font-normal text-sm xl:text-md selection:bg-blue-700 tracking-wider mb-5'>Bagikan hari dan cerita bahagiamu kepada semua orang</h2>

        <Button title="Lihat apa yang kami tawarkan" size='medium' link="#fitur" linkType="internal" isPrimary />
      </div>

      <img src={HeroImage} alt="hero-image" />
    </section>
  )
}
