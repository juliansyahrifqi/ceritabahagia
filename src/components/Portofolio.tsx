import Button from './Button'
import HorizontalDivider from './HorizontalDivider'

export default function Portofolio() {
  return (
    <section className="py-5 my-5 md:container mx-auto">
      <div className='grid md:grid-cols-2 gap-12 items-center px-10 md:px-24'>
        <img src="/portofolio.png" alt="" className='p-5 bg-blue-primary rounded-3xl' />

        <div className='portfolio-information'>
          <div className='portfolio-title flex items-center gap-5'>
            <HorizontalDivider width='short' color='primary'/>
            <p className='font-semibold'>Portofolio</p>
          </div>

          <h1 className='font-lato font-black text-3xl md:text-5xl mt-5 md:mt-8 md:leading-snug md:tracking-wide text-black'>Lihat apa yang sudah kami kerjakan</h1>

          <p className='text-xs md:text-sm font-medium text-secondary-black mt-5 md:mt-8'>Kami selalu berusaha memberikan hasil yang terbaik untuk memuaskan para pelanggan kami.</p>

          <div className='mt-8 md:mt-14'>
            <Button title='Lihat lainnya...' isPrimary size='medium' linkType='internal' link='/portofolio' />
          </div>
        </div>
      </div>
    </section>
  )
}
