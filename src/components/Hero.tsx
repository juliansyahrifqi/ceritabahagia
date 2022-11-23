import HeroImage from '../assets/hero-image.svg';

export default function Hero() {
  return (
    <section className="hero grid md:grid-cols-2 gap-4 items-center bg-blue-primary px-10 py-10 md:py-24 md:px-20" id="hero">
      <div className="hero-description">
        <hr className='w-16 border'/>

        <h1 className='w-full xl:w-[72%] xl:text-[2.5rem] text-3xl font-bold text-white leading-relaxed tracking-wide mt-3 selection:bg-blue-700'>Siapkan Undangan Digitalmu Bersama Kami</h1>

        <p className='text-white mt-8 font-normal text-sm xl:text-md selection:bg-blue-700 tracking-wider'>Bagikan hari dan cerita bahagiamu kepada semua orang</p>

        <button className='bg-semigold hover:bg-gold duration-500 rounded-full py-4 px-5 mt-5 font-bold text-hover-gold'>
          Lihat apa yang kami tawarkan
        </button>
      </div>

      <img src={HeroImage} alt="hero-image" />
    </section>
  )
}
